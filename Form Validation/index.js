var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName() {
  var name = document.getElementById("contact-name").value;
  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write full name";
    return false;
  }
  nameError.innerHTML = "valid";
  return true;
}

function validatePhone() {
  var phone = document.getElementById("contact-phone").value;
  if (phone.length == 0) {
    phoneError.innerHTML = "Phone is required";
    return false;
  }
  if (phone.length !== 10) {
    phoneError.innerHTML = "Phone number should be 10 digit";
    return false;
  }

  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "Enter correct number";
    return false;
  }
  phoneError.innerHTML = "valid";
  return true;
}

function validateEmail() {
  var email = document.getElementById("contact-email").value;
  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }

  if (
    !email.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
  ) {
    emailError.innerHTML = "Email Invalid";
    return false;
  }
  emailError.innerHTML = "valid";
  return true;
}

function validateMessage() {
  var message = document.getElementById("contact-message").value;
  if (message.length == 0) {
    messageError.innerHTML = "Message must contains 30 letters";
    return false;
  }

  if (message.length < 30) {
    messageError.innerHTML = `Remaining letters ${30 - message.length}`;
    return false;
  }
  messageError.innerHTML = "valid";
  return true;
}

function validateForm() {
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateMessage()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please Fix error to Submit";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
}
