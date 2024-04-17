document.addEventListener("DOMContentLoaded", function() {
    fetch('holders.json')
        .then(response => response.json())
        .then(data => window.wallets = data);
});

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
