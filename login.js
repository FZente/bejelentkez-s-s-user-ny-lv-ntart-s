function registration() {
  let reg_email = document.getElementById("reg_email").value;
  let reg_pass = document.getElementById("reg_pass").value;
  let reg_rep_pass = document.getElementById("reg_rep_pass").value;

  let joEmail = reg_email.include("@");

  if (joEmail == false) {
    alert("Helytelen email vagy jelszó!");
  }

  if (reg_pass != reg_rep_pass) {
    alert("Helytelen email vagy jelszó!");
  }
}
