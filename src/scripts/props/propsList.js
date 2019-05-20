import props from "../props/props"
import propsHandlers from "../props/propsHandlers"
import fetchCalls from "../apiManager"

let propsSection = document.querySelector("#display-props")

const listProps = {
    
    listAllProps() {

        fetchCalls.getAllProps().then(propsResponse => {
            console.log(propsResponse)

            let listPropsFragment = document.createDocumentFragment()

            let propsDiv = document.createElement("div")
            propsDiv.setAttribute("id", "propsDiv")

            let createNewPropButtonListed = document.createElement("button")
            createNewPropButtonListed.className = "btn btn-dark createNewPropBtnList"
            createNewPropButtonListed.textContent = "Add New Prop"
            createNewPropButtonListed.addEventListener("click", () => {
                props.createNewProp()
            })

            propsDiv.appendChild(createNewPropButtonListed)

            propsResponse.forEach((propsResponse) => {

                if (propsResponse.name !== "None") {
                    let propsResponseName = document.createElement("h2")
                    propsResponseName.className = "propsName"
                    propsResponseName.textContent = propsResponse.name 

                    let propsResponseDanceStyles = document.createElement("p")
                    propsResponseDanceStyles.className = "propsP"
                    propsResponseDanceStyles.textContent = propsResponse.danceStyle.name

                    listPropsFragment.appendChild(propsResponseName)
                    listPropsFragment.appendChild(propsResponseDanceStyles)

                    let propsEditButton = document.createElement("button")
                    propsEditButton.className = "btn btn-dark propsEditBtn"
                    propsEditButton.setAttribute("id", `propEditButton_${propsResponse.id}`)
                    propsEditButton.textContent = "Edit Prop"
                    propsEditButton.addEventListener("click", propsHandlers.editPropsHandler)
                    listPropsFragment.appendChild(propsEditButton)

                    let propsDeleteButton = document.createElement("button")
                    propsDeleteButton.className = "btn btn-dark propsDelBtn"
                    propsDeleteButton.setAttribute("id", `deletePropButton_${propsResponse.id}`)
                    propsDeleteButton.textContent = "Delete Prop"
                    listPropsFragment.appendChild(propsDeleteButton)

                    propsDeleteButton.addEventListener("click", () => {
                        let deletePropConfirm = confirm("Are you sure?")
                        if (deletePropConfirm === true) {
                            propsHandlers.deletePropHandler()
                        }
                    })

                    let eachPropContainer = document.createElement("div")
                    eachPropContainer.className = "card card-body"
                    eachPropContainer.setAttribute("id", `eachPropDiv_${propsResponse.id}`)
                    eachPropContainer.appendChild(listPropsFragment)

                    propsDiv.appendChild(eachPropContainer)
                    }
            })

            while(propsSection.firstChild) {
                propsSection.removeChild(propsSection.firstChild)
            }

            propsSection.appendChild(propsDiv)
        })

    },

    propsListButton() {

        let propsListDiv = document.createElement("div")

        let propsListButton = document.createElement("button")
        propsListButton.className = "btn btn-dark propsListBtn"
        propsListButton.setAttribute("id", "propsListButton")
        propsListButton.textContent = "Props List"
        propsListButton.addEventListener("click", this.listAllProps)

        propsListDiv.appendChild(propsListButton)
        propsSection.appendChild(propsListDiv)

    }
}

export default listProps