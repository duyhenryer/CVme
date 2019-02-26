'use strict';

$('.menu-mb').on('click', function () {
    $('.menu-mb-block').fadeIn(200);
});
$('.menu-close').on('click', function () {
    $('.menu-mb-block').fadeOut(200);
});
$(window).on('resize', function () {
    var xx = window.innerWidth;
    if (xx >= 768) {
        $('.menu-mb-block').fadeOut(200);
    }
});
$('.gotoAbout').on('click', function () {
    $('.menu-mb-block').fadeOut(200);
    $('html,body').animate({
        scrollTop: $('#about').offset().top
    }, 'slow')
});
$('.gotoDifference').on('click', function () {
    $('.menu-mb-block').fadeOut(200);
    $('html,body').animate({
        scrollTop: $('#difference').offset().top
    }, 'slow')
});
$('.gotoSchadule').on('click', function () {
    $('.menu-mb-block').fadeOut(200);
    $('html,body').animate({
        scrollTop: $('#schedule').offset().top
    }, 'slow')
});
$('.gotoCourse').on('click', function () {
    $('.menu-mb-block').fadeOut(200);
    $('html,body').animate({
        scrollTop: $('#course').offset().top
    }, 'slow')
});
$('.gototop').on('click', function () {
    $('html,body').animate({
        scrollTop: $('.wrapper').offset().top
    }, 'slow')
});

$(window).scroll(function () {
    var scrollPos = $(document).scrollTop();
    if (scrollPos > 39) {
        $('.wrapper').addClass('fixed-header');
    } else {
        $('.wrapper').removeClass('fixed-header');
    }
});

$('.carousel').carousel();
$('.carousel2').carousel();

$(window).on('resize', function () {
    var xx = window.innerWidth;
    if (xx >= 768) {
        $('.menu-mb-block').fadeOut(200);
    }
});
$('.popup-1').on('click touch', function () {
    $('.popup-block-01').fadeIn(200);
});
$('.popup-2').on('click touch', function () {
    $('.popup-block-02').fadeIn(200);
});
$('.close-popop').on('click touch', function () {
    $('.fixed-sr').fadeOut(200);
});


(function () {
    window.addEventListener('load', function () {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {

                var _name = $('#send-cv').find('input[name="firstname"]').val() + $('#send-cv').find('input[name="lastname"]').val();
                var _mail = $('#send-cv').find('input[name="email"]').val();
                var _number = $('#send-cv').find('input[name="phone"]').val();
                var _select = $('#send-cv').find('select[name="select"]').val();
                var _textarea = $('#send-cv').find('textarea[name="textarea"]').val();
                var _link = "abc.com";

                // console.log(_name)
                // console.log(_mail)
                // console.log(_number)
                // console.log(_select)
                // console.log(_textarea)
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                if (form.checkValidity() === true) {
                    event.preventDefault();
                    event.stopPropagation();
                    $.ajax({
                        type: "POST",
                        url: _link,
                        data: {
                            'course': _select,
                            'temporary_registration[course_id]': _select,
                            'temporary_registration[name]': _name,
                            'temporary_registration[email]': _mail,
                            'temporary_registration[phone]': _number,
                            'temporary_registration[address]': 'VN',
                            'commit': _textarea
                        },
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        success: function (data) {
                            alert('Bạn đã đăng ký thành công');
                            $('#send-cv').find("input[type=text], input[type=email], textarea").val("");
                        },
                        failure: function (data) {
                            console.log(errMsg);
                        }
                    });

                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

