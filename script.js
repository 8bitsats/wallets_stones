document.addEventListener("DOMContentLoaded", function() {
    fetch('holders.json')
        .then(response => response.json())
        .then(data => window.wallets = data);
});
// Ensure you add the Jupiter library script in your HTML or load it here dynamically
function initJupiterWidget() {
    const jupiterWidget = new Jupiter({
        container: document.getElementById('jupiter-widget'),
        connection: new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('mainnet-beta')),
        // You must configure these options according to Jupiter's documentation
        wallet: userWallet, // Provide the connected wallet instance
        theme: 'dark' // Optional: 'light' or 'dark'
    });

    jupiterWidget.render();
}

initJupiterWidget();

function checkWallet() {
    const input = document.getElementById('walletInput').value;
    const resultElement = document.getElementById('result');
    if (window.wallets.includes(input)) {
        resultElement.innerText = 'You are stoned, anon.';
        alert('You are stoned, anon.');
    } else {
        resultElement.innerText = 'Wallet not found.';
    }
}
