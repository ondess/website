/*	
	- Template Name: Ondess - On Demand Embedded Software Solutions 
	- Autor: Iwthemes
	- Email: support@iwthemes.com
	- Name File: theme-options.js
	- Version 1.5 - Update on 9/09/2014
	- Website: http://www.iwthemes.com 
	- Copyright: (C) 2014
*/

$(document).ready(function($) {

	/* Selec your skin and layout Style */
	function interface(){

	    // Skin Version value
	    var skin_version = "style-light"; // style-light (default), style-dark 

	    // Skin Color value
	    var skin_color = "blue"; // blue (default), custom 

	    // Boxed value
	    var layout = "layout-wide"; // layout-wide (default), layout-boxed, layout-boxed-margin 

	    //Only in boxed version 
	    var bg = "none";  // none (default)

	    // Theme Panel - Visible - no visible panel options
	    var themepanel = "1"; // 1 (default - visible), 0 ( No visible)

	    $("#layout").addClass(skin_version);	
	    $(".skin_color").attr("href", "css/skins/"+ skin_color + "/" + skin_color + ".css");
	    $("#layout").addClass(layout);	
	    $("body").addClass(bg);   
	    $("#theme-options").css('opacity' , themepanel);
	    return false;
  	}
 	interface();

	//=================================== Theme Options ====================================//

	$('.wide').click(function() {
		$('.boxed').removeClass('active');
		$('.boxed-margin').removeClass('active');
		$(this).addClass('active');
		$('.patterns').css('display' , 'none');
		$('#layout').removeClass('layout-boxed').removeClass('layout-boxed-margin').addClass('layout-wide');
	});
	$('.boxed').click(function() {
		$('.wide').removeClass('active');
		$('.boxed-margin').removeClass('active');
		$(this).addClass('active');
		$('.patterns').css('display' , 'block');
		$('#layout').removeClass('layout-boxed-margin').removeClass('layout-wide').addClass('layout-boxed');
	});
	$('.boxed-margin').click(function() {
		$('.boxed').removeClass('active');
		$('.wide').removeClass('active');
		$(this).addClass('active');
		$('.patterns').css('display' , 'block');
		$('#layout').removeClass('layout-wide').removeClass('layout-boxed').addClass('layout-boxed-margin');
	});
	$('.light').click(function() {
		$('.dark').removeClass('active');
		$(this).addClass('active');
		$('#layout').removeClass('style-dark').addClass('style-light');
	});
	$('.dark').click(function() {
		$('.light').removeClass('active');
		$(this).addClass('active');
		$('#layout').removeClass('style-light').addClass('style-dark');
	});


    // Color changer
    $(".blue").click(function(){
        $(".skin_color").attr("href", "css/skins/blue/blue.css");
        $(".logo_img").attr("src", "css/skins/blue/logo.png");
        return false;
    });
    
    $(".custom").click(function(){
        $(".skin_color").attr("href", "css/skins/custom/custom.css");
        $(".logo_img").attr("src", "css/skins/custom/logo.png");
        return false;
    });

	//=================================== Background Options ====================================//
	
	$('#theme-options ul.backgrounds li').click(function(){
	var 	$bgSrc = $(this).css('background-image');
		if ($(this).attr('class') == 'bgnone')
			$bgSrc = "none";

		$('body').css('background-image',$bgSrc);
		$.cookie('background', $bgSrc);
		$.cookie('backgroundclass', $(this).attr('class').replace(' active',''));
		$(this).addClass('active').siblings().removeClass('active');
	});

	//=================================== Panel Options ====================================//

	$('.openclose').click(function(){
		if ($('#theme-options').css('left') == "-222px")
		{
			$left = "0px";
			$.cookie('displayoptions', "0");
		} else {
			$left = "-222px";
			$.cookie('displayoptions', "1");
		}
		$('#theme-options').animate({
			left: $left
		},{
			duration: 500			
		});

	});

	$(function(){
		$('#theme-options').fadeIn();
		$bgSrc = $.cookie('background');
		$('body').css('background-image',$bgSrc);

		if ($.cookie('displayoptions') == "1")
		{
			$('#theme-options').css('left','-222px');
		} else if ($.cookie('displayoptions') == "0") {
			$('#theme-options').css('left','0');
		} else {
			$('#theme-options').delay(800).animate({
				left: "-222px"
			},{
				duration: 500				
			});
			$.cookie('displayoptions', "1");
		}
		$('#theme-options ul.backgrounds').find('li.' + $.cookie('backgroundclass')).addClass('active');

	});

});