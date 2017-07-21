'use strict';

var $ = require('jquery');

 function NavSlide(element) {
	
  var children=element.children().find('.first')
	puldown()
	function puldown(){
		children.hover(function(){
			$(this).find('.s-group').slideDown(300)
			$(this).find('.s-group').find('li').find('.item').find('a').stop().animate({top:'0px'},100)
			$(this).find('.s-group').find('li').find('.item').find('a').css('opacity','1')
			
		},function(){
			$(this).find('.s-group').slideUp(350)
			$(this).find('.s-group').find('li').find('.item').find('a').stop().animate({top:'23px'},100)
			$(this).find('.s-group').find('li').find('.item').find('a').css('opacity','0')
		})
		$('.s-group .second .item a').hover(function(){
			$(this).siblings('.mask').stop().animate({width:'100px',left:'0px'},300)
			
		},function(){
			$(this).siblings('.mask').stop().animate({width:'0px',left:'50px'},300)
		})
		
		
}
	
};

module.exports = NavSlide();