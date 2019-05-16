import performances from "./performances/performances"
import performanceList from "./performances/performanceList"
import performanceHandlers from "./performances/performancesHandlers"
import props from "./props/props"
import propsList from "./props/propsList"
import propsHandlers from "./props/propsHandlers"
import login from "./login/login"
import loginHandlers from "./login/loginHandlers"
import logout from "./logout/logout"

const allContainer = document.querySelector("#all-container")
const landingPageContainer = document.querySelector("#landing-page")

const landingPage = {

    landingPageWithLogin() {

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
            login.createLoginForm()
            while (landingPageContainer.firstChild) {
                landingPageContainer.removeChild(landingPageContainer.firstChild)
            }
        })

        landingPageLoginDiv.appendChild(landingPageLoginFragment)

        landingPageContainer.appendChild(landingPageLoginDiv)

        
        }
    }


export default landingPage