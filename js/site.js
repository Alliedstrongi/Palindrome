
// This is our controller
function getValues() {
  //get the user's input
  //decide what to do with it
  let userInput = document.getElementById('message').value;

  let noPunctuationOrSpacing = userInput.toLowerCase().replace(
    /[.,/#!$%^&*;:{}=-_`~() ]/g,
    ""
  );

  let reversedInput = reverseString(noPunctuationOrSpacing);

  displayString(reversedInput);
}

// logic
function reverseString(messages) {
  //take a string, return that string in reverse
  let userInput = document.getElementById("message").value;
  let noPunctuationOrSpacing = userInput
    .toLowerCase()
    .replace(/[.,/#!$%^&*;:{}=-_`~() ]/g, "");
  let reversedMessage = ''

  for (let index = messages.length - 1; index >= 0; index--) {
    reversedMessage = reversedMessage + messages[index];
  }

  if (noPunctuationOrSpacing == reversedMessage) {
    finalMessage = "Correct, " + userInput + " is a palindrome";
  } else
    finalMessage =
      "Sorry, but it seems that " +
      userInput +
      " is not a palendrome, try again!";

  return finalMessage
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
