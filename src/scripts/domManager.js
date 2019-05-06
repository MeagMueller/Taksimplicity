const buildElement = (elementType, elementId, elementTextContent, elementValue) => {
    let createHTMLElement = document.createElement(elementType)

    if (elementId) {
        createHTMLElement.setAttribute("id", elementId)
    }

    if (elementValue) {
        createHTMLElement.setAttribute()
    }
}