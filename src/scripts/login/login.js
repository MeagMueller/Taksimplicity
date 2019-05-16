import fetchCalls from "../apiManager"
import loginHandlers from "./loginHandlers"

let loginContainer = document.querySelector("#login-container")

const login = {

    createLoginForm() {

        // creating login form

        let loginDiv = document.createElement("div")

        let loginFragment = document.createDocumentFragment()

        let loginUsernameLabel = document.createElement("label")
        loginUsernameLabel.textContent = "Enter Username: "
        loginFragment.appendChild(loginUsernameLabel)

        let loginUsernameInput = document.createElement("input")
        loginUsernameInput.setAttribute("id", "loginUsernameInput")
        loginUsernameInput.placeholder = "Username"
        loginFragment.appendChild(loginUsernameInput)

        let loginPasswordLabel = document.createElement("label")
        loginPasswordLabel.textContent = "Enter Password: "
        loginFragment.appendChild(loginPasswordLabel)

        let loginPasswordInput = document.createElement("input")
        loginPasswordInput.setAttribute("id", "loginPasswordInput")
        loginPasswordInput.placeholder = "Password"
        loginFragment.appendChild(loginPasswordInput)

        let loginButton = document.createElement("button")
        loginButton.textContent = "Login"
        loginButton.setAttribute("id", "loginButton")
        loginButton.addEventListener("click", loginHandlers.loginToTaksimplicity)
        loginFragment.appendChild(loginButton)

        loginDiv.appendChild(loginFragment)

        loginContainer.appendChild(loginDiv)

    }
}

export default login