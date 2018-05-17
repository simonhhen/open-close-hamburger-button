$(document).ready(function(){
	$('#menu-overlay-btn').click(function(){
  if (!$(this).hasClass('open')&&!$(this).hasClass('closed')){
    $(this).toggleClass('open');
  } else {
    $(this).toggleClass('open closed');
  }
	});
});