// Import necessary modules
import { NextResponse } from "next/server";
const fs = require('fs');
import { readFile } from 'node:fs/promises';
import { createReadStream } from 'node:fs'
//import axios from 'axios';
const pinataSDK = require('@pinata/sdk');
const axios = require('axios')
//const fetch = require('node-fetch');
//const web3 = new Web3('https://mainnet.infura.io/v3/cefd254c30444690b9f3c32bb9516630'); // Replace with your Infura project ID
const apiKeySecret="SUzAs9uL7FGABk6eP6q1SUtOgAQpi28GE3fnRfuUz0ToNG9YyhVpzA";
const apiKeyId="cefd254c30444690b9f3c32bb9516630";
const JWT="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIxYzQ5OTU4NC0zOGM3LTQ0ZTItODE3My0wNmY0ZGU0MTk0NDgiLCJlbWFpbCI6InRzYW1hMjA5QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiI5M2EzYzg2MjQ3YzJjM2NkNzA1OSIsInNjb3BlZEtleVNlY3JldCI6IjhkNWViZDMzMGQ1ZTFkNzBiZWYxMDg3NjA2ZTFmN2MxZWU5OGRiYTZjZmMyMGM0YTg2NmExNTI1ZDdjYWFhYTUiLCJpYXQiOjE3MTIwMzMyNjB9.dJgx0_6S9CRz9Rq2bytI2v-tSnsRavIiLwagzRGl_zQ";
export async function POST(request:any) {
    try {
     
        const { type, data, hashAddress} = await request.json();
        let response = {};

        
        switch (type) {
            case 'STORE':
                response = await storeData(data);
                break;
            case 'GET':
                response = await getData(hashAddress);
                break;
            case 'STATUS':
                response = await showStatus(hashAddress);
                break;
            default:
                response = { status: 'error', message: 'Invalid request type' };
        }

       
        return NextResponse.json(response);
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ status: 'error', message: 'Internal server error' });
    }
}



async function storeData(data: string | URL) {
    try {
    //  { pinataApiKey: 'a4afa96ba5007f955324', pinataSecretApiKey: 'c3d497f7df8b265c1d862897fb9632d4d53a905d1ba8d1eca48376747e80408b' }
const pinata = new pinataSDK({ pinataJWTKey: JWT});
const readableStreamForFile = fs.createReadStream('./src/app/api/wallet/abc.json');
const options = {
    pinataMetadata: {
        name: "lumenc",
        keyvalues: {
            customKey: 'customValue',
            customKey2: 'customValue2'
        }
    },
    pinataOptions: {
        cidVersion: 0
    }
};
const res = await pinata.pinFileToIPFS(readableStreamForFile, options)
console.log(res)
    
      return { status: 'success', message: 'success storing data' ,transaction:res};
      
}catch (error) {
  console.error("Data storage error:", error);
  return { status: 'error', message: 'Error storing data' };
}
}
  
async function getData( data:string) {
    try {
      //{ pinataApiKey: 'a4afa96ba5007f955324', pinataSecretApiKey: 'c3d497f7df8b265c1d862897fb9632d4d53a905d1ba8d1eca48376747e80408b' }
      const pinata = new pinataSDK();
      const readableStreamForFile = fs.createReadStream('./src/app/api/wallet/abc.json');
      const options = {
          pinataMetadata: {
              name: "lumen",
              keyvalues: {
                  customKey: 'customValue',
                  customKey2: 'customValue2'
              }
          },
          pinataOptions: {
              cidVersion: 0
          }
      };
      const res = await pinata.pinFileToIPFS(readableStreamForFile, options)
      console.log(res)
          
            return { status: 'success', message: 'success storing data' ,transaction:res};
    

        // return { status: 'success', message: `Success`, transactionHash: resdata };
    } catch (error) {
        console.error("Data storage error:", error);
        return { status: 'error', message: 'Error storing data' };
    }
}
async function showStatus( data:string) {                      
    try {
        const filePath = new URL(data, import.meta.url);
        const formData = new FormData();
  formData.append('file', await readFile(filePath, { encoding: 'utf8' }));

  const response = await fetch('https://ipfs.infura.io:5001/api/v0/block/put?format=v0&mhtype=sha2-256&mhlen=-1', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${btoa(`${apiKeyId}:${apiKeySecret}`)}`,
      'Content-Type': 'multipart/form-data'
    },
    body: formData
  });
          if (!response.ok) {
            throw new Error('Google Maps API request failed');
          }
          const resdata = await response.json();
    

        return { status: 'success', message: `Success`, transactionHash: resdata };
    } catch (error) {
        console.error("Data storage error:", error);
        return { status: 'error', message: 'Error storing data' };
    }
}