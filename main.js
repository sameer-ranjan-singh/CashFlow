const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

checkButton.addEventListener("click", function validateBillAndCashAmount() {
  hideMessage();
  if (billAmount.value > 0) {
    if (parseInt(cashGiven.value) >= parseInt(billAmount.value)) {
      const amountToBeReturned = parseInt(cashGiven.value) - parseInt(billAmount.value); 
      calculateChange(amountToBeReturned);
    } else {
      showMessage("Insufficient ! Pay More");
    }
  } else {
    showMessage("Invalid Bill Amount");
  }
});

function calculateChange(amountToBeReturned) {
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    if(numberOfNotes!=0){
      // amount left after calculating the number of notes needed
       amountToBeReturned = amountToBeReturned % availableNotes[i];
    }
    // updating the no of notes in the table for the current amount
    noOfNotes[i].innerText = numberOfNotes;
  }
}

function hideMessage() {
  message.style.display = "none";
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}