$(document).ready(function(){
//animacje
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

    

    //dźwięki

    $("li:contains('Vector .45 ACP'):eq(1)").click(function() {
        $("#vector")[0].play();
    });
    $("li:contains('ITA12L'):eq(1)").click(function() {
        $("#ita12")[0].play();
    });
    $("li:contains('MP7'):eq(1)").click(function() {
        $("#mp7")[0].play();
    });
    $("li:contains('M870'):eq(1)").click(function() {
        $("#m870")[0].play();
    });
    $("li:contains('G8A1'):eq(1)").click(function() {
        $("#g8a1")[0].play();
    });
    $("li:contains('SuperNova'):eq(1)").click(function() {
        $("#super")[0].play();
    });
    $("li:contains('M12'):eq(1)").click(function() {
        $("#m12")[0].play();
    });
    $("li:contains('SPAS-15'):eq(1)").click(function() {
        $("#spas")[0].play();
    });
    $("li:contains('DP27'):eq(1)").click(function() {
        $("#dp27")[0].play();
    });
    $("li:contains('9×19VSN'):eq(1)").click(function() {
        $("#vsn")[0].play();
    });
    $("li:contains('FMG-9'):eq(1)").click(function() {
        $("#fmg")[0].play();
    });
    $("li:contains('SIX12 SD'):eq(1)").click(function() {
        $("#six12")[0].play();
    });

});



