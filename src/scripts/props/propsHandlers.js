import props from "../props/props"
import fetchCalls from "../apiManager"
import listProps from "../props/propsList"

const propsHandlers = {

    saveNewProp() {
        let propName = document.querySelector("#newPropInput").value
        let propDanceStyles = document.querySelector("#newPropDanceStyleDropDown").value

        console.log("Inputs", propName, propDanceStyles)

        const newProp = {
            name: propName,
            danceStyleId: Number(propDanceStyles)
        }

        console.log(newProp)

        fetchCalls.postProps(newProp)
        .then(() => listProps.listAllProps())
    },

    editPropsHandler() {
        console.log("Edit Props Button Clicked", event.target.dispatchEvent.split("_"[1]))

        let editPropsId = edit.target.id.split("_")[1]

        let editPropsWithId = document.querySelector(`#eachPropDiv_${editPropsId}`)

        while (editPropsWithId.firstChild) {
            editPropsWithId.removeChild(editPropsWitId.firstChild)
        }

        fetchCalls.getSingleProp(editPropsId).then(propToEdit => {
            let propsEditForm = props.editProp(propToEdit)
        })
    }

}

export default propsHandlers