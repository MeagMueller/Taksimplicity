import login from "./login/login"

const allContainer = document.querySelector("#all-container")
const landingPageContainer = document.querySelector("#landing-page")

const landingPage = {

    landingPageWithLogin() {

        // creating landing page form

        let landingPageLoginDiv = document.createElement("div")
        let landingPageLoginFragment = document.createDocumentFragment()

        let greeting = document.createElement("h1")
        greeting.textContent = "Welcome to Taksimplicity!"
        greeting.setAttribute("id", "greetingHeader")

        landingPageLoginFragment.appendChild(greeting)

        let landingPageLoginButton = document.createElement("button")
        landingPageLoginButton.setAttribute("id", "landingPageLoginButton")
        landingPageLoginButton.textContent = "Click to Login!"
        landingPageLoginFragment.appendChild(landingPageLoginButton)

        landingPageLoginButton.addEventListener("click", () => {

            // calling login form
            login.createLoginForm()

            // clearing container
            while (landingPageContainer.firstChild) {
                landingPageContainer.removeChild(landingPageContainer.firstChild)
            }
        })

        landingPageLoginDiv.appendChild(landingPageLoginFragment)

        landingPageContainer.appendChild(landingPageLoginDiv)

        }
    }


export default landingPage