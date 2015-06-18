$(function(){
	$("input:not(.btn-submit)").on("blur",function(){
		if ($(this).val() && !$(this).hasClass('filled')){
			$(this).addClass('filled');
		}else if(!$(this).val()){
			$(this).removeClass('filled');
		}
	});
});