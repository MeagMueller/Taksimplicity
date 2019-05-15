import loginHandlers from "../login/loginHandlers"

const logoutContainer = document.querySelector("#logout-container")

const logout = {

    logoutButton() {

        let logoutButtonDiv = document.createElement("div")

        let logoutButton = document.createElement("button")
        logoutButton.setAttribute("id", "logoutButton")
        logoutButton.textContent = "Logout"

        logoutButton.addEventListener("click", this.logoutHandler)

        logoutButtonDiv.appendChild(logoutButton)
        logoutContainer.appendChild(logoutButtonDiv)

    },

    logoutHandler() {

        console.log("Logout Button Clicked")

        while ()

        let logoutSession = sessionStorage.removeItem("userId")


    }

}

export default logout