$(function() {
    $('#readMore').click(function() { 
     $(this).text(function(i,def) {
        return def=='Read More' ?  'Show Less' : 'Read More';
    });
})

});