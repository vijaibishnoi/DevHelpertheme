//~ var currentcolor= standarColor();
		//~ $('#main-menu').css('background', currentcolor);
		var elmList = '.min-player > .play';
		$(elmList).each(function (index, element) {
				elmTitle = $(this).attr('href');
				var currentcolor= intToRGB(hashCode(elmTitle) ) ;
				elmParent = $(this).parent();
								$(this).children('.fa').css('background', currentcolor);
				$(this).css('background', currentcolor);
				$(elmParent).children('.min-player-footer').css('background', currentcolor);
		});
		

		var share_dialog = '.share-dialog';
		var share_container = '.share-container';
		function share_btn(d){
			fb_appid = '342442899798057';
			twt_appid = 'Suratmp3';
			//fb 	= 'https://www.facebook.com/dialog/share?app_id='+fb_appid+'&href=';
			fb 	= 'https://www.facebook.com/sharer/sharer.php?u=';
			twt = 'https://twitter.com/intent/tweet?text=' + $(d).attr('data-title') + '&via='+twt_appid+'&url=';
			wp 	= 'whatsapp://send?text=';
			//wp 	= 'https://wa.me/?text=';
			$(share_dialog).find('.fa-facebook-f').attr('href', fb + $(d).attr('data-url'));
			$(share_dialog).find('.fa-twitter').attr('href', twt + $(d).attr('data-url'));
			$(share_dialog).find('.fa-whatsapp').attr('href', wp + $(d).attr('data-url'));
		}
		
		$('body').on('click', '.share', function(){
			$(share_dialog).show();
			$(share_container).show();
			//~ $('header,main,footer').css('filter','blur(20px)');
			share_btn(this);
		});
		$('body').on('click', share_dialog + ' .hideit,' + share_container , function(){
			$(share_dialog).hide('fast');
			$(share_container).hide('fast');
			//~ $('header,main,footer').css('filter','blur(0px)');
		});
	
