import props from "../props/props"
import propsHandlers from "../props/propsHandlers"
import fetchCalls from "../apiManager"

const listProps = {
    
    listAllProps() {

        fetchCalls.getAllProps().then(propsResponse => {
            console.log(propsResponse)
        })

    }

}

export default listProps