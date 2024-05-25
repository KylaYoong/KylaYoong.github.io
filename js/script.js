$(document).ready(function() {
    Fancybox.bind("[data-fancybox]", {});

    $('button').click(function() {
        let filter = $(this).data('filter');
        $('#products img').hide();
        $(filter).show();
    });
});