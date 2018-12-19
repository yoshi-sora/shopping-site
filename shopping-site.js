$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: true,
            
        }
        );
});

//ハンバーガーメニュー
$(function() {
    
$(document).ready(function(){
    $("#sp_navi_btn").click(function(){
        $(this).next().slideToggle();
    });
});
});

//スライドショー
$(window).load(function(){
  $(".products-img-li img").click(function(){
    var img_src = $(this).attr("src");
    $(".products-img-display img").attr("src", img_src);
  });
});


 