const tipButtons = document.querySelectorAll('.tip-value-btn');
const tipField = document.querySelector('.tip-value-input');
const billField = document.querySelector('#bill');
const numberPeopleField = document.querySelector('#people');
const resetBtn = document.querySelector('.reset-btn');
const tipAmountResult = document.querySelector('.tip-amount-result');
const totalAmount = document.querySelector('.total-amount');

let tipPercentage = 0;
let billAmount = 0;
let numberPeopleAmount = 0;

tipButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    tipButtons.forEach(btn => btn.classList.remove('active'));
    tipPercentage = +e.target.value;
    button.classList.add('active');
    calculateTip();
    updateResetButtonState();
  });
});

tipField.addEventListener('input', (e) => {
  tipPercentage = +e.target.value;
  tipButtons.forEach(btn => btn.classList.remove('active'));
  calculateTip();
  updateResetButtonState();
});

billField.addEventListener('input', (e) => {
  billAmount = +e.target.value;
  calculateTip();
  updateResetButtonState();
});

numberPeopleField.addEventListener('input', (e) => {
  numberPeopleAmount = +e.target.value;
  calculateTip();
  updateResetButtonState();
});

function isValidInput(value) {
  return !isNaN(value) && value > 0;
}

function calculateTip() {
  if (isValidInput(tipPercentage) && isValidInput(billAmount) && isValidInput(numberPeopleAmount)) {
    const tipValue = (billAmount * (tipPercentage / 100));
    const totalPerPerson = (billAmount + tipValue) / numberPeopleAmount;
    tipAmountResult.innerText = tipValue.toFixed(2);
    totalAmount.innerText = totalPerPerson.toFixed(2);
  } else {
    tipAmountResult.innerText = '0.00';
    totalAmount.innerText = '0.00';
  }
}

function updateResetButtonState() {
  const hasValues = billField.value || numberPeopleField.value || tipField.value;
  resetBtn.disabled = !hasValues;
}

resetBtn.addEventListener('click', () => {
  billField.value = '';
  numberPeopleField.value = '';
  tipField.value = '';
  tipButtons.forEach(btn => btn.classList.remove('active'));
  tipPercentage = billAmount = numberPeopleAmount = 0;
  tipAmountResult.innerText = '0.00';
  totalAmount.innerText = '0.00';
  resetBtn.disabled = true;
});
