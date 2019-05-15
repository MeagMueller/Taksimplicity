import performanceHandlers from "./performances/performancesHandlers"
import propsHandlers from "./props/propsHandlers"

const url = "http://localhost:8088"

const fetchCalls = {

    // Login Fetch Calls

    getUsers() {
        return fetch(`${url}/users`).then(response => response.json())
    },

    // Performance Fetch Calls

    getAllPerformances() {

        let userId = sessionStorage.getItem("userId")

        return fetch(`${url}/performances?_expand=danceStyle&userId=${userId}`).then(response => response.json())
    },

    getSinglePerformance(singlePerformanceId) {

        let userId = sessionStorage.getItem("userId")

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

    editProps(updatePropsId, updatedProp) {
        return fetch(`${url}/props/${updatePropsId}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedProp)
        })
    },

    deleteProps(propsDeleteId) {
        return fetch(`${url}/props/${propsDeleteId}`, {
            method: "DELETE"
        })
    },

    // Dance styles fetch calls

    getAllDanceStyles() {
        return fetch(`${url}/danceStyles`).then(response => response.json())
    }
}

export default fetchCalls