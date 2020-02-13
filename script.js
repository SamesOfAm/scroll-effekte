console.log('Script loaded');
function showDemo01Boxes(){
    console.log('Scrolled');
    if (window.pageYOffset >= 800) {
        console.log('Scrolled over 100');
        let demo01boxes = document.getElementsByClassName('demo-01-box');
        for(let i = 0; i < demo01boxes.length; i++) {
            console.log('Iteration: ', i);
            demo01boxes[i].style.top = '0';
            demo01boxes[i].style.opacity = '1';
        }
    }
}
window.addEventListener("scroll", showDemo01Boxes);