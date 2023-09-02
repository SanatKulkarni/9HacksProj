// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract GoldSupplyChain {
    address public owner;

    enum State {
        Created,
        InTransitToSeller,
        InTransitToBuyer,
        Delivered
    }

    struct GoldItem {
        string name;
        uint weight; // in grams
        address maker;
        address seller;
        address buyer;
        State state;
    }

    GoldItem[] public goldItems;

    event GoldItemCreated(uint indexed itemId, address indexed maker);
    event GoldItemInTransitToSeller(uint indexed itemId);
    event GoldItemInTransitToBuyer(uint indexed itemId);
    event GoldItemDelivered(uint indexed itemId);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    modifier onlyMaker(uint itemId) {
        require(msg.sender == goldItems[itemId].maker, "Only the maker can call this function");
        _;
    }

    modifier onlySeller(uint itemId) {
        require(msg.sender == goldItems[itemId].seller, "Only the seller can call this function");
        _;
    }

    modifier onlyBuyer(uint itemId) {
        require(msg.sender == goldItems[itemId].buyer, "Only the buyer can call this function");
        _;
    }

    modifier inState(uint itemId, State requiredState) {
        require(goldItems[itemId].state == requiredState, "Invalid state for this operation");
        _;
    }

    function createGoldItem(string memory name, uint weight) external {
        GoldItem memory newItem = GoldItem({
            name: name,
            weight: weight,
            maker: msg.sender,
            seller: address(0),
            buyer: address(0),
            state: State.Created
        });
        goldItems.push(newItem);
        emit GoldItemCreated(goldItems.length - 1, msg.sender);
    }

    function startTransitToSeller(uint itemId, address sellerAddress) external onlyMaker(itemId) inState(itemId, State.Created) {
    goldItems[itemId].seller = sellerAddress;
    goldItems[itemId].state = State.InTransitToSeller;
    emit GoldItemInTransitToSeller(itemId);
}

function startTransitToBuyer(uint itemId, address buyerAddress) external onlySeller(itemId) inState(itemId, State.InTransitToSeller) {
    goldItems[itemId].buyer = buyerAddress;
    goldItems[itemId].state = State.InTransitToBuyer;
    emit GoldItemInTransitToBuyer(itemId);
}

    function markDelivered(uint itemId) external onlyBuyer(itemId) inState(itemId, State.InTransitToBuyer) {
        goldItems[itemId].state = State.Delivered;
        emit GoldItemDelivered(itemId);
    }

    function getGoldItem(uint itemId)
        external
        view
        returns (
            string memory name,
            uint weight,
            address maker,
            address seller,
            address buyer,
            State state
        )
    {
        GoldItem storage item = goldItems[itemId];
        return (item.name, item.weight, item.maker, item.seller, item.buyer, item.state);
    }
}