$(document).ready(function(){
//



function animacja() {
    $("img[class='img-fluid kartazdjecie']").animate({
        opacity: "1",
        width: "300px",
        height: "284px"
    }, "1000");

    $("div[class='card-text-main']").slideDown(1100);

    var small = $("small[class='text-body-secondary']");
        small.animate({left: '500px'});
        small.animate({opacity: '0.2'});
        small.animate({opacity: '0.3', left: '400px'});
        small.animate({opacity: '0.4', left: '300px'});
        small.animate({opacity: '0.8', right: '400px'});

        small.animate({opacity: '0.3', left: '200px'});
        small.animate({opacity: '0.1', right: '100px'});
        small.animate({opacity: '1', left: '0px', right: '300px'});
};

var licz=0;

$(window).scroll(function() {
    var hT = $("div[class='card mb-3 karta']").offset().top,
        hH = $("div[class='card mb-3 karta']").outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+hH-wH)){
        if (licz < 1) {
            setTimeout(animacja(), 700);
            licz = 1;
        }
        
    }
 });

    // $("img[class='box operator-icon']").click(function(){
    //     if (licz < 1) {
    //         setTimeout(animacja(), 700);
    //         licz = 1;
    //     }
       
    // });

});