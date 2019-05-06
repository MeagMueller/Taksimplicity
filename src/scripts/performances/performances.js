import fetchCalls from "../apiManager"
import performanceHandlers from "../performances/performancesHandlers"

const displayContainer = document.querySelector("#display-container")

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

        // creating save button

        let saveNewPerformanceButton = document.createElement("button")
        saveNewPerformanceButton.setAttribute("id", "saveNewPerformanceButton")
        saveNewPerformanceButton.textContent = "Save Performance"
        newPerformanceFragment.appendChild(saveNewPerformanceButton)
        // add save event handler
        saveNewPerformanceButton.addEventListener("click", performanceHandlers.saveNewPerformance)

        displayContainer.appendChild(newPerformanceFragment)

    }
}

export default performances