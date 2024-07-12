function validateSyntax() {
  let input = document.getElementById("petInput").value;
  let result = ""; // Placeholder for validation result

  // Regular expression to check if input starts with 'pet_' followed by alphanumeric characters
  let regex = /^pet_[a-zA-Z0-9]+$/;

  if (regex.test(input)) {
    result = '<span class="valid">Valid syntax &#x1F7E2;</span>'; // Green circle
  } else {
    result = '<span class="invalid">Invalid syntax &#x1F534;</span>'; // Red circle
  }

  document.getElementById("result").innerHTML = result;
}
