jQuery(function($) {
	$('.js-nav-toggle').click(function() {
		var $this = $(this);
		var $nav = $('.header-menu')
		if ($this.hasClass('collapsed')) {
			$this.removeClass('collapsed').blur();
			$nav.slideDown();
		} else {
			$this.addClass('collapsed').blur();
			$nav.slideUp();
		}
	});
});
