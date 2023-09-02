import React, { useState, useEffect } from "react";
import Web3 from "web3";
import React from "react";
import "../app/globals.css";

const Maker = () => {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState("");
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [itemId, setItemId] = useState("");
  const [sellerAddress, setSellerAddress] = useState("");
  const [goldItems, setGoldItems] = useState([]);
  const [details, setDetails] = useState({});

  // Initialize Web3 and contract when the component mounts
  useEffect(() => {
    async function initWeb3() {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        const networkId = await web3Instance.eth.net.getId();
        const contractAddress = "0xCcDD0BE12faF098d9BDAb9E8255c213D0C0aE64F"; // Replace with your contract's address
         // Replace with your contract's ABI
        const contractInstance = new web3Instance.eth.Contract(
          [
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "weight",
                  "type": "uint256"
                }
              ],
              "name": "createGoldItem",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "itemId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "maker",
                  "type": "address"
                }
              ],
              "name": "GoldItemCreated",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "itemId",
                  "type": "uint256"
                }
              ],
              "name": "GoldItemDelivered",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "itemId",
                  "type": "uint256"
                }
              ],
              "name": "GoldItemInTransitToBuyer",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "itemId",
                  "type": "uint256"
                }
              ],
              "name": "GoldItemInTransitToSeller",
              "type": "event"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "itemId",
                  "type": "uint256"
                }
              ],
              "name": "markDelivered",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "itemId",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "buyerAddress",
                  "type": "address"
                }
              ],
              "name": "startTransitToBuyer",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "itemId",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "sellerAddress",
                  "type": "address"
                }
              ],
              "name": "startTransitToSeller",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "itemId",
                  "type": "uint256"
                }
              ],
              "name": "getGoldItem",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "weight",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "maker",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "seller",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "buyer",
                  "type": "address"
                },
                {
                  "internalType": "enum GoldSupplyChain.State",
                  "name": "state",
                  "type": "uint8"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "goldItems",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "weight",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "maker",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "seller",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "buyer",
                  "type": "address"
                },
                {
                  "internalType": "enum GoldSupplyChain.State",
                  "name": "state",
                  "type": "uint8"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            }
          ],
          contractAddress
        );

        // Request user's permission to connect to their wallet
        await window.ethereum.enable();

        const accounts = await web3Instance.eth.getAccounts();

        setWeb3(web3Instance);
        setContract(contractInstance);
        setAccount(accounts[0]); // Set the first account as the current account
      } else {
        alert("Please install MetaMask or another Ethereum wallet.");
      }
    }

    initWeb3();
  }, []);

  // Function to create a new gold item
  const createGoldItem = async () => {
    if (contract) {
      try {
        // Call the createGoldItem function on the contract
        await contract.methods.createGoldItem(name, weight).send({ from: account });
        // You can perform additional actions or updates here
      } catch (error) {
        console.error("Error creating gold item:", error);
      }
    }
  };

  // Function to start transit to seller
  const startTransitToSeller = async () => {
    if (contract) {
      try {
        // Call the startTransitToSeller function on the contract
        await contract.methods.startTransitToSeller(itemId, sellerAddress).send({ from: account });
        // You can perform additional actions or updates here
      } catch (error) {
        console.error("Error starting transit to seller:", error);
      }
    }
  };

  // Function to retrieve gold item details
  const getGoldItem = async (itemId) => {
    if (contract) {
      try {
        // Call the getGoldItem function on the contract
        const result = await contract.methods.getGoldItem(itemId).call();
        setDetails(result);
      } catch (error) {
        console.error("Error getting gold item details:", error);
      }
    }
  };

  return (
    <section className="">
      <div className="">
        <button>Connect Wallet</button>
      </div>
      <div className="">
        <h1 className="">Create Gold</h1>
        <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Weight" onChange={(e) => setWeight(e.target.value)} />
        <span>
          <button onClick={createGoldItem}>Create Gold</button>
        </span>
      </div>
      <div className="">
        <h1 className="">Sell to Seller</h1>
        <input type="text" placeholder="Item ID" onChange={(e) => setItemId(e.target.value)} />
        <input type="text" placeholder="Seller Address" onChange={(e) => setSellerAddress(e.target.value)} />
        <span>
          <button onClick={startTransitToSeller}>Sell</button>
        </span>
      </div>
      <div className="">
        <h1 className="">Check Status</h1>
        <input type="text" />
        <span>
          <button onClick={() => getGoldItem(itemId)}>Details</button>
        </span>
      </div>
      <div className="">
        <p className="id">{details.itemId}</p>
        <p className="Maker">{details.maker}</p>
        <p className="Seller">{details.seller}</p>
        <p className="Buyer">{details.buyer}</p>
        <p className="Weight">{details.weight}</p>
</div>
    </section>
  );
};

export default Maker;
