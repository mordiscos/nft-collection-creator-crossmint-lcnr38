import axios from 'axios';

// Define the API key and base URL
const API_KEY = 'your_crossmint_api_key';
const BASE_URL = 'https://www.crossmint.com/api';

// Define the headers for the API request
const headers = {
    'X-API-KEY': API_KEY,
    'Content-Type': 'application/json'
};

// Define the data for creating a new NFT collection
const createCollectionData = {
    chain: 'polygon',
    metadata: {
        name: 'Sample NFT Collection',
        imageUrl: 'https://www.crossmint.com/assets/crossmint/logo.png',
        description: 'This is a sample NFT collection',
        symbol: 'XMINT'
    },
    fungibility: 'non-fungible',
    supplyLimit: 500,
    payments: {
        price: '0.01',
        recipientAddress: '0xYourWalletAddress'
    },
    reuploadLinkedFiles: true
};

// Function to create a new NFT collection
async function createCollection() {
    try {
        const response = await axios.post(`${BASE_URL}/2022-06-09/collections/`, createCollectionData, { headers });
        console.log('Collection Created:', response.data);
    } catch (error) {
        console.error('Error creating collection:', error);
    }
}

// Invoke the function to create the collection
createCollection();
