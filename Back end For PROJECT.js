const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signupForm");

    signupForm.addEventListener("submit", function (event) {
        if (!validateForm()) {
            event.preventDefault();
        }
    });
});

function validateForm() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Password and Confirm Password must match");
        return false;
    }

    return true;
}

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    res.send(`Login successful, ${username}!`);
});

function checkBalance() {
    const balance = 1000.00; 
    document.getElementById('balance').textContent = balance.toFixed(2);
}

app.post('/transact', (req, res) => {
    const { recipient, amount } = req.body;
    res.send(`Transaction successful! Sent ${amount} to ${recipient}`);
});

app.post('/loan', (req, res) => {
    const { loanAmount, term } = req.body;
    res.send(`Loan application successful! Loan amount: ${loanAmount}, Term: ${term} months`);
});

app.post('/deposit', (req, res) => {
    const { depositAmount } = req.body;
    res.send(`Deposit successful! Deposited ${depositAmount}`);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
