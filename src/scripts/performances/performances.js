import fetchCalls from "../apiManager"
import performanceHandlers from "../performances/performancesHandlers"

const displayContainer = document.querySelector("#display-container")
const editDisplay = document.querySelector("#edit-display")

const performances = {
    createNewPerformance() {
        // creating form
        let newPerformanceFragment = document.createDocumentFragment()

        let newPerformanceLabel = document.createElement("label")
        newPerformanceLabel.textContent = "New Performance: "
        newPerformanceFragment.appendChild(newPerformanceLabel)

        let newPerformanceInput = document.createElement("input")
        newPerformanceInput.setAttribute("id", "newPerformanceInput")
        newPerformanceInput.placeholder = "Name"
        newPerformanceFragment.appendChild(newPerformanceInput)

        let newPerformanceLocationLabel = document.createElement("label")
        newPerformanceLocationLabel.textContent = "Location: "
        newPerformanceFragment.appendChild(newPerformanceLocationLabel)

        let newPerformanceLocationInput = document.createElement("input")
        newPerformanceLocationInput.setAttribute("id", "newPerformanceLocationInput")
        newPerformanceLocationInput.placeholder = "Address"
        newPerformanceFragment.appendChild(newPerformanceLocationInput)

        let newPerformanceDateLabel = document.createElement("label")
        newPerformanceDateLabel.textContent = "Date: "
        newPerformanceFragment.appendChild(newPerformanceDateLabel)

        let newPerformanceDate = document.createElement("input")
        newPerformanceDate.setAttribute("type", "date")
        newPerformanceDate.setAttribute("id", "newPerformanceDate")
        // newPerformanceDate.placeholder = "mm/dd/yyyy"
        newPerformanceFragment.appendChild(newPerformanceDate)

        let paidPerformanceLabel = document.createElement("label")
        paidPerformanceLabel.textContent = "Paid? "
        newPerformanceFragment.appendChild(paidPerformanceLabel)

        let newPerformancePaidYesLabel = document.createElement("label")
        newPerformancePaidYesLabel.textContent = "Yes "
        newPerformanceFragment.appendChild(newPerformancePaidYesLabel)

        let newPerformancePaidYesCheckbox = document.createElement("input")
        newPerformancePaidYesCheckbox.setAttribute("type", "checkbox")
        newPerformancePaidYesCheckbox.setAttribute("id", "paid")
        newPerformanceFragment.appendChild(newPerformancePaidYesCheckbox)

        let danceStylesPerformanceLabel = document.createElement("label")
        danceStylesPerformanceLabel.textContent = "Dance Style? "
        newPerformanceFragment.appendChild(danceStylesPerformanceLabel)

        let danceStylesPerformanceDropDown = document.createElement("select")
        danceStylesPerformanceDropDown.setAttribute("id", "danceStylesDropDown")
        
        // fetch call to get dance styles to display in dropdown

        fetchCalls.getAllDanceStyles().then(danceStylesResponse => {
            danceStylesResponse.forEach(danceStyle => {
                let danceStylesOption = document.createElement("option")
                danceStylesOption.textContent = danceStyle.name
                danceStylesOption.value = danceStyle.id

                danceStylesPerformanceDropDown.appendChild(danceStylesOption)
            })
        })

        newPerformanceFragment.appendChild(danceStylesPerformanceDropDown)

        // creating save button

        let saveNewPerformanceButton = document.createElement("button")
        saveNewPerformanceButton.setAttribute("id", "saveNewPerformanceButton")
        saveNewPerformanceButton.textContent = "Save Performance"
        newPerformanceFragment.appendChild(saveNewPerformanceButton)
        // add save event handler
        saveNewPerformanceButton.addEventListener("click", performanceHandlers.saveNewPerformance)

        displayContainer.appendChild(newPerformanceFragment)

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
        editPerformanceNameInput.setAttribute("id", `editPerformanceName_${editPerformancesId.id}`)
        editPerformanceFragment.appendChild(editPerformanceNameInput)

        let editPerformanceLocationLabel = document.createElement("label")
        editPerformanceLocationLabel.textContent = "Update Location: "
        editPerformanceFragment.appendChild(editPerformanceLocationLabel)

        let editPerformanceLocationInput = document.createElement("input")
        editPerformanceLocationInput.setAttribute("id", `editPerformanceLocation_${editPerformancesId.id}`)
        editPerformanceFragment.appendChild(editPerformanceLocationInput)

        let editPerformanceDateLabel = document.createElement("label")
        editPerformanceDateLabel.textContent = "Update Date: "
        editPerformanceFragment.appendChild(editPerformanceDateLabel)

        let editPerformanceDateInput = document.createElement("input")
        editPerformanceDateInput.setAttribute("type", "date")
        editPerformanceDateInput.setAttribute("id", `editPerformanceDate_${editPerformancesId.id}`)
        editPerformanceFragment.appendChild(editPerformanceDateInput)

        // creating save button which calls update event

        let confirmEditButton = document.createElement("button")
        confirmEditButton.textContent = "Save Changes"
        confirmEditButton.setAttribute("id", `confirmEditButton_${editPerformancesId.id}`)
        confirmEditButton.addEventListener("click", performanceHandlers.updatePerformanceHandler)
        editPerformanceFragment.appendChild(confirmEditButton)

        // return

        return editPerformanceFragment
    }
}

export default performances