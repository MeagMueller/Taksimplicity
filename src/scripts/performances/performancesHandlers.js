import fetchCalls from "../apiManager"
import performances from "../performances/performances"
import listPerformances from "../performances/performanceList"
import elementBuilders from "../domManager"

const performanceHandlers = {
    saveNewPerformance() {

        // getting information from inputs in order to save

        let performanceName = document.querySelector("#newPerformanceInput").value
        let performanceLocation = document.querySelector("#newPerformanceLocationInput").value
        let performanceDate = document.querySelector("#newPerformanceDate").value
        let performancePaid = document.querySelector("#paid").checked
        // pull values in input fields to check console log

        console.log("Inputs", performanceName, performanceLocation, performanceDate)
        // building data according to data struction in json
        const newPerformance = {
            name: performanceName,
            location: performanceLocation,
            date: performanceDate,
            paid: performancePaid
        }
        // console.log the object to see if it looks proper

        console.log(newPerformance)

        // post and then list updated information
        fetchCalls.postPerformances(newPerformance)
        .then(() => listPerformances.listAllPerformances())
    },

    deletePerformance() {
        console.log("Delete Button Clicked", event.target.id.split("_")[1])

        // delete button given id, split on underscore so that "deleteButton" is index number 0 and the id number is 1

        let performanceId = event.target.id.split("_")[1]

        fetchCalls.deletePerformances(performanceId)
        .then(() => listPerformances.listAllPerformances())
    },

    editPerformanceHandler() {
        console.log("Edit button clicked", event.target.id.split("_")[1])

        let editPerformanceId = event.target.id.split("_")[1]

        let editPerformanceWithId = document.querySelector(`#editPerformanceName_${editPerformanceId}`)

        console.log(editPerformanceWithId)

        while (editPerformanceWithId.firstChild) {
            editPerformanceWithId.removeChild(editPerformanceWithId.firstChild)
        }

        fetchCalls.getAllPerformances(editPerformanceId).then(performanceToEdit => {
            let editPerformance = performances.editPerformance(performanceToEdit)
            editPerformanceWithId.appendChild(editPerformance)
        })

    }

}

export default performanceHandlers