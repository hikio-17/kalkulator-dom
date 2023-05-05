// create function basic aritmatich
const sum = (a, b) => a + b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const substract = (a, b) => a -b;

const display = document.getElementById('result')
const number = document.getElementById('number')
const submit = document.getElementById('submit')

let numbers = [];
let operator = '';
let result = '';

// set operator
const operators = document.getElementsByTagName('p');
const action = (e) => {
    if (operator !== '') {
        return;
    }
    operator = e.target.id;
    renderDisplay(e.target.textContent);  
}

for (let item of operators) {
    item.addEventListener('click', action)
}

// render result when user submit button
const handleSubmit = () => {
    const [ ele1, ele2 ] = numbers;
    const a = parseInt(ele1);
    const b = parseInt(ele2);
    if (operator === 'sum') {
        result = sum(a, b);
        renderDisplay(`=${result}`)
    } else if (operator === 'divide') {
        result = divide(a, b);
        renderDisplay(`=${result}`);
    } else if (operator === 'substract') {
        result = substract(a, b);
        renderDisplay(`=${result}`)
    } else if (operator === 'multiply') {
        result = multiply(a, b);
        renderDisplay(`=${result}`)
    }
}
submit.addEventListener('click', handleSubmit)

const renderDisplay = (result) => {
    display.innerText = document.getElementById('result').textContent + result
}

// render and set numbers when user entering numbers
const handleAddBtn = () => {
    if (number.value === '') {
        alert('inputan angka tidak boleh kosong');
        return;
    }

    if (numbers.length === 1 && operator === '') {
        alert('operator perhitungan harus ditambahkan!!');
        number.value = '';
        return;
    }

    numbers.push(number.value);
    renderDisplay(number.value);  
    document.getElementById('number').value = '';

    if (numbers.length >= 2) {
        document.getElementById('add').disabled = true;
    }
};

const reset = document.getElementById('reset');

const handleResetBtn = () => {
    numbers = [];
    operator = '';
    number.value = ''
    display.innerText = ''
    document.getElementById('add').disabled = false;
}

reset.addEventListener('click', handleResetBtn);


