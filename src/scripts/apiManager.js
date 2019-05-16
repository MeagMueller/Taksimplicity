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

        let userIdAllPerf = sessionStorage.getItem("userId")

        return fetch(`${url}/performances?_expand=danceStyle&_expand=prop&userId=${userIdAllPerf}`).then(response => response.json())
    },

    getSinglePerformance(singlePerformanceId) {

        let userIdSinglePerf = sessionStorage.getItem("userId")

        return fetch(`${url}/performances/${singlePerformanceId}?_expand=danceStyle&_expand=prop&userId=${userIdSinglePerf}`).then((response => response.json())
        )
    },

    postPerformances(newPerformance) {

        let userIdPostPerf = sessionStorage.getItem("userId")

        return fetch(`${url}/performances?userId=${userIdPostPerf}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newPerformance)
        }).then(response => response.json())
        
    },

    deletePerformances(performanceId) {

        let userIdDelPerf = sessionStorage.getItem("userId")

        return fetch(`${url}/performances/${performanceId}?userId=${userIdDelPerf}`, {
            method: "DELETE"
        })
    },

    editPerformances(updatePerformanceId, updatedPerformance) {

        let userIdEditPerf = sessionStorage.getItem("userId")

        return fetch(`${url}/performances/${updatePerformanceId}?userId=${userIdEditPerf}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            }, 
            body: JSON.stringify(updatedPerformance)
        })
    },

    // Props fetch calls

    getAllProps() {

        let userIdAllProps = sessionStorage.getItem("userId")

        return fetch(`${url}/props?_expand=danceStyle&userId=${userIdAllProps}`).then(response => response.json())
    },

    getSingleProp(singlePropId) {

        let userIdSingleProp = sessionStorage.getItem("userId")

        return fetch(`${url}/props/${singlePropId}?_expand=danceStyle&userId=${userIdSingleProp}`).then(response => response.json())
    },

    postProps(newProps) {

        let userIdPostProp = sessionStorage.getItem("userId")

        return fetch(`${url}/props?userId=${userIdPostProp}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newProps)
        }).then(response => response.json())
    },

    editProps(updatePropsId, updatedProp) {

        let userIdEditProp = sessionStorage.getItem("userId")

        return fetch(`${url}/props/${updatePropsId}?userId=${userIdEditProp}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedProp)
        })
    },

    deleteProps(propsDeleteId) {

        let userIdDelProp = sessionStorage.getItem("userId")

        return fetch(`${url}/props/${propsDeleteId}?userId=${userIdDelProp}`, {
            method: "DELETE"
        })
    },

    // Dance styles fetch calls

    getAllDanceStyles() {

        let userIdAllDance = sessionStorage.getItem("userId")

        return fetch(`${url}/danceStyles?userId=${userIdAllDance}`).then(response => response.json())
    }
}

export default fetchCalls