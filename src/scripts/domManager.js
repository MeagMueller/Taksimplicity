const elementBuilders = {
    clearElement(domElement) {
        while (domElement.firstChild) {
            domElement.removeChild(domElement.firstChild)
        }
    }
}

export default elementBuilders