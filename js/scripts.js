$(window).load(function(){
    
    // ieCheck
    var ie = false;
    var aniButtonDuration = 350;
	 var defMh = 0, h = 0;
	 defMh = parseInt($('body').css('minHeight'));
    
    if($.browser.msie && $.browser.version<9)
    {
        aniButtonDuration = 0;
        ie = true;
    }
    
	 // Forms
	$('#form2').jqTransform({imgPath:'images/'});
    
    $('.gall_spinner').hide();
    $('#bgStretch')
		.bgStretch({
			align:'rightTop',
			navigs:$('#bgNav').navigs({prevBtn:$('#prev_arr'), nextBtn:$('#next_arr')})
		}).sImg({
			spinner:$('.gall_spinner')
		}) 
        
    $('#prev_arr, #next_arr')
	.sprites({
		method:'simple',
		duration:400,
		easing:'easeOutQuint',
		hover:true
	})
        
    $('').each(function(){
        $(this).find('>span').stop().animate({opacity:0},0);
        $(this).hover(function()
        {
            $(this).find('>span').stop().animate({opacity:1}, aniButtonDuration,'easeOutCubic')					   
        }, function(){
        	$(this).find('>span').stop().animate({opacity:0}, aniButtonDuration,'easeOutCubic')						   
        })
    })
	 
	 
	  //follow-icons-------------	 
	$('.follow-icon a').hover(function(){
		$(this).find('.img_icon').stop().animate({paddingTop:'7px'})
      $(this).find('p').stop().animate({color:'#000'}, 550, 'easeOutSine')						 
	}, function(){
		$(this).find('.img_icon').stop().animate({paddingTop:'0px'})
      $(this).find('p').stop().animate({color:'#1E1E1E'}, 550, 'easeOutSine')							 
	})
	
	
		/*FANCYBOX*/  
		$("a[rel=Appendix]").fancybox({
			'transitionIn'		: 'elastic',
			'transitionOut'		: 'elastic',
			'titlePosition' 	: 'over',
			'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
			return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
			}
		});
		
		// lightbox image
		$(".lightbox-image").append("<span></span>");
		
		$(".lightbox-image").hover(function(){
			$(this).find("img").stop().animate({opacity:0.5}, "normal")
		}, function(){
			$(this).find("img").stop().animate({opacity:1}, "normal")
		});
		
		//images rollover
		$(".rollover-image").hover(function(){
			$(this).find("img").stop().animate({opacity:0.5}, "normal")
		}, function(){
			$(this).find("img").stop().animate({opacity:1}, "normal")
		});
		
		
		// scroller
    $('.scroll')
		.uScroll({
			axis:'y'
			,lay:'outside'
			,duration:600
			,easing:'easeInOutSine'
			,step:100
			,mousewheel:true
		})
		
		$('._shuttle').mouseover(
        function(){
            $(this).stop().animate({'backgroundPosition':'center bottom'},500,'easeOutExpo');
        })
        $('._shuttle').mouseout(
		  function(){
            $(this).stop().animate({'backgroundPosition':'center top'},500,'easeOutExpo');
        })
		  $(document).mouseup(
		  function(){
            $('._shuttle').stop().animate({'backgroundPosition':'center top'},500,'easeOutExpo');
        })
		//end scroller


    /////////////////////////////////////////////////////////////////////////// 
    //                           content switch                              //
    ///////////////////////////////////////////////////////////////////////////
    
    var content=$('#content'),
			menu=$('.menu'),
			splash=$('.splash'),
			nav=$('.menu, .menu2'),
			body=$('body');
    
    $('ul#menu').superfish({
      delay:       700,
      animation:   {height:'show'},
      speed:       300,
      autoArrows:  false,
      dropShadows: false
    });

    $('.submenu_1 a b').css({width:'0px'})
    $('.submenu_1 a').hover(function()
    {
        $(this).find('b').css({width:'0px', left:'0px'}).stop().animate({width:'100%'}, 300,'easeOutCubic');			   
    }, function(){
        $(this).find('b').stop().animate({width:'0px', left:'119px'}, 300,'easeOutCubic');						   
    })
    
    
    nav.navs({
		useHash:true,
        defHash:'#!/',
		hoverIn:function(li){
		   	  $('>a ',li).css({color:'#fff'});
		   	  $('> a > span ',li).css({display:'block'}).stop().animate({opacity:1}, aniButtonDuration, 'easeOutCubic');
		},
		hoverOut:function(li){
		  if (!li.hasClass('with_ul') || !li.hasClass('sfHover')) {
              $('>a ',li).css({color:'#383c3f'});
		   	  $('> a > span ',li).stop().animate({opacity:0}, aniButtonDuration, 'easeOutCubic', function(){
		   	      $(this).css({display:'none'});
		   	  });
          }
		}				
    })
    
	 
	 $(window).resize(function (){
		 if (h < defMh) {h = defMh}
		 $('body').stop().animate({'minHeight':h})
		});
		
     content.tabs({
		preFu:function(_)
        {
            _.li.css({display:'none', top:'620px'});
            _.li.each(function(){
                if($(this).height() < 627){
                    $(this).height(627);
                } else {
                    $(this).height($(this).height()+0)
                }
            })
		}
		,actFu:function(_)
        {

            if(_.pren == undefined){
                aniDelay = 250;
            } else {
                if(_.n == -1 && _.pren == -1){
                    aniDelay = 250;
                } else {
                    aniDelay = 450;
                }
            }
            
				
            if(_.n == -1){
                content.stop().delay(10).animate({height:'547px'}, 250,'easeOutCubic');
                menu.stop().delay(100).animate({paddingTop:'400px'}, 650,'easeOutCubic');
					/* splash.stop().delay(aniDelay).animate({marginTop:'0px'}, 950,'easeOutCubic');*/
					$('.txt_descr').stop().delay(0).animate({opacity:1, marginTop:0}, 650,'easeOutCubic');
					$('.shadow_line').stop().delay(0).animate({opacity:0}, 100,'easeOutCubic');
					$('#menu > li > a').stop().delay(aniDelay).animate({height:'140px', paddingTop:'53px'}, 650,'easeOutCubic');
					$('.submenu_1').stop().delay(aniDelay).css({top:'-1194px'}, 650,'easeOutCubic');
					 $(window).trigger('resize');
            } else {
                content.stop().delay(aniDelay).animate({height:_.curr.height()+0}, 650,'easeOutCubic');
					 menu.stop().delay(100).animate({paddingTop:'37px'}, 650,'easeOutCubic');
					 /* splash.stop().delay(aniDelay).animate({marginTop:'0px'}, 0,'easeOutCubic');*/
					 $('.shadow_line').stop().delay(aniDelay).animate({opacity:1}, 650,'easeOutCubic');
					 $('.txt_descr').stop().delay(0).animate({opacity:0, marginTop:-1200}, 650,'easeOutCubic');
					 $('#menu > li > a').stop().delay(aniDelay).animate({height:'51px', paddingTop:'43px'}, 650,'easeOutCubic');
					$('.submenu_1').stop().delay(aniDelay).css({top:'94px'}, 650,'easeOutCubic');
					  $(window).trigger('resize');
					 
            }
            
        	if(_.curr){
				
        	   h = parseInt( _.curr.outerHeight(true)+280);
				$(window).trigger('resize');
				_.curr
					.stop()
					.delay(320).css({display:'block', top:-content.height()-50}).animate({top:'85px'}, 950,'easeOutSine');
            }

            
			if(_.prev){
			    _.prev 
    				.stop()
    				.animate({top:content.height()}, 750,'easeInSine', function(){
    				     $(this).css({display:'none'});
    			     });
            }
           
        }
		
	})
       
    nav.navs(function(n, _)
    {
		content.tabs(n);
	})
    
 
})