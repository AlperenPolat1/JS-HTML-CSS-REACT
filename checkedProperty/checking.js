const mycheckbox = document.getElementById("mycheckbox");
const VisaBtn = document.getElementById("VisaBtn");
const MasterCardBtn = document.getElementById("MasterCardBtn");
const PayPalBtn = document.getElementById("PayPalBtn");
const mysubmit = document.getElementById("Mysubmit");
const subresult = document.getElementById("subresult");
const paymentresult = document.getElementById("paymentresult");

mysubmit.onclick = function() {
    if (mycheckbox.checked) {
        subresult.textContent = "You are subscribed ! ";
    } else {
        subresult.textContent = "You are not subscribed ! ";
    }
    if (VisaBtn.checked) {
        paymentresult.textContent = "You are paying with Visa  ";
    } else if (MasterCardBtn.checked) {
        paymentresult.textContent = "You are paying with MasterCard  ";
    } else if (PayPalBtn.checked) {
        paymentresult.textContent = "You are paying with PayPal  ";
    } else {
        paymentresult.textContent = "You must select a payment type ! ";
    }
}