$(document).ready(function(){
    //Water Ripples
    $(".header-area").ripples();
    
    //CounterUp
    $('.counter').counterUp({
    delay: 10,
    time: 1000
});
    
    //wow
    new WOW().init();
    
    //Owl
    
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    autoplayTimeout: 2000,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})
})