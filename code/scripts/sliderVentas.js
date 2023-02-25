const sliderMoveV = document.querySelector(".ventas .sliderMove");
const arrows       = document.querySelectorAll(".ventas button");
let value = 0, limitSupV = 5;

arrows[0].addEventListener("click", ()=>{
    value--;
    moveV(value);
    if(value == 0){
        arrows[0].style.display = "none";
    }
    arrows[1].style.display = "block";
});

arrows[1].addEventListener("click", ()=>{
    value++;
    moveV(value);
    if(value == limitSupV){
        arrows[1].style.display = "none";
    }
    arrows[0].style.display = "block";
});

function moveV() {
    sliderMoveV.style.transform = `translateX(-${100/8*value}%)`
}