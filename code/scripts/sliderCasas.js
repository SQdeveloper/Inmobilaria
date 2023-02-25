const sliderMoveC = document.querySelector(".casas .sliderMove");
const arrow       = document.querySelectorAll(".casas button");
let number = 0;

arrow[0].addEventListener("click", ()=>{
    number--;
    move(number);
    if(number == 0){
        arrow[0].style.display = "none";
    }
    arrow[1].style.display = "block";
});

arrow[1].addEventListener("click", ()=>{
    number++;
    move(number);
    if(number == 4){
        arrow[1].style.display = "none";
    }
    arrow[0].style.display = "block";
});

function move() {
    sliderMoveC.style.transform = `translateX(-${20*number}%)`
}