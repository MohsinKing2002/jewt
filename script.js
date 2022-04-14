/*=========================================================================
                 swipper.js 
============================================================================*/

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 60,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/*=========================================================================
            donate page
========================================================================= */
let donate_btn = document.getElementById("donate_btn");
let donate_box = document.querySelector(".donate_box");

donate_btn.addEventListener("click", ()=>{
    if(donate_box.style.display == "none"){
        donate_box.style.display = "flex";
    }
    else{
        donate_box.style.display = "none";
    }
})