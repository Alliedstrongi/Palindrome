
// This is our controller
function getValues() {
  //get the user's input
  //decide what to do with it
  let userInput = document.getElementById('message').value;

  let reversedInput = reverseString(userInput);

  displayString(reversedInput);
}

// logic
function reverseString(message) {
  //take a string, return that string in reverse
  let reversedMessage = ''

  for (let index = message.length - 1; index >= 0; index--) {
    reversedMessage += message[index];
  }

  return reversedMessage
}

//view function
function displayString(reversedMessage) {
  //show the string on the page
  document.getElementById('msg').textContent = reversedMessage;
  document.getElementById('alert').classList.remove('d-none');
}

//  Swal.fire({
//    backdrop: false,
//    title: "Rewind",
//    text: msg,
//  });
//  }
