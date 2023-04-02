const emailContainer = document.getElementById("emailcontainer");
const saveBTN = document.getElementById("save");
const checkbtn = document.getElementById("check-email");
const emailinput = document.getElementById("email-input");
const AlertMessage = document.getElementById("alertMessage");
const emailregex =
  /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
let newData;

console.log(saveBTN);
console.log(emailContainer);
console.log(checkbtn);
console.log(emailinput);

saveBTN.addEventListener("click", BTNsave);
emailinput.addEventListener("input", handleChange);
checkbtn.addEventListener("click", validateEmail);

function handleChange(event) {
  newData = event.target.value;
}

function BTNsave() {
  emailContainer.innerHTML = newData;
}

function validateEmail() {
  const currentValue = emailContainer.innerHTML;
  if (currentValue != null) {
    if (emailregex.test(currentValue)) {
      console.log("valid email");
      AlertMessage.innerHTML = "vaild email"
    }
    else{
      console.log("not an email")
      AlertMessage.innerHTML = "invaild email"
    }
  }
}
