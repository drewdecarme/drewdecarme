// Scroll to the top every time the page loads
window.onbeforeunload = function () {
	window.scrollTo(0,0);
}


var website = {
	init: function(type){
		if (type == 'main') {
			this.smoothScrolling();
			$('.icon-menu').click(function(e){
				website.toggleMobileMenu();
			});
			// $(window).resize(function(){
			// 	$('.more-container').hide();
			// })
		}

		

		this.populateSocialIcons();
		this.populateIntroduction();
		this.popupateProject(type);

		
	},
	populateIntroduction: function(){
		var html = '<div class="title">' + titleObj.title + '</div>';
		html += '<div class="content">';
		for (var i = 0; i < titleObj.description.length; i++) {
			html += '<p>' + titleObj.description[i] + '</p>'
		}
		html += "</div>"
		$('#about').html(html);

	},
	populateSocialIcons: function(){
		var html = '';
		for (var i = 0; i < socialObj.length; i++) {

			html += '<li>';
			switch (socialObj[i].type){
				case "download":
					html += '<a class="' + socialObj[i].class + '" href="' + socialObj[i].link + '" aria-label="' + socialObj[i].aria + '" download>';
					break;

				case "link":
				default:
					html += '<a class="' + socialObj[i].class + '" href="' + socialObj[i].link + '" aria-label="' + socialObj[i].aria + '" target="_blank">';
					break;
			}

			html += '<span>' + socialObj[i].text + '</span>';
			html += '</a>';
			html += '</li>';
		}

		$('#social').html(html);

	},
	toggleMobileMenu: function(){
		if ($('[data-collapse="nav"]').is(':visible')) {
			if (!$('.icon-menu').hasClass('open')) {
				$('.icon-menu, .nav-bar, body').addClass('open')

			}else{
				$('.icon-menu, .nav-bar, body').removeClass('open')
			}
		}
	},
	smoothScrolling: function(){
		$('a[data-target="on-page"]').click(function(e) {
			e.preventDefault();
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top - 61
					}, 400);
					// return false;
				}
			}
			if (e.target.id != 'logo') {
				website.toggleMobileMenu();
			}

		});

		$(window).bind('scroll resize', function(){
			website.positionFloaters()
		})
	},
	positionFloaters: function(){

		var about = $('#about').offset().top;
		var hello = $('#contact > .title');
		var navBar = $('.nav-bar');
		
		var logo = $('#logo')
		var title = $('#title')
		var social = $('#social')
		var socialButtons = social.find('a')

		var topOfWindow = $(window).scrollTop();
			var contactTop = $('#portfolio').offset().top + $('#portfolio').outerHeight() - navBar.outerHeight() - 10;

			if (topOfWindow > 20) {

				// Move the logo and icons to the nav bar
				if (logo.hasClass('full')) 	logo.addClass('nav').removeClass('full')
				if (social.hasClass('full')) social.addClass('nav').removeClass('full')
				title.addClass('nav')
				// navText.addClass('nav')

				if (topOfWindow > contactTop) {
					if (social.hasClass('nav')) social.removeClass('nav').addClass('contact')
				}else{
					if (social.hasClass('contact')) social.removeClass('contact').addClass('nav')
				}
			}else{

				// Move the logo and icons back to full
				if (logo.hasClass('nav')) logo.addClass('full').removeClass('nav')
				if (social.hasClass('nav')) social.addClass('full').removeClass('nav')
				title.removeClass('nav');
				// navText.removeAtt('nav')
			}

			// Make the Navication Bar Transparent
            if(topOfWindow > (about - 59)){
            	navBar.addClass('dark')
            	logo.addClass('dark');
            	social.addClass('dark')
            }else{
            	navBar.removeClass('dark')
            	social.removeClass('dark')
            	logo.removeClass('dark');
            }

	},
	popupateProject: function(type){
		var obj = projectObj;
		switch	(type){
			case "main":
				for (var i = 0; i < obj.length; i++) {
					// Set Local Objects for ease of Population
					var id = obj[i].id;
					var summ = obj[i].summary;
					var detail = obj[i].detail;

					// Append the Projects to the DOM
					$('#project-container').append('\
						<div class="project"  id="' + id + '" style="background-image: url(./images/' + summ.logo + ')">\
							<div class="project-type">' + summ.type + '</div>\
							<div class="project-quick">\
								<div>' + summ.short + '</div>\
								<button class="bttn bttn-more">More Information</button>\
							</div>\
						</div>');

					// Initalize the Project Constructor
					if (!$.isEmptyObject(detail)){
						$('#' + id).project(detail)
					}else{
						$('#' + id).project()
					}
				}
				break;

			case "project":
				for (var i = 0; i < obj.length; i++) {
					// Set Local Objects for ease of Population
					var id = obj[i].id;
					var summ = obj[i].summary;
					var detail = obj[i].detail;


					// Append the Projects to the DOM
					$('#project-container').append('\
						<div class="project">\
							<div class="project-left">\
								<div class="project-image" style="background-image: url(../images/' + detail.url + ')"></div>\
							</div>\
							<div class="project-right">\
								<div class="project-title">' + detail.title + '</div>\
								<div class="project-description">' + detail.description + '</div>\
								<div class="project-actions">' + website.processInnerArrs(detail.actions, 'actions') + '</div>\
								<div class="project-tags">' + website.processInnerArrs(detail.tags, 'tags') + '</div>\
							</div>\
						</div>');
				}
				break;

		}

		$('.project').click(function(){
			$('.project').removeClass('active')
			$(this).addClass('active')
		});
		$('.more-container > .close').click(function(){
			$('.project').removeClass('active')
		});
	},
	processInnerArrs(arr, type){
		var html = '';
		if (arr.length != 0) {
			for (var i = 0; i < arr.length; i++) {
				if (type == 'tags') {
					html += '<div class="tag">' + arr[i] + '</div>';
				} else if(type == 'actions') {
					switch (arr[i].type){
	        			case 'button':
	        				html += '<a href="' + arr[i].url.split('projects/')[1] + '" class="bttn bttn-project-action">' + arr[i].text + '</a>';
	        				break;
	        			case 'pdf':
	        				html += '<a href="' + arr[i].url.split('projects/')[1] + '" class="bttn bttn-project-action" download>' + arr[i].text + '</a>';
	        				break;
	        			case 'text':
	        				html += '<div class="no-show">' + arr[i].text + '</div>'
	        				break;
	        		}
				}
			}
		}
		return html;
	}
}













