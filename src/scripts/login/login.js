import fetchCalls from "../apiManager"
import loginHandlers from "./loginHandlers"

let loginContainer = document.querySelector("#login-container")
loginContainer.classList = "form-group"

const login = {

    createLoginForm() {

        // creating login form

        let loginDiv = document.createElement("div")
        loginDiv.className = "loginDiv"

        let loginFragment = document.createDocumentFragment()

        let loginUsernameLabel = document.createElement("label")
        loginUsernameLabel.textContent = "Enter Username: "
        loginFragment.appendChild(loginUsernameLabel)

        let loginUsernameInput = document.createElement("input")
        loginUsernameInput.setAttribute("id", "loginUsernameInput")
        loginUsernameInput.setAttribute("class", "form-control")
        loginUsernameInput.placeholder = "Username"
        loginFragment.appendChild(loginUsernameInput)

        let loginPasswordLabel = document.createElement("label")
        loginPasswordLabel.textContent = "Enter Password: "
        loginFragment.appendChild(loginPasswordLabel)

        let loginPasswordInput = document.createElement("input")
        loginPasswordInput.setAttribute("type", "password")
        loginPasswordInput.setAttribute("class", "form-control")
        loginPasswordInput.setAttribute("id", "loginPasswordInput")
        loginPasswordInput.placeholder = "Password"
        loginFragment.appendChild(loginPasswordInput)

        let loginButton = document.createElement("button")
        loginButton.textContent = "Login"
        loginButton.setAttribute("id", "loginButton")
        loginButton.classList = "btn btn-dark loginButton"
        loginButton.addEventListener("click", loginHandlers.loginToTaksimplicity)
        loginFragment.appendChild(loginButton)

        loginDiv.appendChild(loginFragment)

        loginContainer.appendChild(loginDiv)

    }
}

export default login