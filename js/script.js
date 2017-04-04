$(document).ready(function(){
	$('.reaction-container .btn').click(function() {
		var $me = $(this);
		var $item = $($('#tmpIcon').html().trim());
		// Set image url
		var url = $me.find('img').attr('src');
		$item.find('img').attr('src', url);
		// Get color class
		var cls = $me.attr('data-cls');
		$item.addClass(cls);
		for (var i = 0; i < 12; i++) {
			$item.append('<span class="sline"></span>');
		}
		// Run animation
		$item.appendTo('.reaction-container').startAnimate();
	});

	$.fn.startAnimate = function () {
		var $me = this;
		var KNOCKBACK_CONST = '-=8';
		var rdDistance = Math.floor((Math.random() * 30) + 1);
		var rdDimension = Math.floor((Math.random() * 2));
		var opr = ['+', '-'];
		

		$me.show().css('right', 15 + rdDistance * 3)
		// Go Up
		.animate({
			bottom: 150 + rdDistance
		}, {
			duration: 400,
			easing: 'easeOutCirc'
		})
		// Grow Bigger
		.animate({
			width: 40,
			height: 40,
			opacity: 1,
			bottom: KNOCKBACK_CONST,
			right: KNOCKBACK_CONST
		}, {
			duration: 200,
			easing: 'easeOutCirc'
		})
		// Awaiting (randomly)
		.delay(700 + rdDistance*5)
		// Turn smaller again
		.animate({
			width: 20,
			height: 20,
			right: '+=20',
			bottom: '+=8'
		}, {
			duration: 300,
			easing: 'linear'
		})
		// Go left and dissappear
		.animate({
			right: '+=200',
			bottom: opr[rdDimension] + '=' + rdDistance
		}, {
			duration: 1500,
			easing: 'linear'
		})
		.animate({
			right: '+=200',
			bottom: opr[1-rdDimension] + '=' + rdDistance
		}, {
			duration: 1500,
			easing: 'linear',
			complete: function() {
				$(this).remove();
			}
		})

		// Lines animation
		var LINE_DELAY = 600;
		setTimeout(function() {
			$me.find('.sline').css('opacity', 1)
		}, LINE_DELAY);

		$me.find('.sline').delay(LINE_DELAY)
		.animate({
			height: 0
		}, {
			duration: 500,
			easing: 'easeOutCirc'
		});
	}
});