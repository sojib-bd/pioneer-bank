// Login event listener
const loginBtn = document.getElementById('login-btn');

const loginArea = document.getElementById("login-area");

const transactionArea = document.getElementById('transaction-area');

const depositBtn = document.getElementById('depositBtn');
const withdrawBtn = document.getElementById('withdrawBtn');




loginBtn.addEventListener('click', () => {
    loginArea.style.display = "none";
    transactionArea.style.display = "block"
})



// Deposit Event
depositBtn.addEventListener('click', function () {
    const depositInput = document.getElementById("depositInput");
    const depositInputAmount = parseFloat(depositInput.value);
    depositInput.value = ""

    updateSpan('depositTotal', depositInputAmount)
    updateSpan('currentBalance', depositInputAmount)


})

//common functionality between the two
function updateSpan(id, depositInputAmount) {
    const current = document.getElementById(id);
    const currentAmount = parseFloat(current.innerText);
    const totalCurrent = currentAmount + depositInputAmount;

    current.innerText = totalCurrent

}



//withdraw Btn event

withdrawBtn.addEventListener('click', function () {
    const withdrawInput = document.getElementById("withdrawInput");
    const withdrawInputAmount = parseFloat(withdrawInput.value);
    withdrawInput.value = ""

    updateSpan('currentWithdraw', withdrawInputAmount);
    updateSpan('currentBalance', -1 * withdrawInputAmount);



})

