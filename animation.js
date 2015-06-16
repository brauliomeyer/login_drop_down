/* JQ animation for form */
$(document).ready(function() {
    $('li.fields').filter(':nth-child(n+4)').addClass('hide');
    $('ul').on('click','li.title', function() {
        $(this).next().slideToggle(300).siblings('li.fields').slideUp(300); 
    });
});