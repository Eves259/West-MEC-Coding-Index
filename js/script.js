$(function() { //Shorthand for document.ready
    $('.navbar .bars li').on('click', function() {
    var $bars = $(this).closest('.navbar');
    $bars.find('.bars li.active').removeClass('active'); //It knows a class is here so don't put the dot to declare it again
    
    //figure out which dropdown to show
    var barsToShow=$(this).attr('rel');
    
    //hides current dropdown
    $bars.find('.nav.active').slideUp(300, showNextBar);

    //show the next dropdown
    function showNextBar() {
        $(this).removeClass('active');
        $('#'+barsToShow).slideDown(300, function() {
        $(this).addClass('active');
        });
    }
    });
});

