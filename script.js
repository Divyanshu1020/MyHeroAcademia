let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a")

let val;

window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("sticky");
        scrollBtn.styleSheets.display="block"
    }
    else{
        nav.classList.remove("sticky");
        scrollBtn.styleSheets.display="none"
    }
}

let body = document.querySelector("body");
let navbar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

menuBtn,onclick = function(){
    navbar.classList.add("active");
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    body.style.overflow = "hodden";
    scrollBtn.style.pointerEvents = "none"

}