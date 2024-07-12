function validateSyntax() {
  let input = document.getElementById("petInput").value;
  let result = ""; // Placeholder for validation result

  // Regular expression to check if input starts with 'pet_' followed by alphanumeric characters
  let regex = /^pet_[a-zA-Z0-9]+$/;

  if (regex.test(input)) {
    result = "Valid input";
  } else {
    result = "Invalid input";
  }

  document.getElementById("result").innerText = result;
}
