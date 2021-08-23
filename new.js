const welcomeArea = document.getElementById('welcome');
const amount = document.getElementById('amount');

const enterBtn = document.getElementById('Enter');
enterBtn.addEventListener('click', function () {
    welcomeArea.style.display = 'none';
    amount.style.display = 'block';
})

const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input').value;
    const depositNum1 = parseInt(depositInput);
    if (depositInput == '') {
        alert('Please Enter a Amount')
    }
    else {
        let depositAmount = document.getElementById('deposit-amount').innerText;
        const depositNum2 = parseInt(depositAmount);

        const total = depositNum1 + depositNum2;
        document.getElementById('deposit-amount').innerText = total;

        document.getElementById('deposit-input').value = '';

        const currentBalance = document.getElementById('current-balance').innerText;
        const balance = parseFloat(currentBalance);
        const total1 = balance + depositNum1;

        document.getElementById('current-balance').innerText = total1;

    }


})

const withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input').value;
    const withdraw = parseFloat(withdrawInput);

    const withdrawBalance = document.getElementById('withdraw-balance').innerText;
    const balance = parseFloat(withdrawBalance);

    const total = withdraw + balance;
    document.getElementById('withdraw-balance').innerText = total;

    const currentBalance1 = document.getElementById('current-balance').innerText;
    const balance1 = parseFloat(currentBalance1);

    const total1 = balance1 - withdraw;

    document.getElementById('current-balance').innerText =  total1;
    document.getElementById('withdraw-input').value = '';
})
