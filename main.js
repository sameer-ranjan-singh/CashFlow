const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAndCashAmount() {
  hideMessage();
  if (billAmount.value > 0) {
    if (parseInt(cashGiven.value) >= parseInt(billAmount.value)) {
      console.log(" Yes CASH given by customer is greater ");

      const amountToBeReturned = parseInt(cashGiven.value) - parseInt(billAmount.value); 
      calculateChange(amountToBeReturned);
    } else {
      console.log(" Since cash given is less than expected ");
      showMessage("Insufficient ! Pay More");
    }
  } else {
    showMessage("Invalid Bill Amount");
  }
});

function calculateChange(amountToBeReturned) {
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);

    console.log("1.number of notes of "+availableNotes[i]+" ="+numberOfNotes);
    if(numberOfNotes!=0){

      console.log("2. As number of notes is not zero ");
      // amount left after calculating the number of notes needed
       amountToBeReturned = amountToBeReturned % availableNotes[i];

       console.log("3.New Amount to be returned="+amountToBeReturned);
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