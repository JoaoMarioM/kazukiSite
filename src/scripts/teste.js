var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    responsiveClass: true,
    responsive:{
        0:{
            items:1,
            // nav:true
        },
        425:{
           items:2, 
        },
        600:{
            items:3,
            // nav:true
        },
        1000:{
            items:4,
            // nav:true,
            loop:true
        }
    }
    //autoplayHoverPause:true
});
// $('.play').on('click',function(){
//     owl.trigger('play.owl.autoplay',[1000])
// })
// $('.stop').on('click',function(){
//     owl.trigger('stop.owl.autoplay')
// })

