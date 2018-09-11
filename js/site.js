$( document ).ready(function() {

    $('.carousel').flickity({
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        prevNextButtons: true
    });

    $('#hamburger-icon').on('click', function() {
        $('.main').toggleClass('is-noscroll');
        $('#hamburger-icon').toggleClass('active');
        $('.sidebar').toggleClass('is-active');
        $('.section').toggleClass('is-active');
    });

});
