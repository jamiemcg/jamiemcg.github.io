$(document).ready(function() {
    $("#link-jamie").click(function(e) {
        e.preventDefault();

        $("html, body").animate({
            scrollTop: 0
        }, 500);
    });
    
    $("#link-about").click(function(e) {
        e.preventDefault();

        $("html, body").animate({
            scrollTop: 0
        }, 500);
    });
    
    $("#link-education").click(function(e) {
        e.preventDefault();

        $("html, body").animate({
            scrollTop: $("#education").offset().top - 64
        }, 500);
    });

    $("#link-interests").click(function(e) {
        e.preventDefault();

        $("html, body").animate({
            scrollTop: $("#interests").offset().top - 64
        }, 500);
    });

    $("#link-publications").click(function(e) {
        e.preventDefault();

        $("html, body").animate({
            scrollTop: $("#publications").offset().top - 64
        }, 500);
    });

    $("#link-awards").click(function(e) {
        e.preventDefault();

        $("html, body").animate({
            scrollTop: $("#awards").offset().top - 64
        }, 500);
    });

    $("#link-presentations").click(function(e) {
        e.preventDefault();

        $("html, body").animate({
            scrollTop: $("#presentations").offset().top - 64
        }, 500);
    });

    // Hide nav panel if shown after clicking link
    $('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
    });
})