$('.sex').on('click', function () {
    var px = -117;
    $('.sex').css('background-image', '');
    $(this).css('background-position-x', px * $(this).index() + 'px')
        .css('background-image', 'url(images/choose/role_hover.jpg)');
})