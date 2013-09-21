$(function(){
$('.button').hover(function(){
	$(this).css('color', '#FFF');
	}, function(){
		$(this).css('color', '#BBB');
		});
		
$('#modButton').on('click', function(){
	$('.user').hide();
	$('.mod').show();
	$('#userButton').css('box-shadow', '');
	$('#allButton').css('box-shadow', '');
	$(this).css('box-shadow', '#727272 0px 0px 11px');
	});
$('#userButton').on('click', function(){
	$('.mod').hide();
	$('.user').show();
	$('#modButton').css('box-shadow', '')
	$('#allButton').css('box-shadow', '')
	$(this).css('box-shadow', '#727272 0px 0px 11px');
	});
$('#allButton').on('click', function(){
	$('.user').show();
	$('.mod').show();
	$('#userButton').css('box-shadow', '');
	$('#allButton').css('box-shadow', '');
	$(this).css('box-shadow', '#727272 0px 0px 11px');
	});
});