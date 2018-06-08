// The event bubbles up from parent to parent until it is handled, or until it reaches the document object.
// https://www.w3schools.com/jsref/event_bubbles.asp


var sections = document.getElementsByTagName('section');

for (var index = 0; index < sections.length; ++index) {
    sections[index].onclick = handleClick;
}

function handleClick (event) {
    console.log('current element: ' + this.className + ' | target element ' + event.target.className);

    if (this.className == 'regular') {
        event.stopPropagation();
        console.log('event propagation stopped');
    }
}