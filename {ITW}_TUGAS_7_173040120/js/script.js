$('page-scroll'),on('click',function(e){

var href = $(this).attr('href');

var href = $(href);

$('body')animate()

scrollTop: href.offset().top -50

});