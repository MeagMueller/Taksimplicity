import fetchCalls from "../apiManager"
import performanceHandlers from "../performances/performancesHandlers"

const displayContainer = document.querySelector("#display-container")
displayContainer.className = "form-group"
const editDisplay = document.querySelector("#edit-display")

const performances = {

    createNewPerformanceButton() {
        let createNewPerformanceButton = document.createElement("button")
        createNewPerformanceButton.className = "btn btn-dark"
        createNewPerformanceButton.id = "createNewPerformanceButton"
        createNewPerformanceButton.textContent = "Add New Performance"

        createNewPerformanceButton.addEventListener("click", () => {
            this.createNewPerformance()
        })

        displayContainer.appendChild(createNewPerformanceButton)
    },

    createNewPerformance() {

        // creating form
        let newPerformanceFragment = document.createDocumentFragment()

        let newPerformanceLabel = document.createElement("label")
        newPerformanceLabel.className = "newPerfLabels"
        newPerformanceLabel.textContent = "New Performance: "
        newPerformanceFragment.appendChild(newPerformanceLabel)

        let newPerformanceInput = document.createElement("input")
        newPerformanceInput.className = "form-control"
        newPerformanceInput.setAttribute("id", "newPerformanceInput")
        newPerformanceInput.placeholder = "Name"
        newPerformanceFragment.appendChild(newPerformanceInput)

        let newPerformanceLocationLabel = document.createElement("label")
        newPerformanceLocationLabel.className = "newPerfLabels"
        newPerformanceLocationLabel.textContent = "Location: "
        newPerformanceFragment.appendChild(newPerformanceLocationLabel)

        let newPerformanceLocationInput = document.createElement("input")
        newPerformanceLocationInput.className = "form-control"
        newPerformanceLocationInput.setAttribute("id", "newPerformanceLocationInput")
        newPerformanceLocationInput.placeholder = "Address"
        newPerformanceFragment.appendChild(newPerformanceLocationInput)

        let newPerformanceDateLabel = document.createElement("label")
        newPerformanceDateLabel.className = "newPerfLabels"
        newPerformanceDateLabel.textContent = "Date: "
        newPerformanceFragment.appendChild(newPerformanceDateLabel)

        let newPerformanceDate = document.createElement("input")
        newPerformanceDate.className = "form-control"
        newPerformanceDate.setAttribute("type", "date")
        newPerformanceDate.setAttribute("id", "newPerformanceDate")
        // newPerformanceDate.placeholder = "mm/dd/yyyy"
        newPerformanceFragment.appendChild(newPerformanceDate)

        let paidPerformanceLabel = document.createElement("label")
        paidPerformanceLabel.className = "newPerfLabels"
        paidPerformanceLabel.textContent = "Paid? "
        newPerformanceFragment.appendChild(paidPerformanceLabel)

        let newPerformancePaidYesLabel = document.createElement("label")
        newPerformancePaidYesLabel.className = "newPerfLabels"
        newPerformancePaidYesLabel.textContent = "Yes "
        newPerformanceFragment.appendChild(newPerformancePaidYesLabel)

        let newPerformancePaidYesCheckbox = document.createElement("input")
        newPerformancePaidYesCheckbox.setAttribute("type", "checkbox")
        newPerformancePaidYesCheckbox.setAttribute("id", "paid")
        newPerformanceFragment.appendChild(newPerformancePaidYesCheckbox)

        let newPerformanceTroupeLabel = document.createElement("label")
        newPerformanceTroupeLabel.className = "newPerfLabels"
        newPerformanceTroupeLabel.textContent = "Troupe Performance? "
        newPerformanceFragment.appendChild(newPerformanceTroupeLabel)

        let newPerformanceTroupeYesLabel = document.createElement("label")
        newPerformanceTroupeYesLabel.className = "newPerfLabels"
        newPerformanceTroupeYesLabel.textContent = "Yes "
        newPerformanceFragment.appendChild(newPerformanceTroupeYesLabel)

        let newPerformanceTroupeYesCheckbox = document.createElement("input")
        newPerformanceTroupeYesCheckbox.setAttribute("type", "checkbox")
        newPerformanceTroupeYesCheckbox.setAttribute("id", "troupePerformance")
        newPerformanceFragment.appendChild(newPerformanceTroupeYesCheckbox)

        let propsPerformanceLabel = document.createElement("label")
        propsPerformanceLabel.className = "newPerfLabels"
        propsPerformanceLabel.textContent = "Prop? "
        newPerformanceFragment.appendChild(propsPerformanceLabel)

        let propsPerformanceDropDown = document.createElement("select")
        propsPerformanceDropDown.setAttribute("id", "propsPerformanceDropDown")

        fetchCalls.getAllProps().then(propsResponse => {
            propsResponse.forEach(prop => {
                let propsPerformanceOption = document.createElement("option")
                propsPerformanceOption.textContent = prop.name
                propsPerformanceOption.value = prop.id

                propsPerformanceDropDown.appendChild(propsPerformanceOption)
            })
        })

        newPerformanceFragment.appendChild(propsPerformanceDropDown)

        let danceStylesPerformanceLabel = document.createElement("label")
        danceStylesPerformanceLabel.className = "newPerfLabels"
        danceStylesPerformanceLabel.textContent = "Dance Style? "
        newPerformanceFragment.appendChild(danceStylesPerformanceLabel)

        let danceStylesPerformanceDropDown = document.createElement("select")
        danceStylesPerformanceDropDown.setAttribute("id", "danceStylesDropDown")
        
        // fetch call to get dance styles to display in dropdown

        fetchCalls.getAllDanceStyles().then(danceStylesResponse => {
            danceStylesResponse.forEach(danceStyles => {
                let danceStylesOption = document.createElement("option")
                danceStylesOption.textContent = danceStyles.name
                danceStylesOption.value = danceStyles.id

                danceStylesPerformanceDropDown.appendChild(danceStylesOption)
            })
        })

        newPerformanceFragment.appendChild(danceStylesPerformanceDropDown)

        // creating save button

        let saveNewPerformanceButton = document.createElement("button")
        saveNewPerformanceButton.className = "btn btn-dark saveNewPerfBtn"
        saveNewPerformanceButton.setAttribute("id", "saveNewPerformanceButton")
        saveNewPerformanceButton.textContent = "Save Performance"
        newPerformanceFragment.appendChild(saveNewPerformanceButton)
        // add save event handler
        saveNewPerformanceButton.addEventListener("click", performanceHandlers.saveNewPerformance)



        displayContainer.prepend(newPerformanceFragment)

    },

    editPerformance(editPerformancesId) {

        console.log(editPerformancesId)

        // creating fragment
        
        let editPerformanceFragment = document.createDocumentFragment()

        // creating labels and inputs to be edited

        let editPerformanceNameLabel = document.createElement("label")
        editPerformanceNameLabel.textContent = "Update Performance Name: "
        editPerformanceFragment.appendChild(editPerformanceNameLabel)

        let editPerformanceNameInput = document.createElement("input")
        editPerformanceNameInput.value = editPerformancesId.name
        editPerformanceNameInput.setAttribute("id", `editPerformanceName_${editPerformancesId.id}`)
        editPerformanceFragment.appendChild(editPerformanceNameInput)

        let editPerformanceLocationLabel = document.createElement("label")
        editPerformanceLocationLabel.textContent = "Update Location: "
        editPerformanceFragment.appendChild(editPerformanceLocationLabel)

        let editPerformanceLocationInput = document.createElement("input")
        editPerformanceLocationInput.value = editPerformancesId.location
        editPerformanceLocationInput.setAttribute("id", `editPerformanceLocation_${editPerformancesId.id}`)
        editPerformanceFragment.appendChild(editPerformanceLocationInput)

        let editPerformanceDateLabel = document.createElement("label")
        editPerformanceDateLabel.textContent = "Update Date: "
        editPerformanceFragment.appendChild(editPerformanceDateLabel)

        let editPerformanceDateInput = document.createElement("input")
        editPerformanceDateInput.setAttribute("type", "date")
        editPerformanceDateInput.value = editPerformancesId.date
        editPerformanceDateInput.setAttribute("id", `editPerformanceDate_${editPerformancesId.id}`)
        editPerformanceFragment.appendChild(editPerformanceDateInput)

        let editPerformancePaidLabel = document.createElement("label")
        editPerformancePaidLabel.textContent = "Paid?"
        editPerformanceFragment.appendChild(editPerformancePaidLabel)

        let editPerformancePaidCheckbox = document.createElement("input")
        editPerformancePaidCheckbox.setAttribute("type", "checkbox")
        editPerformancePaidCheckbox.setAttribute("id", `editPerformancePaid_${editPerformancesId.id}`)
        editPerformanceFragment.appendChild(editPerformancePaidCheckbox)

        let editTroupePerformanceLabel = document.createElement("label")
        editTroupePerformanceLabel.textContent = "Troupe Performance? "
        editPerformanceFragment.appendChild(editTroupePerformanceLabel)

        let editTroupePerformanceCheckbox = document.createElement("input")
        editTroupePerformanceCheckbox.setAttribute("type", "checkbox")
        editTroupePerformanceCheckbox.setAttribute("id", `editTroupePerformance_${editPerformancesId.id}`)
        editPerformanceFragment.appendChild(editTroupePerformanceCheckbox)

        let editPropsDropDownLabel = document.createElement("label")
        editPropsDropDownLabel.textContent = "Prop? "
        editPerformanceFragment.appendChild(editPropsDropDownLabel)

        let editPropsDropDown = document.createElement("select")
        editPropsDropDown.setAttribute("id", `editProps_${editPerformancesId.id}`)

        fetchCalls.getAllProps().then(editPropsResponse => {
            editPropsResponse.forEach(editProps => {
                let editPropsOption = document.createElement("option")
                editPropsOption.textContent = editProps.name
                editPropsOption.value = editProps.id

                editPropsDropDown.appendChild(editPropsOption)
            })
        })

        editPerformanceFragment.appendChild(editPropsDropDown)

        let editDanceStylesDropdown = document.createElement("select")
        editDanceStylesDropdown.setAttribute("id", `editDanceStyles_${editPerformancesId.id}`)

        fetchCalls.getAllDanceStyles().then(editDanceStylesResponse => {
            editDanceStylesResponse.forEach(editDanceStyles => {
                let editDanceStylesOption = document.createElement("option")
                editDanceStylesOption.textContent = editDanceStyles.name
                editDanceStylesOption.value = editDanceStyles.id

                editDanceStylesDropdown.appendChild(editDanceStylesOption)
            })
        })

        editPerformanceFragment.appendChild(editDanceStylesDropdown)

        // creating save button which calls update event

        let confirmEditButton = document.createElement("button")
        confirmEditButton.textContent = "Save Changes"
        confirmEditButton.className = "btn btn-dark confirmEditBtn"
        confirmEditButton.setAttribute("id", `confirmEditButton_${editPerformancesId.id}`)
        confirmEditButton.addEventListener("click", performanceHandlers.updatePerformanceHandler)
        editPerformanceFragment.appendChild(confirmEditButton)

        // return

        return editPerformanceFragment
    }
}

export default performances