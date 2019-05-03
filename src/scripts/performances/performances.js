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


        displayContainer.appendChild(newPerformanceFragment)

    }
}

export default performances