import performanceHandlers from "./performances/performancesHandlers"

const url = "http://localhost:8088"

const fetchCalls = {
    getAllPerformances() {
        return fetch(`${url}/performances`).then(response => response.json())
    },

    postPerformances(newPerformance) {
        return fetch(`${url}/performances`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newPerformance)
        }).then(response => response.json())
        
    },

    deletePerformances(performanceId) {
        return fetch(`${url}/performances/${performanceId}`, {
            method: "DELETE"
        })
    },

    editPerformances(performanceId, updatedPerformance) {
        return fetch(`${url}performances/${performanceId}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            }, 
            body: JSON.stringify(updatedPerformance)
        })
    }
}

export default fetchCalls