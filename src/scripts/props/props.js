import fetchCalls from "../apiManager"
import propsHandlers from "../props/propsHandlers"

const displayPropsContainer = document.querySelector("#display-props")

const props = {

    createNewPropButton() {
        let createNewPropButton = document.createElement("button")
        createNewPropButton.setAttribute("id", "createNewPropButton")
        createNewPropButton.textContent = "Add New Prop"

        createNewPropButton.addEventListener("click", () => {
            this.createNewProp()
        })

        displayPropsContainer.appendChild(createNewPropButton)
    },

    createNewProp() {
        let propsFragment = document.createDocumentFragment()

        let newPropLabel = document.createElement("label")
        newPropLabel.textContent = "New Prop: "
        propsFragment.appendChild(newPropLabel)

        let newPropInput = document.createElement("input")
        newPropInput.setAttribute("id", "newPropInput")
        newPropInput.placeholder = "Name"
        propsFragment.appendChild(newPropInput)

        let newPropDanceStyleLabel = document.createElement("label")
        newPropDanceStyleLabel.textContent = "Dance Style? "
        propsFragment.appendChild(newPropDanceStyleLabel)

        let newPropDanceStyleDropDown = document.createElement("select")
        newPropDanceStyleDropDown.setAttribute("id", "newPropDanceStyleDropDown")

        fetchCalls.getAllDanceStyles().then(danceStylesResponse => {
            danceStylesResponse.forEach(danceStyles => {
                let danceStylesOption = document.createElement("option")
                danceStylesOption.textContent = danceStyles.name
                danceStylesOption.value = danceStyles.id

                newPropDanceStyleDropDown.appendChild(danceStylesOption)
            })
        })

        propsFragment.appendChild(newPropDanceStyleDropDown)

        let saveNewPropButton = document.createElement("button")
        saveNewPropButton.setAttribute("id", "saveNewPropButton")
        saveNewPropButton.textContent = "Save Prop"
        propsFragment.appendChild(saveNewPropButton)

        saveNewPropButton.addEventListener("click", propsHandlers.saveNewProp)

        displayPropsContainer.appendChild(propsFragment)
    }
}

export default props