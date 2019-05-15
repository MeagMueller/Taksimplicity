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
        console.log("Edit Props Button Clicked", event.target.id.split("_"[1]))

        let editPropsId = event.target.id.split("_")[1]

        let editPropsWithId = document.querySelector(`#eachPropDiv_${editPropsId}`)

        while (editPropsWithId.firstChild) {
            editPropsWithId.removeChild(editPropsWithId.firstChild)
        }

        fetchCalls.getSingleProp(editPropsId).then(propToEdit => {
            let propsEditForm = props.editProp(propToEdit)
            editPropsWithId.appendChild(propsEditForm)
        })
    },

    updatePropsHandler() {
        // Split to get id 

        let updatePropsId = event.target.id.split("_")[1]

        // Getting values from props.js 

        let editedPropName = document.querySelector(`#editPropName_${updatePropsId}`)
        let editedPropDanceStyle = document.querySelector(`#editDanceStyle_${updatePropsId}`)

        console.log(editedPropName.value)

        // Getting values to be converted to json in fetch call

        let updatedProp = {
            name: editedPropName.value,
            danceStyleId: Number(editedPropDanceStyle.value)
        }

        // Fetch call to edit and then list after updated

        fetchCalls.editProps(updatePropsId, updatedProp).then(() =>listProps.listAllProps())
    },

    deletePropHandler() {
        let propDeleteId = event.target.id.split("_")[1]

        fetchCalls.deleteProps(propDeleteId).then(() => listProps.listAllProps())
    }

}

export default propsHandlers