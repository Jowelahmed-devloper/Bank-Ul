// Log In Button Event Handler

const loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener('click', function(){
    const loginArea = document.getElementById('loginArea');
    loginArea.style.display = 'none';

    const transactionArea = document.getElementById('transactionArea');
    transactionArea.style.display = 'block';
})

// Deposit Button Handler

const depositBtn = document.getElementById('depositBtn');
depositBtn.addEventListener('click', function(){
        
        const depositAmountNumber = getInputNumber('depositAmount')
        updateSpanText('currentDeposit', depositAmountNumber);
        updateSpanText('currentBalance', depositAmountNumber);
        document.getElementById('depositAmount').value ='';
})

// Withdraw Button  Event Handler

const withdrawBtn = document.getElementById('withdrawBtn');
withdrawBtn.addEventListener('click', function(){
    const withdrawAmountNumber = getInputNumber('withdrawAmount');
    updateSpanText('currentWithdraw', withdrawAmountNumber)
    updateSpanText('currentBalance', -1 * withdrawAmountNumber)
    document.getElementById('withdrawAmount').value = '';
})


// Function for input Number
function getInputNumber(id){
    const Amount = document.getElementById(id).value;
    const AmountNumber = parseFloat(Amount);
    return AmountNumber;
}

// Function for Deposit Button and current Balance 

function updateSpanText(id, depositAmountNumber){
    const Balance = document.getElementById(id).innerText;
    const currentNumber = parseFloat(Balance);
    const totalBalance = depositAmountNumber + currentNumber;
    document.getElementById(id).innerText = totalBalance;
}