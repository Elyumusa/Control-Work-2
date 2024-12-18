//Create an actual element and return it's first child
function createElement(template) {
    const newElement=document.createElement('div');
    newElement.innerHTML=template;
    return newElement.firstElementChild;
}

//Add html content(component) to a container on the screen
function render(component,container,place='beforeend') {
    container.insertAdjacentElement(place,component.getelement());
}

export {createElement,render}