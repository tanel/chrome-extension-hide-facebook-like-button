window.hideApp = {
	hide: function () {
		var els = document.getElementsByClassName("UFILikeLink");
		for (var i = 0; i < els.length; i++) {
			els[i].style.display = 'none';
		}
	},

	onscroll: function () {
		if (window.hideApp.timeout) {
			clearTimeout(window.hideApp.timeout);
		}

		window.hideApp.timeout = window.setTimeout(window.hideApp.hide, 100);
	},
};

window.hideApp.hide();

window.onscroll = window.hideApp.onscroll;
