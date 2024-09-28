const boxes = document.querySelectorAll('.box') //This line selects all HTML elements with the class .box

window.addEventListener('scroll', checkBoxes)//window object that listens for the scroll event. Every time the user scrolls the page, the checkBoxes function will be called

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4//f the value was window.innerHeight, the boxes would animate as soon as their top edge touches the bottom of the viewport. Using 4/5

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top//getBoundingClientRect().top: Used to get the current position of each box relative to the viewport.
        //.top gives the distance between the top of the box and the top of the viewport.

        if(boxTop < triggerBottom) {
            box.classList.add('show')//classList property allows you to add or remove CSS classes from an element
        } else {
            box.classList.remove('show')
        }
    })
}