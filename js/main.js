$(document).ready(function() {
    
    // Выпадающие меню
    

    var menuBtn = $('.top-nav_btn');
    var sidebarBtn = $('.left-sidebar_btn');
    var menu = $('.top-nav_menu');
    var sidebarMenu = $('.left-sidebar_menu');

    menuBtn.on('click', function(event) {
        event.preventDefault();
        menu.toggleClass('top-nav_menu__active');
    });
    sidebarBtn.on('click', function(event) {
        event.preventDefault();
        sidebarMenu.toggleClass('left-sidebar_menu__active');
    });

    // Слик-слайдер
    $('.direction-blocks').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1365,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Ползунок
    var elem = document.querySelector('.calc-range');
    var init = new Powerange(elem, 
        { 
            min: 100000, 
            max: 3000000, 
            start: 100000, 
            hideRange: true, 
            step: 100000 
        });
    var per, month, result, total, monthly;
    var money = +$('.calc-range').val();

    $('input[name="programms"]').on('change', function() {
        month = +$(this).attr('data-month');
        per = +$(this).attr('data-per');
        result = Math.round(per / 12 * month * money);
        total = result + money;
        monthly = parseInt(result / month);
        $('#total').text(total.toString().replace(/(\d)(?=(\d\d\d)*([^\d]|$))/g, '$1 '));
        $('#month').text(month);
        $('#monthly').text(monthly.toString().replace(/(\d)(?=(\d\d\d)*([^\d]|$))/g, '$1 '));
    });
    
    $('.calc-range').on('change', function() {
        var radio = $('input[name="programms"]:checked');

        $('.calc-summ_invest_num span').text($(this).val().replace(/(\d)(?=(\d\d\d)*([^\d]|$))/g, '$1 '));
        money = +$(this).val();
        month = +radio.attr('data-month');
        per = +radio.attr('data-per');
        result = Math.round(per / 12 * month * money);
        total = result + money;
        monthly = parseInt(result / month);
        $('#total').text(total.toString().replace(/(\d)(?=(\d\d\d)*([^\d]|$))/g, '$1 '));
        $('#month').text(month);
        $('#monthly').text(monthly.toString().replace(/(\d)(?=(\d\d\d)*([^\d]|$))/g, '$1 '));
    });

});