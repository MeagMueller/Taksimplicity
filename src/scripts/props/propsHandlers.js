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
    }

}

export default propsHandlers