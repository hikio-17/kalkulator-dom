const display = document.getElementById('result');
const number = document.getElementById('number');
const submit = document.getElementById('submit');
const reset = document.getElementById('reset');
const operators = document.getElementsByClassName('action');

let numbers = [];
let operator = '';
let result = '';
let simbol = '';

// create function basic operation mathematic
const sum = (a, b) => a + b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const substract = (a, b) => a - b;

// set operator
const action = e => {
  if (numbers.length === 0) {
    alert('Inputkan angka terlebih dahulu!');
    return;
  }

  if (operator !== '' && numbers.length === 1) {
    operator = e.target.id;
    simbol = e.target.textContent;
    display.innerText = numbers[0] + simbol;
    return;
  }

  if (numbers.length === 2) {
    return;
  }
  operator = e.target.id;
  simbol = e.target.textContent;
  display.innerText = numbers[0] + simbol;
}

for (let item of operators) {
  item.addEventListener('click', action);
}

// render result when user submit button
const handleSubmit = () => {
  const [ele1, ele2] = numbers;
  const a = parseInt(ele1);
  const b = parseInt(ele2);

  if (numbers.length !== 2) {
    alert('Masukkan inputan angka terlebih dahulu!');
    return;
  }

  if (operator === 'sum') {
    result = sum(a, b);
  } else if (operator === 'divide') {
    result = divide(a, b);
    if (!Number.isInteger(result)) {
      result = parseFloat(result).toFixed(4);
    }
  } else if (operator === 'substract') {
    result = substract(a, b);
  } else if (operator === 'multiply') {
    result = multiply(a, b);
  }

  display.innerText = `${numbers[0]} ${simbol} ${numbers[1]} = ${result}`
  submit.disabled = true;
}
submit.addEventListener('click', handleSubmit);

// render display when user change action
const renderDisplay = result => {
  display.innerText = document.getElementById('result').textContent + result;
}

// render and set numbers when user entering numbers
const handleAddBtn = () => {
  if (number.value === '') {
    alert('inputan tidak boleh kosong!');
    return;
  }

  if (numbers.length === 1 && operator === '') {
    alert('operator perhitungan harus ditambahkan!!');
    number.value = '';
    return;
  }

  numbers.push(number.value);

  if (numbers.length === 1) {
    display.innerText = numbers[0];
  }
  number.value = '';

  if (numbers.length >= 2) {
    display.innerText = numbers[0] + simbol + numbers[1]
    document.getElementById('add').disabled = true;
  }
}

// handle reset button when user click
const handleResetBtn = () => {
  numbers = [];
  operator = '';
  number.value = '';
  display.innerText = '';
  document.getElementById('add').disabled = false;
  submit.disabled = false;
}
reset.addEventListener('click', handleResetBtn);

