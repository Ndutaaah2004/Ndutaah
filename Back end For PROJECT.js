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
    // Add event listener to the form on page load
    var signupForm = document.getElementById("signupForm");

    signupForm.addEventListener("submit", function (event) {
        // Prevent form submission if validation fails
        if (!validateForm()) {
            event.preventDefault();
        }
    });
});

function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;


    if (password !== confirmPassword) {
        alert("Password and Confirm Password must match");
        return false;
    }

    

    return true;
}
        function validateForm(): {
            var password = document.getElementById("password").value;
            var confirmPassword = document.getElementById("confirmPassword").value;

            if (password !== confirmPassword) {
                alert("Password and Confirm Password must match");
                return false;
            }

            return true;
        }


app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;


    res.send(`Login successful, ${username}!`);
});
function checkbalance() {
   
    const balance = 1000.00; 

    document.getElementById('balance').textContent = balance.toFixed(2);
}

app.post('/transact', (req, res) => {
    const recipient = req.body.recipient;
    const amount = req.body.amount;


    res.send(`Transaction successful! Sent ${amount} to ${recipient}`);
});


app.post('/loan', (req, res) => {
    const loanAmount = req.body.loanAmount;
    const term = req.body.term;

   
    res.send(`Loan application successful! Loan amount: ${loanAmount}, Term: ${term} months`);
});


app.post('/deposit', (req, res) => {
    const depositAmount = req.body.depositAmount;

    res.send(`Deposit successful! Deposited ${depositAmount}`);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
