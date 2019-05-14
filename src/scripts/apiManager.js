import performanceHandlers from "./performances/performancesHandlers"

const url = "http://localhost:8088"

const fetchCalls = {

    // Performance Fetch Calls

    getAllPerformances() {
        return fetch(`${url}/performances?_expand=danceStyle`).then(response => response.json())
    },

    getSinglePerformance(singlePerformanceId) {
        return fetch(`${url}/performances/${singlePerformanceId}?_expand=danceStyle`).then((response => response.json())
        )
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

    editPerformances(updatePerformanceId, updatedPerformance) {
        return fetch(`${url}/performances/${updatePerformanceId}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            }, 
            body: JSON.stringify(updatedPerformance)
        })
    },

    // Props fetch calls

    getAllProps() {
        return fetch(`${url}/props?_expand=danceStyle`).then(response => response.json())
    },

    getSingleProp(singlePropId) {
        return fetch(`${url}/props/${singlePropId}?_expand=danceStyle`).then(response => response.json())
    },

    postProps(newProps) {
        return fetch(`${url}/props`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newProps)
        }).then(response => response.json())
    },

    // Dance styles fetch calls

    getAllDanceStyles() {
        return fetch(`${url}/danceStyles`).then(response => response.json())
    }
}

export default fetchCalls