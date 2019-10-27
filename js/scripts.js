// Начало работы
// document ready - html загружен;
$(document).ready(function($){
    // let name = 'Valera';
    // let age = 32;
    // let user = {
    //     name: name,
    //     age: age
    // };
    // let array = ['Valera', '123', '`123`13'];
    let count = 0;

    $('.header_icon__search-btn').click(function () {
        // let a = 1;
        // a = 2;
        // a = 50;

        // console.log(count++ );
        // if (count > 5) {
        //     return;
        // }

        $('.header_input-search').toggleClass('header_active-search');
    });

    $('.header_icon__main-menu-btn').click(function () {
        $('.header_main-menu_nav').toggleClass('header_main-menu_nav_active');
    });

    $('.S_services-slider').owlCarousel({
        nav: true,
        margin: 30,
        loop: true,
        items: 1.5,
        autoWidth: true,
        smartSpeed: 750,
        mouseDrag: false,
        touchDrag: false,
        navText: ["<span class='arrows'></i>","<span class='arrows'></i>"],
    });

    $('.S_testimonials-slider').owlCarousel({
        nav: true,
        loop: true,
        items: 1,
        smartSpeed: 750,
        mouseDrag: false,
        touchDrag: false,
        navText: ["<span class='arrows'></i>","<span class='arrows'></i>"],
    });

    $('.S_works_gallery_button').click(function () {
        const item = $(this).text().toLowerCase().trim();
        $('.S_works_gallery-item').hide();
        // if (item === 'branding') {
        //     $('.S_works_gallery-item.branding').show();
        // } else if (item === 'all') {
        //     $('.S_works_gallery-item.all').show();
        // } else if (item === 'web') {
        //     $('.S_works_gallery-item.web').show();
        // }
        const imgSelector = '.S_works_gallery-item';
        switch (item) {
            case 'all':
                $(imgSelector + '.all').show();
                break;
            case 'branding':
                $(imgSelector + '.branding').show();
                break;
            case 'web':
                $(imgSelector + '.web').show();
                break;
            case 'development':
                $(imgSelector + '.development').show();
                break;
            default :
                $(imgSelector + '.films').show();
        }
    })

});

