import fetchCalls from "../apiManager"

const displayContainer = document.querySelector("#display-container")

const props = {
    createNewProp() {
        let propsFragment = document.createDocumentFragment()

        let newPropLabel = document.createElement("label")
        newPropLabel.textContent = "New Prop: "
        propsFragment.appendChild(newPropLabel)

        let newPropInput = document.createElement("input")
        newPropInput.setAttribute = ("id", "newPropInput")
        newPropInput.placeholder = "Name"
        propsFragment.appendChild(newPropInput)

        displayContainer.appendChild(propsFragment)
    }
}

export default props