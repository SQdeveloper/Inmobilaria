const enlace  = document.querySelector(".en-ingresar");
const content = document.querySelector(".ingresar") ;
const buttonX = document.querySelector(".ingresar img");
const card    = document.querySelector(".ingresar .card");

enlace.addEventListener("click", ()=>{
    content.style.zIndex= "4";
    card.style.transform  = "none";
    document.body.style.overflow = "hidden";
});

buttonX.addEventListener("click", ()=>{
    content.style.zIndex = "-1";
    card.style.transform  = "translateY(-100%)";
    document.body.style.overflow = "scroll";
});