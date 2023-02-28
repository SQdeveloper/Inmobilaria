const enlaceR  = document.querySelector(".en-registrar");
const contentR = document.querySelector(".registrar") ;
const buttonXR = document.querySelector(".registrar img");
const cardR    = document.querySelector(".registrar .card");

enlaceR.addEventListener("click", ()=>{
    contentR.style.zIndex  = "4";
    cardR.style.transform  = "none";
    document.body.style.overflow = "hidden";
});

buttonXR.addEventListener("click", ()=>{
    contentR.style.zIndex  = "-1";
    cardR.style.transform  = "translateY(-100%)";
    document.body.style.overflow = "scroll";
});