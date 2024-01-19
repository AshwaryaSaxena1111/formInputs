function validateform(event) {
  //event.preventDefault();
  // console.log("abc");
  //alert("jjjj");
  const name = document.myform.firstname.value;
  const lastName = document.myform.lastname.value;
  const email = document.myform.email.value;
  const message = document.myform.message.value;
  const address = document.myform.address.value;
  const telNo = document.myform.telNo.value;
  const password = document.myform.password.value;

  console.log(name);
  console.log(lastName);
  console.log(email);
  console.log(message);
  console.log(address);
  console.log(telNo);
  console.log(password);

  if (name == null || name == "") {
    alert("Name can't be blank");
    all1.focus();
    return false;
  } else if (lastName == null || lastName == "") {
    alert("Last Name can't be blank");
    all2.focus();
    return false;
  } else if (email == "") {
    alert("Email can't be blank");
    all3.focus();
    return false;
  } else if (email != "" && !email.includes("@")) {
    alert("Please enter valid email.");
    all3.focus();
    return false;
  } else if (message == null || message == "") {
    alert("Message can't be blank");
    all4.focus();
    return false;
  } else if (address == null || address == "") {
    alert("address can't be blank");
    all5.focus();
    return false;
  } else if (telNo == null || telNo == "") {
    alert("telNo can't be blank");
    all6.focus();
    return false;
  } else if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return false;
  }
}

all1.onblur = function () {
  if(!all1.value.includes(Number)) {
    all1.classList.add("invalid");
    error1.innerHTML = "Please enter a correct first name."
  }
}

all2.onblur = function () {
  if (!all2.value.includes(Number)) {
    all2.classList.add("invalid");
    error2.innerHTML = "Please enter a correct last name.";
  }
};

all3.onblur = function () {
  if (!all3.value.includes("@")) {
    // not email
    all3.classList.add("invalid");
    error3.innerHTML = "Please enter a correct email.";
  }
};

all4.onblur = function () {
  if (!all4.value.includes(Number)) {
    all4.classList.add("invalid");
    error4.innerHTML = "Please enter a correct message.";
  }
};

all5.onblur = function () {
  if (!all5.value.includes(Number)) {
    all5.classList.add("invalid");
    error5.innerHTML = "Please enter a correct address.";
  }
};

// all3.onfocus = function () {
//   if (this.classList.contains("invalid")) {
//     // remove the "error" indication, because the user wants to re-enter something
//     this.classList.remove("invalid");
//     error.innerHTML = "";
//   }
// };
const finalValue = `My name is ${firstname}`;
