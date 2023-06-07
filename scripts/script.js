$(document).ready(function(){
//
    $("img[class='box operator-icon']").click(function(){

        $("img[class='img-fluid kartazdjecie']").animate({
            opacity: "1",
            width: "300px",
            height: "284px"
        });

        $("div[class='card-text-main']").animate({
            left: '250px',
            opacity: '1'
        });

        var small = $("small[class='text-body-secondary']");
            small.animate({left: '500px'});
            small.animate({opacity: '0.2'});
            small.animate({opacity: '0.3', left: '400px'});
            small.animate({opacity: '0.4', left: '300px'});
            small.animate({opacity: '0.8', right: '400px'});
            small.animate({opacity: '0.7', right: '300px'});
            small.animate({opacity: '0.6', right: '200px'});
            small.animate({opacity: '0.4', left: '300px'});
            small.animate({opacity: '0.3', left: '200px'});
            small.animate({opacity: '0.1', right: '100px'});
            small.animate({opacity: '1', left: '0px', right: '300px'});
        

      });

});