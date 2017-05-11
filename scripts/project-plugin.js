(function($){

	$.fn.project = function (option) {
        return this.each(function () {
            var $this = $(this)
			  , data = $this.data('project')
			  , options = typeof option == 'object' && option
            if (!data) $this.data('project', (data = new project(this, options)))
            if (typeof option == 'string') data[option]()
        })
    }
    var project = function (element, options) {
        this.defaults = {
        	url: 'logo-personal-dark.svg',
			title: 'This is a test title',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commod',
			tags: ['tag1','tag2','tag3','tag4','tag5','tag6', 'tag7']
        },
        this.$project = $(element)
        this.options = $.extend({}, this.defaults, options)
        this.imageRoot = '../images/';
        this.projectImageRoot = './images/';
        this.$moreConatiner = $('.more-container')
        this.id = this.$project.attr('id')
        this.$image = new Image()
        this.init()
    }
    project.prototype = {
        constructor: project,
        init: function(){
        	this.$moreInfo = this.$project.find('.bttn-more')
        	this.loadImage()
        	this.bindActions()
        },
        loadImage: function(){
        	this.$image.src = this.projectImageRoot + this.options.url
        },
        bindActions: function(){
    		this.$moreInfo
            	.on('click', $.proxy(this.intiContainer, this))
            $(window)
                .on('resize', $.proxy(this.closeContainer, this))
        },
        initClose: function(){
        	var that = this;
        	var $close = $('.more-container').find('.close')
        	$close
        		.on('click', $.proxy(this.closeContainer, this))
        },
        intiContainer: function(event){
        	this.initClose()
        	this.resetMargins()
        	this.populateContainer()
        	this.marginBottom = this.$moreConatiner.outerHeight() + 100
        	this.$project.css('margin-bottom', this.marginBottom)
        	this.positionConatiner()
        	return this;
        },
        resetMargins: function(){
        	$('.project').css('transition','');
        	$('.project').each(function(){
        		var url = $(this).attr('style').split(' ')[1]
        		$(this).css({
	        		'background-image' : url,
	        		'margin-bottom' : 50
	        	})
        	})
        },
        positionConatiner: function(){
        	var position = this.$project.position();
        	this.$moreConatiner.css({
        		top: (position.top + this.$project.outerHeight() + 50)
        	})
        	this.positionPointer(position.left);
        	if (!this.$moreConatiner.is(':visible')) this.showConatiner();
            $('html, body').animate({
                scrollTop: $("#" + this.id).offset().top - $('.nav-bar').outerHeight() - 20
            }, 500);
        },
        positionPointer: function(left){
        	this.$pointer = this.$moreConatiner.find('.pointer');
        	var padding = parseInt(this.$project.parents('.section').css('padding').split('px')[0])
        	var half = this.$project.outerWidth() / 2;
        	this.$pointer.css({
        		left: (left + half + padding),
        	})
        },
        showConatiner: function(id){	
        	this.$moreConatiner.show();
            
        },
        closeContainer: function(){
        	var that = this;
        	var initHeight = that.$moreConatiner.outerHeight()
        	this.$moreConatiner.hide();
        	$('.project').css({
        		'margin-bottom': 50,
        		'transition' : 'margin-bottom .25s linear'
        	})
        },
        populateContainer: function(){
        	var that = this;
        	this.$moreConatiner.find('.image').attr('style','background-image: url(' + this.$image.src + ')');
        	this.$moreConatiner.find('.description').html(this.options.description)
        	this.$moreConatiner.find('.title').html(this.options.title)
        	this.$moreConatiner.find('.actions').html(that.createActions())
    		this.$moreConatiner.find('.tag-container').html(this.createTags())
        },
        createTags: function(){
        	var tags = '';
        	for (var i = 0; i < this.options.tags.length; i++) {
        		tags += '<div class="tag">' + this.options.tags[i] + '</div>';
        	}
        	return tags;
        },
        createActions: function(){
        	var html = '';
        	var arr = new Array()
        	if (this.options.actions){
        		arr = this.options.actions
        		for (var i = 0; i < arr.length; i++) {
	        		switch (arr[i].type){
	        			case 'button':
	        				html += '<a href="' + arr[i].url + '" class="bttn bttn-project-action" target="_blank">' + arr[i].text + '</a>';
	        				break;
	        			case 'pdf':
	        				html += '<a href="' + arr[i].url + '" class="bttn bttn-project-action" download>' + arr[i].text + '</a>';
	        				break;
	        			case 'text':
	        				html += '<div class="no-show">' + arr[i].text + '</div>'
	        				break;
	        		}
	        	}
	        	return html
        	}else{
        		return html
        	}
        	
        }
    }

})(jQuery);