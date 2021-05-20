function fade(){
    $(".preloader").fadeOut("slowly");
}

setTimeout(fade, 3000);

$(".toggle").click(function(){
  $(this).find(".toggleContainer").toggleClass("active");
  $(this).siblings(".toggle").find(".toggleContainer").removeClass("active");
});
    

$(".searchButton").on("click", function(){
    $(".searchButton").toggleClass("active");
    if ($(".searchButton").hasClass("active")){
            $(".searchBar").css("height", "100vh");
            $("#searchForm").css("opacity", "1");
            $(".searchIcon").removeClass("fa-search").addClass("fa-times");
        }
    
    else {
        $(".searchBar").css("height", "0vh");
        $("#searchForm").css("opacity", "0");
        $(".searchIcon").removeClass("fa-times").addClass("fa-search");
    }
});

$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
    
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
    
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
    
                $(this).animate({'opacity':'1'},500);
    
            }    
        }); 
    }); 
    });

    ScrollReveal().reveal('.column1', { delay: 200 });
    ScrollReveal().reveal('.column-copy', { delay: 200 });
    ScrollReveal().reveal('.slideshow-container', { delay: 200 });
    ScrollReveal().reveal('.heading-row', { delay: 200 });
    ScrollReveal().reveal('.processList', { delay: 200 });
    ScrollReveal().reveal('.numbertext', { delay: 500 });
    ScrollReveal().reveal('.description-row', { delay: 500 });
    ScrollReveal().reveal('.processCallout', { delay: 500 });
    ScrollReveal().reveal('.Footer_outer', { delay: 500 });
    ScrollReveal().reveal('.Footer_outer', { delay: 500 });
    ScrollReveal().reveal('.Footer_outer', { delay: 500 });