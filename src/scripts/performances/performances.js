import fetchCalls from "../apiManager"

const displayContainer = document.querySelector("#display-container")

const performances = {
    createNewPerformance() {

        let newPerformanceFragment = document.createDocumentFragment()

        let newPerformanceLabel = document.createElement("label")
        newPerformanceLabel.textContent = "New Performance: "
        newPerformanceFragment.appendChild(newPerformanceLabel)

        let newPerformanceInput = document.createElement("input")
        newPerformanceInput.setAttribute = ("id", "newPerformanceInput")
        newPerformanceInput.placeholder = "Name"
        newPerformanceFragment.appendChild(newPerformanceInput)

        let newPerformanceLocationLabel = document.createElement("label")
        newPerformanceLocationLabel.textContent = "Location: "
        newPerformanceFragment.appendChild(newPerformanceLocationLabel)

        let newPerformanceLocationInput = document.createElement("input")
        newPerformanceLocationInput.setAttribute = ("id", "newPerformanceLabelInput")
        newPerformanceLocationInput.placeholder = "Address"
        newPerformanceFragment.appendChild(newPerformanceLocationInput)

        let newPerformanceDateLabel = document.createElement("label")
        newPerformanceDateLabel.textContent = "Date: "
        newPerformanceFragment.appendChild(newPerformanceDateLabel)

        let newPerformanceDate = document.createElement("input")
        newPerformanceDate.setAttribute = ("type", "date")
        newPerformanceDate.setAttribute = ("id", "newPerformanceDate")
        newPerformanceDate.placeholder = "mm/dd/yyyy"
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

        let newPerformancePaidNoLabel = document.createElement("label")
        newPerformancePaidNoLabel.textContent = "No "
        newPerformanceFragment.appendChild(newPerformancePaidNoLabel)

        let newPerformancePaidNoCheckbox = document.createElement("input")
        newPerformancePaidNoCheckbox.setAttribute("type", "checkbox")
        newPerformancePaidNoCheckbox.setAttribute("id", "unpaid")
        newPerformanceFragment.appendChild(newPerformancePaidNoCheckbox)


        displayContainer.appendChild(newPerformanceFragment)

    }
}

export default performances