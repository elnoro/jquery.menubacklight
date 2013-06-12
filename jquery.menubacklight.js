/*
 * Плагин подсвечивания пункта меню, соответствующего текущей странице
 * */
(function ($) {
	jQuery.fn.broniMenuBacklight = function (options) {
		options = $.extend({
			activeClass: 'active', // класс текущего элемента
			elementType: 'li', // тип элемента, которому присваивается класс
			urlArray: $(this)
				.children('li').children('a')
				.map(function (i, e) { return e.href; }), // массив ссылок
			subMenu: false // проход по подменю 1-го уровня
		}, options);
		$(this).find(options.elementType).removeClass(options.activeClass);
		var url = document.location.href.split('#')[0], i;
		for (i = 0; i < options.urlArray.length; i++) {
			if (options.urlArray[i] === url) {
				if (options.elementType === 'li') {
					$(this).children('li').eq(i).addClass(options.activeClass);
				}
				else {
					$(this).children('li').eq(i).children('a').addClass(options.activeClass);
				}
				break;
			}
		}

		if (options.subMenu) {
			$(this).find('li > ul > li > a').each(function (i, e) {
				if (url === e.href) {
					$(this).parents('li')[1].addClass('active');
				}
			});
		}
		return this;
	};
}(jQuery));
