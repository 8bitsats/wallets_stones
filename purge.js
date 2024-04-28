const web3 = require('@solana/web3.js');

// Initialize connection to Solana cluster
const connection = new web3.Connection(web3.clusterApiUrl('mainnet-beta'), 'confirmed');

// List of excluded wallet addresses
const purgeList = [
    'ExampleWalletAddress1',
    'ExampleWalletAddress2'
];

// Function to check if a wallet is in the purge list
function isWalletPurged(walletAddress) {
    return purgeList.includes(walletAddress);
}

// Simulate presale token purchase
async function purchaseTokens(walletAddress, amount) {
    if (isWalletPurged(walletAddress)) {
        console.error('This wallet is purged from participating in the presale.');
        return;
    }

    // Simulate a token transfer (here you would integrate your SPL token transfer logic)
    console.log(`Transferring ${amount} tokens to ${walletAddress}`);
}

// Example usage
const walletAddress = 'YourWalletAddressHere';
purchaseTokens(walletAddress, 100);
