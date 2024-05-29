const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes)
checkBoxes();
function checkBoxes() {
    const triggerBottom = (window.innerHeight/8) * 6;
    
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        console.log((window.innerHeight/8) * 6);
        if (boxTop < triggerBottom) {
            box.classList.add("show")
        } else {
            box.classList.remove("show")
        }
    })
}