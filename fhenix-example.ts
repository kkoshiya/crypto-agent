import { Contract, ethers } from 'ethers'; 
import { FhenixClient, EncryptionTypes, getPermit, SupportedProvider, Permit, generatePermit } from 'fhenixjs';
import { sampleAbi } from './src/abi/sampleAbi';
import { JsonRpcProvider } from 'ethers';
import 'dotenv/config';

const contractAddress = '0x62CaE4060C13563dF73c13a2A69C17AF98ede3Ca';
const provider = new JsonRpcProvider('https://api.nitrogen.fhenix.zone');
const adminWallet = new ethers.Wallet(process.env.PRIVATE_KEY as string, provider);
const contractInstance = new Contract(contractAddress, sampleAbi, adminWallet);
const client = new FhenixClient({ provider: provider as unknown as SupportedProvider });

async function main() {
    const encyrptedAmount = await client.encrypt(Number(4), EncryptionTypes.uint8);
    const tx = await contractInstance.setHighestNumber(encyrptedAmount);
    const receipt = await tx.wait();
    console.log(receipt.hash);
}

async function getCipherText() {
    const provider1 = new ethers.JsonRpcProvider('https://api.nitrogen.fhenix.zone');
    console.log("Getting cipher text");
    await provider1.ready;
    console.log(provider1);
    const signer = await provider1.getSigner();
    console.log(signer);
    const permit = await client.generatePermit(contractAddress, provider1 as SupportedProvider, adminWallet);
    if (!permit) throw new Error("Failed to get permit");
    console.log(permit);
    // const permission = await client.extractPermitPermission(permit);
    // const response = await contractInstance.getSealedOutput(permission);
    // const plaintext = client.unseal(contractAddress, response, adminWallet.address);
    // console.log(`SealOutput: ${plaintext}`);
}

getCipherText().catch(console.error);
//main().catch(console.error);







