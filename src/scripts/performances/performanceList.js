import fetchCalls from "../apiManager"
import performances from "../performances/performances"
import performancesHandlers from "../performances/performancesHandlers"

const listPerformances = {
    listAllPerformances() {

        // fetch call to get information from db

        fetchCalls.getAllPerformances().then(performancesResponse => {
            console.log(performancesResponse)

            // create fragment
            let listPerformancesFragment = document.createDocumentFragment()

            let performanceDiv = document.createElement("div")
            performanceDiv.setAttribute("id", "performanceDiv")

            let createNewPerformanceButtonListed = document.createElement("button")
            createNewPerformanceButtonListed.className = "btn btn-dark createNewPerfBtnList"
            createNewPerformanceButtonListed.textContent = "Add New Performance"
            createNewPerformanceButtonListed.addEventListener("click", () => {
                performances.createNewPerformance()
            })

            performanceDiv.appendChild(createNewPerformanceButtonListed)

            // going through each response and building out the HTML
            performancesResponse.forEach((performancesResponse) => {

                // creating HTML displays for each performance that comes back from the database
                
                let performancesResponseName = document.createElement("h2")
                performancesResponseName.className = "performanceHeader"
                performancesResponseName.textContent = performancesResponse.name

                let performancesResponseLocation = document.createElement("p")
                performancesResponseLocation.className = "performancesP"
                performancesResponseLocation.textContent = performancesResponse.location

                let performancesResponseDate = document.createElement("p")
                performancesResponseDate.className = "performancesP"
                performancesResponseDate.textContent = performancesResponse.date

                let performancesDanceStyles = document.createElement("p")
                performancesDanceStyles.className = "performancesP"
                performancesDanceStyles.textContent = performancesResponse.danceStyle.name

                let performanceProps = document.createElement("p")
                performanceProps.className = "performancesP"

                if (performancesResponse.prop.name !== "None") {
                performanceProps.textContent = performancesResponse.prop.name
                }

                let paidPerformance = performancesResponse.paid

                let troupePerformance = performancesResponse.troupePerformance

                if (troupePerformance === true) {
                    performancesResponseName.style.color = "#6166DE"
                }

                listPerformancesFragment.appendChild(performancesResponseName)
                listPerformancesFragment.appendChild(performancesResponseLocation)
                listPerformancesFragment.appendChild(performancesResponseDate)
                listPerformancesFragment.appendChild(performanceProps)
                listPerformancesFragment.appendChild(performancesDanceStyles)

                if (paidPerformance === true) {
                    let performancesPaid = document.createElement("p")
                    performancesPaid.textContent = "Paid Performance"
                    listPerformancesFragment.appendChild(performancesPaid)
                }

                // creating edit button

                let editButton = document.createElement("button")
                editButton.className = "btn btn-dark perfEditBtn"
                editButton.setAttribute("id", `editButton_${performancesResponse.id}`)
                editButton.textContent = "Edit Performance"
                editButton.addEventListener("click", performancesHandlers.editPerformanceHandler)
                listPerformancesFragment.appendChild(editButton)

                let deleteButton = document.createElement("button")
                deleteButton.className = "btn btn-dark perfDelBtn"
                deleteButton.setAttribute("id", `deleteButton_${performancesResponse.id}`)
                deleteButton.textContent = "Delete Performance"
                listPerformancesFragment.appendChild(deleteButton)

                deleteButton.addEventListener("click", () => {

                    let deletePerformanceConfirm = confirm("Are you sure?")
                    if (deletePerformanceConfirm === true) {
                        performancesHandlers.deletePerformance()
                    }
                })

                let eachPerformanceContainer = document.createElement("div")
                eachPerformanceContainer.className = "card card-body"
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
