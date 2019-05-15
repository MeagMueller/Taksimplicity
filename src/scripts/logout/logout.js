import loginHandlers from "../login/loginHandlers"

const logoutContainer = document.querySelector("#logout-container")
const allContainer = document.querySelector("#all-container")

const logout = {

    logoutButton() {

        let logoutButtonDiv = document.createElement("div")

        let logoutButton = document.createElement("button")
        logoutButton.setAttribute("id", "logoutButton")
        logoutButton.textContent = "Logout"

        logoutButton.addEventListener("click", this.logoutHandler)

        // FOR THE MORNING: why is removeItem removing the ID when the function hasn't even been called yet? Does it HAVE to be in an IF statement? 

        logoutButtonDiv.appendChild(logoutButton)
        logoutContainer.appendChild(logoutButtonDiv)

    },

    logoutHandler() {

        console.log("Logout Button Clicked")

        
            if (logoutButton.clicked === true) {
                sessionStorage.removeItem("userId")
            while (allContainer.firstChild) {
                allContainer.removeChild(allContainer.firstChild)
            }
        }
        

        console.log(sessionStorage.getItem("userId"))
    }

}

export default logout