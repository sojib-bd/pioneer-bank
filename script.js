const loginBtn = document.getElementById('login-btn');

const loginArea = document.getElementById("login-area");

const transactionArea = document.getElementById('transaction-area')

loginBtn.addEventListener('click', () => {
    loginArea.style.display = "none";
    transactionArea.style.display = "block"
})