import loginHandlers from "../login/loginHandlers"
import login from "../login/login"
import landingPage from "../landingPage";

const logoutContainer = document.querySelector("#logout-container")
const performancesDisplay = document.querySelector("#display-container")
const propsDisplay = document.querySelector("#display-props")
const allContainer = document.querySelector("#all-container")
const returnToAppContainer = document.querySelector("#return-container")

const logout = {

    logoutButton() {

        let logoutButtonDiv = document.createElement("div")

        let logoutButton = document.createElement("button")
        logoutButton.setAttribute("id", "logoutButton")
        logoutButton.textContent = "Logout"

        logoutButton.addEventListener("click", () => {
            let logoutConfirm = confirm("Are you sure you want to log out?")
            if (logoutConfirm === true) {
                this.logoutHandler()
                while (performancesDisplay.firstChild) {
                    performancesDisplay.removeChild(performancesDisplay.firstChild)
                while (propsDisplay.firstChild) {
                    propsDisplay.removeChild(propsDisplay.firstChild)
                }
                while (logoutContainer.firstChild) {
                    logoutContainer.removeChild(logoutContainer.firstChild)
                }
                }
            }
        })

        // FOR THE MORNING: why is removeItem removing the ID when the function hasn't even been called yet? Does it HAVE to be in an IF statement? 

        logoutButtonDiv.appendChild(logoutButton)
        logoutContainer.appendChild(logoutButtonDiv)

    },

    logoutHandler() {

        let logoutContainerFragment = document.createDocumentFragment()

        let returnToAppDiv = document.createElement("div")
        

        console.log("Logout Button Clicked")

        sessionStorage.clear()

        let returnToAppButton = document.createElement("button")
        returnToAppButton.setAttribute("id", "returnToAppButtom")
        returnToAppButton.textContent = "Return to Taksimplicity"
        logoutContainerFragment.appendChild(returnToAppButton)


        returnToAppButton.addEventListener("click", () => {
            landingPage.landingPageWithLogin()
            while (returnToAppContainer.firstChild) {
                returnToAppContainer.removeChild(returnToAppContainer.firstChild)
            }
        })

        returnToAppDiv.appendChild(logoutContainerFragment)
        returnToAppContainer.appendChild(returnToAppDiv)
    }

}

export default logout