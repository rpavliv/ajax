/* global $ */
$(function () {
    $('#btn-submit').click(function(e) {
        e.preventDefault();
        $.ajax({
    url: "https://formspree.io/rostyslavpavliv@gmail.com", 
    method: "POST",
    data: {
        name: $('#name').val(),
        name: $('#email').val(),
        name: $('#country').val()
    },
    dataType: "json"
        }).done(function() {
            $('form').html('<h1>Thank you friend!</h1>');
});
    });
});