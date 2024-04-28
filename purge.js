const web3 = require('@solana/web3.js');

// Initialize connection to Solana cluster
const connection = new web3.Connection(web3.clusterApiUrl('mainnet-beta'), 'confirmed');

// List of excluded wallet addresses
const purgeList = [
    'AA4cwrBxTgdQ4E826Rossu5DSiXVTLpu2VCxubd91ks2'
];

// Function to check if a wallet is in the purge list
function isWalletPurged(walletAddress) {
    return purgeList.includes(walletAddress);
}


async function purchaseTokens(walletAddress, amount) {
    if (isWalletPurged(walletAddress)) {
        console.error('This wallet is purged from participating in the presale.');
        return;
    }

   
    console.log(`Transferring ${amount} tokens to ${walletAddress}`);
}


const walletAddress = 'YourWalletAddressHere';
purchaseTokens(walletAddress, 100);
