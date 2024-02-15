$(document).ready(function(){
    $(".header-left").click(function(){
        history.back();
    });

    $(".header-close").click(function(){
        history.back();
    });

    $(".login button").click(function(){
        window.location.href="/html/index.html";
    });

    $(".header-search").click(function(){
        window.location.href="/html/list-search.html";
    });
})
