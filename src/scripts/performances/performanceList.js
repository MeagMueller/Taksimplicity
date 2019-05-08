import fetchCalls from "../apiManager"
import performances from "../performances/performances"
import performancesHandlers from "../performances/performancesHandlers"
import domBuilders from "../domManager"

const listPerformances = {
    listAllPerformances() {

        // fetch call to get information from db

        fetchCalls.getAllPerformances().then(performancesResponse => {
            console.log(performancesResponse)

            // create fragment
            let listPerformancesFragment = document.createDocumentFragment()

            let performanceDiv = document.createElement("div")
            performanceDiv.setAttribute("id", "performanceDiv")

            // going through each response and building out the HTML
            performancesResponse.forEach((performancesResponse) => {

                // creating HTML displays for each performance that comes back from the database
                
                let performancesResponseName = document.createElement("h2")
                performancesResponseName.textContent = performancesResponse.name

                let performancesResponseLocation = document.createElement("p")
                performancesResponseLocation.textContent = performancesResponse.location

                let performancesResponseDate = document.createElement("p")
                performancesResponseDate.textContent = performancesResponse.date

                let performancesDanceStyle = document.createElement("p")
                performancesDanceStyle.textContent = performancesResponse.danceStyle.name

                listPerformancesFragment.appendChild(performancesResponseName)
                listPerformancesFragment.appendChild(performancesResponseLocation)
                listPerformancesFragment.appendChild(performancesResponseDate)
                listPerformancesFragment.appendChild(performancesDanceStyle)

                let deleteButton = document.createElement("button")
                deleteButton.setAttribute("id", `deleteButton_${performancesResponse.id}`)
                deleteButton.textContent = "Delete Performance"
                listPerformancesFragment.appendChild(deleteButton)

                deleteButton.addEventListener("click", performancesHandlers.deletePerformance)

                let editButton = document.createElement("button")
                editButton.setAttribute("id", `editButton_${performancesResponse.id}`)
                editButton.textContent = "Edit Performance"
                editButton.addEventListener("click", performancesHandlers.editPerformanceHandler)
                listPerformancesFragment.appendChild(editButton)

                let eachPerformanceContainer = document.createElement("div")
                eachPerformanceContainer.setAttribute("id", `eachPerformanceDiv_${performancesResponse.id}`)
                eachPerformanceContainer.appendChild(listPerformancesFragment)

                performanceDiv.appendChild(eachPerformanceContainer)
            })

            // getting container
            let performancesSection = document.querySelector("#display-container")

            // clearing container
            while(performancesSection.firstChild) {
                performancesSection.removeChild(performancesSection.firstChild)
            }

            // appending fragment to container
            performancesSection.appendChild(performanceDiv)
        })
    }
}

export default listPerformances
