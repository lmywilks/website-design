jQuery( document ).ready( function () {
	var floatinglabel = function() {
		jQuery('.floating-label .form-control').each(function(index, el) {
			var text_val = jQuery(this).val();
			if(text_val === "") {
				jQuery(this).parent().removeClass('has-value');
			}else {
				jQuery(this).parent().addClass('has-value');
			}
			jQuery(this).focus(function(){
				jQuery(this).parent().addClass('has-value');
			})
			.blur(function(){
				if(jQuery(this).val() === "" || jQuery(this).val() === " " || jQuery(this).val() === null){
					jQuery(this).parent().removeClass('has-value');
				}
			})
		});
	};
	floatinglabel();
});