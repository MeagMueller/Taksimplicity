import fetchCalls from "../apiManager"
import performances from "../performances/performances"
import listPerformances from "../performances/performanceList"

const performanceHandlers = {
    saveNewPerformance() {

        // getting information from inputs in order to save

        let performanceName = document.querySelector("#newPerformanceInput").value
        let performanceLocation = document.querySelector("#newPerformanceLocationInput").value
        let performanceDate = document.querySelector("#newPerformanceDate").value
        let performancePaid = document.querySelector("#paid").checked
        let performanceTroupe = document.querySelector("#troupePerformance").checked
        let danceStylesPerformance = document.querySelector("#danceStylesDropDown").value
        let propsPerformance = document.querySelector("#propsPerformanceDropDown").value
        let userIdPerformance = sessionStorage.getItem("userId")
        // pull values in input fields to check console log

        console.log("Inputs", performanceName, performanceLocation, performanceDate, performancePaid, danceStylesPerformance)
        // building data according to data struction in json
        const newPerformance = {
            name: performanceName,
            location: performanceLocation,
            date: performanceDate,
            paid: performancePaid,
            troupePerformance: performanceTroupe.checked,
            propId: Number(propsPerformance),
            danceStyleId: Number(danceStylesPerformance),
            userId: Number(userIdPerformance)
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

        // split so ids can be used to target

        const editPerformanceWithId = document.querySelector(`#eachPerformanceDiv_${editPerformanceId}`)

        console.log(editPerformanceWithId)

        // while loop to clear container

        while (editPerformanceWithId.firstChild) {
            editPerformanceWithId.removeChild(editPerformanceWithId.firstChild)
        }

        // fetch call

        fetchCalls.getSinglePerformance(editPerformanceId).then(performanceToEdit => {
            let performanceEditForm = performances.editPerformance(performanceToEdit)
            console.log(performanceEditForm)
            editPerformanceWithId.appendChild(performanceEditForm)
        })
    },

    updatePerformanceHandler() {
        console.log("Update button clicked", event.target.id.split("_")[1])

        // Split to get id

        let updatePerformanceId = event.target.id.split("_")[1]

        // Getting values from performances.js

        let editedPerformanceName = document.querySelector(`#editPerformanceName_${updatePerformanceId}`)
        let editedPerformanceLocation = document.querySelector(`#editPerformanceLocation_${updatePerformanceId}`)
        let editedPerformanceDate = document.querySelector(`#editPerformanceDate_${updatePerformanceId}`)
        let editedPerformancePaid = document.querySelector(`#editPerformancePaid_${updatePerformanceId}`)
        let editedTroupePerformance = document.querySelector(`#editTroupePerformance_${updatePerformanceId}`)
        let editedProps = document.querySelector(`#editProps_${updatePerformanceId}`)
        let editedPerformanceDanceStyle = document.querySelector(`#editDanceStyles_${updatePerformanceId}`)
        let editedUserId = sessionStorage.getItem("userId")

        console.log(editedPerformanceName.value, editedPerformanceLocation.value, editedPerformanceDate.value)

        // Getting values to be converted to json in fetch call

        let updatedPerformance = {
            name: editedPerformanceName.value,
            location: editedPerformanceLocation.value, 
            date: editedPerformanceDate.value,
            paid: editedPerformancePaid.checked,
            troupePerformance: editedTroupePerformance.checked,
            propId: Number(editedProps.value),
            userId: Number(editedUserId),
            danceStyleId: Number(editedPerformanceDanceStyle.value)
        }

        // Fetch call to edit and then list after updated

        fetchCalls.editPerformances(updatePerformanceId, updatedPerformance).then(() => listPerformances.listAllPerformances())
    },

    addPerformanceButtonHandler() {

    }

}

export default performanceHandlers