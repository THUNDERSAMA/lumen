import { NextResponse } from "next/server";
import Wallet from 'ethereumjs-wallet';
import Web3 from 'web3';
const ganache = require('ganache-cli');

//Create a local Ethereum blockchain using ganache
const ganacheProvider = ganache.provider();
const web3 = new Web3(ganacheProvider);

// Step 2: Generate an Ethereum wallet
function generateEthereumWallet() {
  const wallet = Wallet.generate();
  const address = wallet.getAddressString();
  const privateKey = wallet.getPrivateKeyString();

  return {
    address,
    privateKey,
  };
}

//Add data to the blockchain
async function addDataToBlockchain(walletAddress: any, privateKey: any, data: any) {
  const account = web3.eth.accounts.privateKeyToAccount(privateKey);
  web3.eth.accounts.wallet.add(account);

  const gasPrice = await web3.eth.getGasPrice();

  const transactionObject = {
    from: walletAddress,
    to: account.address,
    data: web3.utils.asciiToHex(data),
  };

  const signedTransaction = await web3.eth.accounts.signTransaction(transactionObject, privateKey);

  const transactionReceipt = await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);

  return transactionReceipt;
}

// Fetching all data 
async function fetchDataFromBlockchain(walletAddress: any) {
  const result = await web3.eth.getStorageAt(walletAddress, 0);
  return result;
}

async function deleteDataOnBlockchain(walletAddress: any, privateKey: any) {
    const updatedData = web3.utils.asciiToHex('Data marked as deleted');
    await web3.eth.sendTransaction({
      from: walletAddress,
      to: walletAddress,
      gas: 2000000,
      gasPrice: await web3.eth.getGasPrice(),
      data: updatedData,
    });
}

async function updateDataOnBlockchain(walletAddress: any, privateKey: any) {
  const updatedData = web3.utils.asciiToHex('Data marked as deleted');
  await web3.eth.sendTransaction({
    from: walletAddress,
    to: walletAddress,
    gas: 2000000,
    gasPrice: await web3.eth.getGasPrice(),
    data: updatedData,
  });
}

export async function POST(request: { json: () => PromiseLike<{ type: any; data: any; userWalletaddress: any; userWalletprivateKey: any; }> | { type: any; data: any; userWalletaddress: any; userWalletprivateKey: any; }; }) {
  try {
    const { type, data, userWalletaddress, userWalletprivateKey } = await request.json();
    let mergedResults = {};

    if (type === 'CREATE') {
      const userWallet = generateEthereumWallet();
      console.log('User Wallet:', userWallet);
      mergedResults = {
        "msg": "success",
        "data": userWallet,
      };
    } else if (type === 'INSERT') {
      const transactionReceipt = await addDataToBlockchain(userWalletaddress, userWalletprivateKey, data);
      console.log('Transaction Receipt:', transactionReceipt);
      mergedResults = {
        "msg": "success",
        "transactionReceipt": transactionReceipt,
      };
    } else if (type === 'FETCH_PARTICULAR') {
      const fetchdata = await fetchDataFromBlockchain(userWalletaddress);
      console.log("fetch", fetchdata);
      mergedResults = {
        'msg': 'success',
        'DATA': fetchdata
      };
    } else if (type === 'UPDATE') {
      await deleteDataOnBlockchain(userWalletaddress, userWalletprivateKey);
      mergedResults = {
        "msg": "success",
        "data": "Data marked as deleted",
      };
    } else if (type === 'DELETE') {
      await updateDataOnBlockchain(userWalletaddress, userWalletprivateKey);
      mergedResults = {
        "msg": "success",
        "data": "Data updated successfully",
      };
    } else {
      mergedResults = {
        "msg": "invalid type"
      };
    }

    ganacheProvider.close(() => console.log('Local Ethereum blockchain closed.'));
    return NextResponse.json(mergedResults);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({
      status: 'error',
      message: 'Request payload error',
      errors: error,
    });
  }
}
