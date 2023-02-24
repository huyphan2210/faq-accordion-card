$(document).ready(() => {
    $('.question').click(function() {
        const display = $(this).find('.answer').css('display');
        if (display === 'none') {
            $('.answer').css('display', 'none');
            $('.questionContent').css('color', '');
            $('.questionContent').css('font-weight', '');
            $('img').css('transform', '');
            $(this).find('.questionContent').css('color', 'hsl(238, 29%, 16%)');
            $(this).find('.questionContent').css('font-weight', '700')
            $(this).find('.answer').css('display', 'block');
            $(this).find('img').css('transform', 'scaleY(-1)');
        } else {
            $(this).find('.questionContent').css('color', '');
            $(this).find('.questionContent').css('font-weight', '')
            $(this).find('.answer').css('display', 'none');
            $(this).find('img').css('transform', '');
        }
    })
})
