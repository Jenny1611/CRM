function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const draggedElement = document.getElementById(data);

    if (event.target.className === "div-ondrop") {
        event.target.appendChild(draggedElement);
    } else if (event.target.className === 'div-drag') {
        event.target.insertAdjacentElement('afterend', draggedElement);
    }
}
