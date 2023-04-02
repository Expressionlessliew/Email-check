const emailContainer = document.getElementById("emailcontainer");
const saveBTN = document.getElementById("save");
const checkbtn = document.getElementById("check-email");
const emailinput = document.getElementById("email-input");
const AlertMessage = document.getElementById("alertMessage");
const emailregex =
  /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
let newData;
let phoneData;

const Phsave = document.getElementById("phsave");
const Checkbtn = document.getElementById("check-phone");
const Phoneinput = document.getElementById("phone-input");
const phoneContainer = document.getElementById("phonecontainer");
const phoneregex = /^(\+?6?01)[02-46-9]-*[0-9]{7}$|^(\+?6?01)[1]-*[0-9]{8}$/;
const alertPHone = document.getElementById("alertphone");

console.log(phoneContainer);

saveBTN.addEventListener("click", BTNsave);
emailinput.addEventListener("input", handleChange);
checkbtn.addEventListener("click", validateEmail);

Phsave.addEventListener("click", PHsave);
Phoneinput.addEventListener("input", PhnData);
Checkbtn.addEventListener("click", Checkph);

function PhnData(event) {
  phoneData = event.target.value;
  console.log(phoneData);
}

function PHsave() {
  console.log(phoneData);
  phoneContainer.innerHTML = phoneData;
  alertPHone.innerHTML = "";
}

function Checkph() {
  const phoneValue = phoneContainer.innerHTML;
  if (phoneValue != null) {
    if (phoneregex.test(phoneValue)) {
      //   console.log("valid email");
      alertPHone.innerHTML =
        '<span style="font-size:40px; color:green; padding-top:10px">Valid phone number</span>';
    } 
    else {
      //   console.log("not an email");
      alertPHone.innerHTML =
        '<span style="font-size:40px; color:red; padding-top:10px">Invalid phone number</span>';
    }
  }
}

function handleChange(event) {
  newData = event.target.value;
}

function BTNsave() {
  emailContainer.innerHTML = newData;
  AlertMessage.innerHTML = "";
}

function validateEmail() {
  const currentValue = emailContainer.innerHTML;
  if (currentValue != null) {
    if (emailregex.test(currentValue)) {
      //   console.log("valid email");
      AlertMessage.innerHTML =
        '<span style="font-size:40px; color:green; padding-top:10px">Valid email</span>';
      alert("valid email");
    } else {
      //   console.log("not an email");
      AlertMessage.innerHTML =
        '<span style="font-size:40px; color:red; padding-top:10px">Invalid email</span>';
    }
  }
}
