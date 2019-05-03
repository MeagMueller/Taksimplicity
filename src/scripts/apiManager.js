const url = "http://localhost:8088"

const fetchCalls = {
    getAllPerformances() {
        return fetch(`${url}/performances`).then(response => response.json())
    },

    postPerformances() {
        return fetch(`${url}/performances`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify()
        }).then(response => response.json())
        
    }
}