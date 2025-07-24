const passwordInput = document.getElementById("password");
const loginBtn = document.querySelector(".login-btn");

function isValidPassword(password) {
  const hasLength = password.length >= 8;
  const hasLetter = /[A-Za-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[^A-Za-z0-9]/.test(password);
  return hasLength && hasLetter && hasNumber && hasSymbol;
}

function moveLoginBtn() {
  const form = document.querySelector("form");

  const maxX = form.clientWidth - loginBtn.offsetWidth;
  const maxY = form.clientHeight - loginBtn.offsetHeight;

  const randX = Math.floor(Math.random() * maxX);
  const randY = Math.floor(Math.random() * maxY);

  loginBtn.style.position = "absolute";
  loginBtn.style.left = `${randX}px`;
  loginBtn.style.top = `${randY}px`;
}

function handleLogin() {
  const password = passwordInput.value;
  if (!isValidPassword(password)) {
    moveLoginBtn();
    return false;
  }
  alert("Login successful!");
  return true;
}
