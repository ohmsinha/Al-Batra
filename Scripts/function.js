



$(function () {$(window).scroll(function () {if ($(this).scrollTop() > 100) {$('#back-top').fadeIn();} else {$('#back-top').fadeOut();}});
$('#back-top a').click(function () {$('body,html').animate({scrollTop: 0}, 800);return false;});
});

$('.mob_link_dd').click(function() {
    $(this).next().fadeToggle('fast');
    $(this).toggleClass('mob_link_dd_act');
    return false;
})

	$(window).scroll(function(){
if($(this).scrollTop()>0){$('header').addClass('header_fixer'); $('.header_spacer').css({'display':'block'})}
else{$('header').removeClass('header_fixer'); $('.header_spacer').css({'display':'none'})}

})

 
$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        stagePadding: 10,
        margin: 20,
        nav: false,
        loop: true,
		auto:true,
		autoplay: true,
		autoplayTimeout:5000,
        responsive: {
            0: {
                items: 2
            },
            480: {
                items: 3
            },
            768: {
                items: 4
            },
            980: {
                items: 5
            },
            1152: {
                items: 6
            },
            1240: {
                items: 6
            }
        }
    })
})