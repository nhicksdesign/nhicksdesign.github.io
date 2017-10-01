$(document).ready(function () {

    /*STICKY NAVIGATION*/
    $("#about").waypoint(function (direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });

    /*SCROLL TO*/
    $('.home-button').click(function () {
        $('html, body').animate({
            scrollTop: $('.hero-text-box').offset().top
        }, 1000);
    });

    $('.about-button').click(function () {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1000);
    });

    $('.work-button').click(function () {
        $('html, body').animate({
            scrollTop: $("#work").offset().top
        }, 1000);
    });

    $('.hire-button').click(function () {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    });

    /*MOBILE NAVIGATION*/
    $('.mobile-nav-icon').click(function () {
        var nav = $('.main-nav');
        var icon = $('.mobile-nav-icon i');

        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });

    var $contactForm = $('#contact-form');
    $contactForm.submit(function (e) {
        e.preventDefault();
        $.ajax({
            url: '//formspree.io/nhicksdesign@gmail.com',
            method: 'POST',
            data: $(this).serialize(),
            dataType: 'json',
            beforeSend: function () {
                $contactForm.append('<div class="alert alert--loading">Sending message…</div>');
            },
            success: function (data) {
                $contactForm.find('.alert--loading').hide();
                $contactForm.append('<div class="alert alert--success">Message sent!</div>');
            },
            error: function (err) {
                $contactForm.find('.alert--loading').hide();
                $contactForm.append('<div class="alert alert--error">Oops, there was an error.</div>');
            }
        });
    });
});
