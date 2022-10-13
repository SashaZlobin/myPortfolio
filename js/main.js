$(function () {
    $.fn.followTo = function (pos) {
        var $this = this,
            $window = $(window);

        $window.scroll(function (e) {
            if ($window.scrollTop() > pos) {
                $this.css({
                        position: 'fixed',
                        top: 100
                    },
                    510);
            } else {
                $this.css({
                    position: 'absolute',
                    top: -100
                });
            }
        });
    };

    $('.aside').followTo(175);
});


$(document).ready(function () {

    $('.question__link').click(function () {
        $(this).toggleClass('in').next().slideToggle();
        $('.question__link').not(this).removeClass('in').next().slideUp();
    });

});


$('.reviews__inner').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/right-arrow.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/right-arrow.svg" alt=""></button>',
});


AOS.init();


$("body").on('click', '[href*="#"]', function (e) {
    var fixed_offset = 100;
    $('html,body').stop().animate({
        scrollTop: $(this.hash).offset().top - fixed_offset
    }, 1000);
    e.preventDefault();
});


var openPopUp = document.getElementById('pop_up');
var closePopUp = document.getElementById('pop_up_close');
// var popUp = document.getElementById('pop_up');
// const popUp = document.getElementById('.pop_up');

popUp = document.querySelector('.pop_up  ');
console.log(popUp);

function active() {
    if (popUp.classList.contains('active')) {
        popUp.classList.remove('active');
    } else {
        popUp.classList.add('active');
    }
};

openPopUp.addEventListener('click', function (e) {
    e.preventDefault();
    popUp.classList.add('active');
});

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
});