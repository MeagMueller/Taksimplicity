import props from "../props/props"
import propsHandlers from "../props/propsHandlers"
import fetchCalls from "../apiManager"

const listProps = {
    
    listAllProps() {

        fetchCalls.getAllProps().then(propsResponse => {
            console.log(propsResponse)

            let listPropsFragment = document.createDocumentFragment()

            let propsDiv = document.createElement("div")
            propsDiv.setAttribute("id", "propsDiv")

            let createNewPropButtonListed = document.createElement("button")
            createNewPropButtonListed.textContent = "Add New Prop"
            createNewPropButtonListed.addEventListener("click", () => {
                props.createNewProp()
            })

            propsDiv.appendChild(createNewPropButtonListed)

            propsResponse.forEach((propsResponse) => {
                let propsResponseName = document.createElement("h2")
                propsResponseName.textContent = propsResponse.name

                let propsResponseDanceStyles = document.createElement("p")
                propsResponseDanceStyles.textContent = propsResponse.danceStyle.name

                listPropsFragment.appendChild(propsResponseName)
                listPropsFragment.appendChild(propsResponseDanceStyles)

                let propsEditButton = document.createElement("button")
                propsEditButton.setAttribute("id", `propEditButton_${propsResponse.id}`)
                propsEditButton.textContent = "Edit Prop"
                propsEditButton.addEventListener("click", propsHandlers.editPropsHandler)
                listPropsFragment.appendChild(propsEditButton)

                let eachPropContainer = document.createElement("div")
                eachPropContainer.setAttribute("id", `eachPropDiv_${propsResponse.id}`)
                eachPropContainer.appendChild(listPropsFragment)

                propsDiv.appendChild(eachPropContainer)
            })

            let propsSection = document.querySelector("#display-props")

            while(propsSection.firstChild) {
                propsSection.removeChild(propsSection.firstChild)
            }

            propsSection.appendChild(propsDiv)
        })

    }
}

export default listProps