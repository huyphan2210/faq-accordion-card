$(document).ready(() => {
    $('.question').click(() => {
        $(this).find('.answer').css('display', 'block')
    })
})