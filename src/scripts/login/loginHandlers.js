import login from "./login"
import fetchCalls from "../apiManager"
import performances from "../performances/performances"
import props from "../props/props"
import performancesList from "../performances/performanceList"
import propsList from "../props/propsList"
import propsHandlers from "../props/propsHandlers"
import logout from "../logout/logout"

let loginContainer = document.querySelector("#login-container")

const loginHandlers = {
    loginToTaksimplicity() {
        console.log("Login clicked")

        let usernameInput = document.querySelector("#loginUsernameInput").value
        let passwordInput = document.querySelector("#loginPasswordInput").value

        console.log(usernameInput, passwordInput)

        fetchCalls.getUsers().then((eachUser => {
            console.log(eachUser)

            let userLogin = eachUser.find(user => {
                return usernameInput.toLowerCase() === user.username.toLowerCase() && passwordInput.toLowerCase() === user.password.toLowerCase()
            })
            console.log(userLogin)

                
                if (usernameInput === "") {
                    alert("Please enter a username!")
                } else if (passwordInput === "") {
                    alert("Please enter your password!")
                } else if (usernameInput === "" && passwordInput === "") {
                    alert("Please enter a username and password!")
                } else if (userLogin === undefined) {
                    alert("You have entered the wrong username or password!")
                } else if (userLogin !== undefined) {
                    sessionStorage.setItem("userId", userLogin.id)

                    while(loginContainer.firstChild) {
                        loginContainer.removeChild(loginContainer.firstChild)
                    }

                    performances.createNewPerformanceButton()
                    props.createNewPropButton()

                    propsList.propsListButton()
                    performancesList.listAllPerformances()

                    logout.logoutButton()
                    

                }
            
        }))

        console.log(sessionStorage.getItem("userId"))
    }
}

export default loginHandlers