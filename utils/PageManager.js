function createSignIn() {
    const signInPage = document.getElementById("SignInPage");
    const userNameLabel = document.createElement("label");
    userNameLabel.textContent = "Username";
    userNameLabel.classList.add("signInLabel");
    const usernameBox = document.createElement("input");
    usernameBox.type = "textbox";
    usernameBox.classList.add("signInTextBox")
    const passwordLabel = document.createElement("label");
    passwordLabel.textContent = "Password";
    passwordLabel.classList.add("signInLabel");
    const passwordBox = document.createElement("input");
    passwordBox.type = "textbox";
    passwordBox.classList.add("signInTextBox")
    const registerBtn = document.createElement("button");
    registerBtn.id = "register-btn";
    registerBtn.type = "text";
    registerBtn.textContent = "Register an Account";
    registerBtn.classList.add("register-btn")
    registerBtn.addEventListener("click", registerOnClick);
    signInPage.appendChild(userNameLabel);
    signInPage.appendChild(usernameBox);
    signInPage.appendChild(passwordLabel);
    signInPage.appendChild(passwordBox);
    signInPage.appendChild(registerBtn)
    document.body.appendChild(signInPage);
}

function registerOnClick() {
    const button = document.getElementById("register-btn")
    button.textContent = "Register Button has been clicked!";
}

function createRegister() {

}