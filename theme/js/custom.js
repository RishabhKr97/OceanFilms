/**
 *-----------------------------------------------------------------
 *
 *  1.  Main Menu
 *  2.  Humberger Menu
 *  3.  Mobile Menu
 *  4.  Accordion
 *  5.  Validate
 *  6.  Owl Carousel
 *  7.  Background Video
 *  8.  Google Map
 *  9.  Search Box
 *  10. Sync owl carousel
 *  11. Filter Wookmark
 *  12. Filter Masonry
 *  13. Masonry
 *  14. Color box
 *  15. Flickr
 *  16. Single-author-Filter
 *  17. Match height
 *  18. Fit Video
 *  19. Scroll to Top
 *  20. Set User Agent
 *  21. Custom Scroll Bar
 *  
 *-----------------------------------------------------------------
 **/
 
"use strict";


jQuery(document).ready(function(){


var kopa_variable = {
    "contact": {
        "address": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "marker": "/url image"
    },
    "i18n": {
        "VIEW": "View",
        "VIEWS": "Views",
        "validate": {
            "form": {
                "SUBMIT": "Submit",
                "SENDING": "Sending..."
            },
            "name": {
                "REQUIRED": "Please enter your name",
                "MINLENGTH": "At least {0} characters required"
            },
            "email": {
                "REQUIRED": "Please enter your email",
                "EMAIL": "Please enter a valid email"
            },
            "url": {
                "REQUIRED": "Please enter your url",
                "URL": "Please enter a valid url"
            },
            "message": {
                "REQUIRED": "Please enter a message",
                "MINLENGTH": "At least {0} characters required"
            }
        },
        "tweets": {
            "failed": "Sorry, twitter is currently unavailable for this user.",
            "loading": "Loading tweets..."
        }
    },
    "url": {
        "template_directory_uri":""
    }
};

/* =========================================================
1. Main Menu
============================================================ */

Modernizr.load([{
    load: [kopa_variable.url.template_directory_uri + 'js/superfish.min.js'],
    complete: function () {        
        
        jQuery('.kopa-main-nav .sf-menu').superfish({
            speed: "fast",
            delay: "100"
        });
        
    }
}]);

if (jQuery('.kopa-main-nav-hbg').length > 0) {
    Modernizr.load([{
        load: [kopa_variable.url.template_directory_uri + 'js/superfish.min.js'],
        complete: function () {        
            
            jQuery('.kopa-main-nav-hbg .sf-menu').superfish({
                speed: "fast",
                delay: "100"
            });
            
        }
    }]);
}



/* =========================================================
2. Humberger Menu
============================================================ */

var hmWrapper = jQuery(".humberger-menu-wrapper");
var overlay = jQuery("#overlay");
var mainLogo = jQuery(".main-logo-1");
var menuIcon = jQuery("#menu-icon i")

overlay.fadeOut();

//toggle humberger menu when click on menu icon 
jQuery("#menu-icon").click(function(event){
    event.preventDefault();    
    if(hmWrapper.hasClass("show-out")) {
        hmWrapper.animate({left: "0px"}).removeClass("show-out");
        overlay.fadeIn(400);
        mainLogo.fadeOut(400);
        menuIcon.removeClass("fa-navicon").addClass("fa-times"); 
    } else {
        hmWrapper.animate({left: "-300px"}).addClass("show-out");
        overlay.fadeOut(400);
        mainLogo.fadeIn(400);
        menuIcon.removeClass("fa-times").addClass("fa-navicon");
    }    
    return false;
});

//hide the humberger menu when click on overlay
overlay.on("click", function(){
    hmWrapper.animate({left: "-300px"}).addClass("show-out");
    jQuery(this).fadeOut(400);
    mainLogo.fadeIn(400);
    menuIcon.removeClass("fa-times").addClass("fa-navicon");
    return false;
})

Modernizr.load([{
    load: ['js/jquery.navgoco.min.js'],
    complete: function () {
        jQuery('.humberger-nav').navgoco({accordion: true});
    }
}]);


/* ============================================
3. Mobile-menu
=============================================== */

Modernizr.load([{
    load: [kopa_variable.url.template_directory_uri + 'js/jquery.navgoco.min.js'],
    complete: function () {     
        var menuMobile = jQuery('.main-nav-mobile .main-menu-mobile');
        menuMobile.navgoco({accordion: true});   
        jQuery(".mobile-menu-icon").click(function(event){
            event.preventDefault();
            menuMobile.slideToggle( "slow" );
            return false;
        });
    }
}]);

var screenHeight = jQuery( window ).height();
var mmHeight = screenHeight -65;
if(jQuery(window).width() < 639) {  
    jQuery( ".main-menu-mobile" ).css("max-height", mmHeight + 'px');
}

$(window).resize(function(){
    var screenHeight = jQuery( window ).height();
    var mmHeight = screenHeight -65;
    if(jQuery(window).width() < 639) {  
        jQuery( ".main-menu-mobile" ).css("max-height", mmHeight + 'px');
    }
    return false;
}); 



/* =========================================================
4. Accordion
============================================================ */

var panel_titles = jQuery('.kopa-accordion .panel-title a');
panel_titles.addClass("collapsed");
jQuery('.panel-heading.active').find(panel_titles).removeClass("collapsed");
panel_titles.click(function(){
    jQuery(this).closest('.kopa-accordion').find('.panel-heading').removeClass('active');
    var pn_heading = jQuery(this).parents('.panel-heading');
    if (jQuery(this).hasClass('collapsed')) {
        pn_heading.addClass('active');
    } else {
        pn_heading.removeClass('active');
    }    
});


 /* =========================================================
5. Validate
============================================================ */


/* =========================================================
6. Owl Carousel
============================================================ */

// home top carousel 1
if (jQuery('.owl-home-top-carousel').length > 0) {    
    Modernizr.load([{
        load: [kopa_variable.url.template_directory_uri + 'js/owl.carousel.min.js'],
        complete: function() {
            jQuery(".owl-home-top-carousel").owlCarousel({
                items : 1,
                itemsDesktop : [1024,1], 
                itemsDesktopSmall : [979,1], 
                itemsTablet: [768,1],
                itemsMobile : [479,1], 
                lazyLoad : true,
                navigation : true,
                pagination: true,
				autoPlay : 9000,
                navigationText : false,
                slideSpeed: 1000,
                paginationSpeed: 1000,
                afterInit: function(){
                   jQuery("#kopa-header .home-top-carousel").removeClass("loading");    
                }
            });
            jQuery(".owl-home-top-carousel").find(".owl-controls").addClass("style1"); 
            jQuery('<span class="pagination-bg"></span>').prependTo(".owl-home-top-carousel .owl-pagination");           
        }
    }]);
};   

//add background to pagination when resize window
jQuery(window).resize(function(){
    setTimeout(function(){ 
        jQuery('<span class="pagination-bg"></span>').prependTo(".owl-home-top-carousel .owl-pagination");
    }, 3000);    
});

// home top carousel 2
if (jQuery('.owl-home-top-carousel-2').length > 0) {
    Modernizr.load([{
        load: [kopa_variable.url.template_directory_uri + 'js/owl.carousel.min.js'],
        complete: function() {
            jQuery(".owl-home-top-carousel-2").owlCarousel({
                items : 4,
                itemsDesktop : [1024,4], 
                itemsDesktopSmall : [979,4], 
                itemsTablet: [768,2],
                itemsMobile : [479,1], 
                lazyLoad : true,
                navigation : true,
                pagination: true,
                navigationText : false,
                slideSpeed: 1000,
                paginationSpeed: 1000,
                afterInit: function(){
                   jQuery(".kopa-header .home-top-carousel-2-wrapper").removeClass("loading");    
                }
            });            

            jQuery(".owl-home-top-carousel-2").find(".owl-controls").addClass("style1");            
            var $pagination = jQuery(".owl-home-top-carousel-2 .owl-pagination");            
            jQuery('<div class="pagination-bg"><span class="left"></span><span class="right"></span></div>').appendTo($pagination);

            //display content of item child (4n+2)
            var entryItem =jQuery(".owl-home-top-carousel-2 .entry-item")
            if (jQuery(window).width() >= 800) {
                var activeItem =jQuery(".owl-home-top-carousel-2 .owl-item:nth-child(4n+2)").find(".entry-item");           
                activeItem.addClass("active"); 
            } else if (jQuery(window).width() < 800) { 
                var activeItem =jQuery(".owl-home-top-carousel-2 .owl-item:nth-child(2n+1)").find(".entry-item");           
                activeItem.addClass("active");
            }

            //display content of item when hover on
            entryItem.on("mouseenter", function(){
                entryItem.removeClass("active");
               jQuery(this).addClass("active");
            });  

            // reset initial static when move the cursor over the carousel
           jQuery(".owl-home-top-carousel-2").on("mouseleave", function(){
                entryItem.removeClass("active");
                activeItem.addClass("active"); 
            })            
            
        }
    }]);
};   

//add background to pagination when resize window
jQuery(window).resize(function(){
    setTimeout(function(){ 
        var $pagination = jQuery(".owl-home-top-carousel-2 .owl-pagination");            
        jQuery('<div class="pagination-bg"><span class="left"></span><span class="right"></span></div>').appendTo($pagination);
    }, 3000);    
});


// kopa product list widget
if (jQuery('.owl-product-list-carousel').length > 0) {
    Modernizr.load([{
        load: [kopa_variable.url.template_directory_uri + 'js/owl.carousel.min.js'],
        complete: function() {
            jQuery(".owl-product-list-carousel").owlCarousel({
                items : 4,
                itemsDesktop : [1024,4], 
                itemsDesktopSmall : [979,4], 
                itemsTablet: [768,3],
                itemsMobile : [479,1], 
                lazyLoad : true,
                navigation : false,
                pagination: true,
                navigationText : false,
                slideSpeed: 1000,
                paginationSpeed: 1000
            });
        }
    }]);
};         

// kopa team widget
if (jQuery('.owl-team-carousel').length > 0) {
    Modernizr.load([{
        load: [kopa_variable.url.template_directory_uri + 'js/owl.carousel.min.js'],
        complete: function() {
            jQuery(".owl-team-carousel").owlCarousel({
                items : 4,
                itemsDesktop : [1024,4], 
                itemsDesktopSmall : [979,4], 
                itemsTablet: [768,2],
                itemsMobile : [479,1], 
                lazyLoad : true,
				autoPlay : 5000,
                navigation : false,
                pagination: true,
                navigationText : false,
                slideSpeed: 1000,
                paginationSpeed: 1000
            });       
        }
    }]);
};   

//kopa related post 
if (jQuery(".owl-related-posts-carousel.s-4").length > 0) {
    Modernizr.load([{
        load: [kopa_variable.url.template_directory_uri + "js/owl.carousel.min.js"],
        complete: function() {
            jQuery(".owl-related-posts-carousel.s-4").owlCarousel({
                items: 4,
                pagination: false,
                navigationText: false,
                navigation: true,
                slideSpeed: 600
            });

            jQuery(".owl-related-posts-carousel.s-4").find(".owl-controls").addClass("style6");

        }
    }]);
};  

//kopa related post 
if (jQuery(".owl-related-posts-carousel.s-3").length > 0) { 
    Modernizr.load([{
        load: [kopa_variable.url.template_directory_uri + "js/owl.carousel.min.js"],
        complete: function() {
            jQuery(".owl-related-posts-carousel.s-3").owlCarousel({
                items: 3,
                pagination: false,
                navigationText: false,
                navigation: true,
                slideSpeed: 600
            });
            jQuery(".owl-related-posts-carousel.s-3").find(".owl-controls").addClass("style6");
             
        }
    }]);
};  

//kopa related products
if (jQuery(".owl-related-products").length > 0) {
    Modernizr.load([{
        load: [kopa_variable.url.template_directory_uri + "js/owl.carousel.min.js"],
        complete: function() {
            jQuery(".owl-related-products").owlCarousel({
                items: 3,
                itemsDesktop : [1024,3], 
                itemsDesktopSmall : [979,3], 
                itemsTablet: [768,2],
                itemsMobile : [479,1], 
                pagination: false,
                navigationText: false,
                navigation: true,
                slideSpeed: 600
            });
            jQuery(".owl-related-products").find(".owl-controls").addClass("style6"); 
             
        }
    }]);
};  

// kopa mission widget  
// kopa testimonial 1 widget  
if (jQuery(".owl-single-item").length > 0) {
    Modernizr.load([{
        load: [kopa_variable.url.template_directory_uri + "js/owl.carousel.min.js"],
        complete: function() {
            jQuery('.owl-single-item').each(function(){
                var $this = jQuery(this),
                    $pagination = $this.data('pagination'),
                    $navigation = $this.data('navigation'),
                    $navText = $this.data('navtext'),
                    $autoplay = $this.data('autoplay');
                $this.owlCarousel({
                    singleItem: true,
                    pagination: $pagination,
                    navigation: $navigation,
                    navigationText: $navText,                    
                    autoPlay: $autoplay,
                    slideSpeed: 600
                });
            });            
            jQuery(".owl-mission-carousel").find(".owl-controls").addClass("style5");
        }
    }]);
};  

// kopa testimonial 2 widget    
if (jQuery(".owl-testimonial-2").length > 0) {
    Modernizr.load([{
        load: [kopa_variable.url.template_directory_uri + "js/owl.carousel.min.js"],
        complete: function() {
            jQuery(".owl-testimonial-2").owlCarousel({
                items: 3,
                itemsDesktop : [1024,3], 
                itemsDesktopSmall : [979,3], 
                itemsTablet: [768,2],
                itemsMobile : [639,1], 
                pagination: true,
                navigationText: false,
                navigation: false,
                autoPlay: false,
                slideSpeed: 1000
            });
            jQuery(".owl-testimonial-2").find(".owl-controls").addClass("style4");
        }
    }]);
}; 

//kopa related post 
if (jQuery(".owl-product-list-2").length > 0) {
    Modernizr.load([{
        load: [kopa_variable.url.template_directory_uri + "js/owl.carousel.min.js"],
        complete: function() {
            jQuery(".owl-product-list-2").owlCarousel({
                items: 4,
                pagination: false,
                navigationText: false,
                navigation: true,
                slideSpeed: 600
            });
            jQuery(".owl-product-list-2").find(".owl-controls").addClass("style3");
            
        }
    }]);
};

//kopa ads 
if (jQuery(".owl-ads-carousel").length > 0) {
    Modernizr.load([{
        load: [kopa_variable.url.template_directory_uri + "js/owl.carousel.min.js"],
        complete: function() {

            jQuery(".owl-ads-carousel").owlCarousel({
                items: 6, //5
                itemsDesktop : [1024,6], 
                itemsDesktopSmall : [979,4], 
                itemsTablet: [768,4],
                itemsMobile : [639,2], 
                pagination: false,
                navigationText: false,
                navigation: false,
                slideSpeed: 600,
                autoPlay: true
            });
            
        }
    }]);
};

//kopa related post 
if (jQuery(".owl-carousel-1").length > 0) {
    Modernizr.load([{
        load: [kopa_variable.url.template_directory_uri + "js/owl.carousel.min.js"],
        complete: function() {
            jQuery(".owl-carousel-1").each(function() {                
                var $this = jQuery(this),
                    dataItems = $this.data('items'),                    
                    dataPagination = $this.data('pagination'),
                    dataNavigation = $this.data('navigation'),
                    dataNavText = $this.data('navtext'),
                    dataSlideSpeed = $this.data('slideSpeed'),
                    dataAutoPlay = $this.data('autoplay');
                $this.owlCarousel({
                    items: dataItems, //5
                    itemsDesktop : [1024,4], 
                    itemsDesktopSmall : [979,4], 
                    itemsTablet: [768,2],
                    itemsMobile : [639,1], 
                    pagination: dataPagination, //false,
                    navigation: dataNavigation, //false,
                    navigationText: dataNavText, //false,                    
                    slideSpeed: dataSlideSpeed, //600,
                    autoPlay: dataAutoPlay //true
                });
            });    

            jQuery(".owl-product-list-3.style2").find(".owl-controls").addClass("style3");              
        }
    }]);
};

// kopa blog owl 1
if (jQuery(".owl-blog-carousel").length > 0) {
    Modernizr.load([{
        load: [kopa_variable.url.template_directory_uri + "js/owl.carousel.min.js"],
        complete: function() {
            jQuery(".owl-blog-carousel-1").owlCarousel({
                singleItem: true,
                pagination: true,
                navigationText: false,
                navigation: true,
                autoPlay: false,
                slideSpeed: 600              
            });
            jQuery(".owl-blog-carousel-1").find(".owl-controls").addClass("style7");
        }
    }]);
};  

// kopa blog owl 2
if (jQuery(".owl-blog-carousel").length > 0) {
    Modernizr.load([{
        load: [kopa_variable.url.template_directory_uri + "js/owl.carousel.min.js"],
        complete: function() {
            jQuery(".owl-blog-carousel-2").owlCarousel({
                singleItem: true,
                pagination: false,
                navigationText: false,
                navigation: true,
                autoPlay: false,
                slideSpeed: 600,
                afterInit: function(){
                   jQuery(".owl-blog-carousel-2-wrapper").removeClass("loading");    
                }
            });
            jQuery(".owl-blog-carousel-2").find(".owl-controls").addClass("style7");
        }
    }]);
};  

// kopa blog owl 3
if (jQuery(".owl-blog-carousel").length > 0) {
    Modernizr.load([{
        load: [kopa_variable.url.template_directory_uri + "js/owl.carousel.min.js"],
        complete: function() {
            jQuery(".owl-blog-carousel-3").owlCarousel({
                singleItem: true,
                pagination: true,
                navigationText: false,
                navigation: false,
                autoPlay: false,
                slideSpeed: 600
            });
            jQuery(".owl-blog-carousel-3").find(".owl-controls").addClass("style7");
        }
    }]);
};  

/* =========================================================
7. Background Video
============================================================ */

if (jQuery('.video-bg').length > 0) {
    Modernizr.load([{
        load: [kopa_variable.url.template_directory_uri + 'js/jquery.backgroundvideo.js'],
        complete: function () {
            var i = 0;
            jQuery('.video-bg').each(function(){
                i ++;                
                var $this = $(this);
                var videobg = new jQuery.backgroundVideo($this, {
                    videoid: "video_bg" + i,
                    "align": "centerXY",
                    "width": 1280, 
                    "height": 720,
                    "path": "video/",
                    "filename": "video-car",
                    "types": ["mp4"]
                });               
            });  
        }
    }]);
}; 


/* =========================================================
8. Google Map
============================================================ */

var map;

if (jQuery('.kopa-map').length > 0) {
    Modernizr.load([{
        load: [kopa_variable.url.template_directory_uri + 'js/gmaps.js'],
            complete: function () {
          var id_map = jQuery('.kopa-map').attr('id');
          var lat = parseFloat(jQuery('.kopa-map').attr('data-latitude'));
          var lng = parseFloat(jQuery('.kopa-map').attr('data-longitude'));
          var place = jQuery('.kopa-map').attr('data-place');

      map = new GMaps({
          el: '#'+id_map,
          lat: lat,
          lng: lng,
          zoomControl : true,
          zoomControlOpt: {
              style : 'SMALL',
              position: 'TOP_LEFT'
          },
          panControl : false,
          streetViewControl : false,
          mapTypeControl: false,
          overviewMapControl: false
        });
        map.addMarker({
          lat: lat,
            lng: lng,
          title: place
        });
        }
    }]);
};


/* =========================================================
9. Search Box
============================================================ */

if (jQuery('#sb-search').length > 0) {
    Modernizr.load([{
        load: [kopa_variable.url.template_directory_uri + 'js/uisearch.js', kopa_variable.url.template_directory_uri + 'js/classie.js'],
        complete: function() {
            new UISearch(document.getElementById('sb-search'));
        }
    }]);
};


/* =========================================================
10. Sync owl carousel
============================================================ */
 
if (jQuery('.kopa-sync-portfolio-widget').length > 0) {
    Modernizr.load([{
        load: [kopa_variable.url.template_directory_uri + 'js/owl.carousel.min.js'],
        complete: function() {
            var sync3 = jQuery(".kopa-sync-portfolio-widget .sync3");
            var sync4 = jQuery(".kopa-sync-portfolio-widget .sync4");

            sync3.owlCarousel({
                singleItem: true,
                slideSpeed: 1000,
                navigation: true,
                navigationText: false,
                pagination: false,
                afterAction: syncPosition,
                responsiveRefreshRate: 200,
                afterInit: function(){
                   jQuery(".kopa-sync-portfolio-widget .loading").hide();    
                }
            });
            sync3.find(".owl-controls").addClass("style7");


            sync4.owlCarousel({
                items: 6,
                itemsDesktop: [1160,6],
                itemsDesktopSmall : [979,6],
                itemsTablet : [799,6],
                itemsMobile : [479,3],
                pagination: false,
                navigation: true,
                navigationText: false,
                responsiveRefreshRate: 100,
                addClassActive: true,
                afterAction: function(){
                    jQuery(".sync4-center").removeClass("sync4-center");
                    sync4.find(".active").eq(2).addClass("sync4-center");
                },
                afterInit: function(el) {
                    el.find(".owl-item").eq(0).addClass("synced");
                }
            });
            //sync4.find(".owl-controls").addClass("style8");

            function syncPosition(el) {
                var current = this.currentItem;
                jQuery(".sync4").find(".owl-item").removeClass("synced").eq(current).addClass("synced")
                if (jQuery(".sync4").data("owlCarousel") !== undefined) {
                    center(current)
                }
            }

            jQuery(".sync4").on("click", ".owl-item", function(e) {
                e.preventDefault();
                var number = jQuery(this).data("owlItem");
                sync3.trigger("owl.goTo", number);
            });
            sync4.find(".owl-controls").addClass("style9");

            function center(number){
                
                var sync4visible = sync4.data("owlCarousel").owl.visibleItems;
                var num = number;
                var found = false;
                for(var i in sync4visible){
                  if(num === sync4visible[i]){
                    var found = true;
                  }
                }
             
                if(found===false){
                    if (undefined != sync4visible){
                        if(num > sync4visible[sync4visible.length-1]){
                            sync4.trigger("owl.goTo", num - sync4visible.length+2)
                        }else{
                            if(num - 1 === -1){
                                num = 0;
                            }
                            sync4.trigger("owl.goTo", num);
                        } 
                    }
                } else if(num === sync4visible[sync4visible.length-1]){
                    sync4.trigger("owl.goTo", sync4visible[1])
                } else if(num === sync4visible[0]){
                    sync4.trigger("owl.goTo", num-1)
                }
                
            }
        }
    }]);
    
};
    

/* =========================================================
11. Filter Wookmark
============================================================ */

//Portfolio 2
if (jQuery('.kopa-portfolio-2-widget').length > 0) {
    Modernizr.load([{
        load: [kopa_variable.url.template_directory_uri + 'js/imagesloaded.js', kopa_variable.url.template_directory_uri + 'js/jquery.wookmark.js', kopa_variable.url.template_directory_uri + 'js/jquery.colorbox-min.js'],
        complete: function () {

            jQuery('.kopa-portfolio-2-widget').each(function(){

                var $this = jQuery(this);

                $this.find('.portfolio-list-item').imagesLoaded(function() {
                    // Prepare layout options.
                    var options = {
                      autoResize: true, // This will auto-update the layout when the browser window is resized.
                      container: $this.find('.portfolio-container'), // Optional, used for some extra CSS styling
                      offset: 0, // Optional, the distance between grid items
                      fillEmptySpace: true // Optional, fill the bottom of each column with widths of flexible height
                    };

                    // Get a reference to your grid items.
                    var handler = $this.find('.portfolio-list-item li'),
                        filters = $this.find('.filters-options li');

                    // Call the layout function.
                    handler.wookmark(options);

                    /**
                     * When a filter is clicked, toggle it's active state and refresh.
                     */
                    var onClickFilter = function(event) {
                      var item = jQuery(event.currentTarget),
                          activeFilters = [];

                      if (!item.hasClass('active')) {
                        filters.removeClass('active');
                      }
                      item.toggleClass('active');

                      // Filter by the currently selected filter
                      if (item.hasClass('active')) {
                        activeFilters.push(item.data('filter'));
                      }

                      handler.wookmarkInstance.filter(activeFilters);
                    }

                    // Capture filter click events.
                    filters.on("click", onClickFilter);
                });

                jQuery(".popup-icon").colorbox({
                    rel:'group4', 
                    transition:"fade"
                });   
            });

        }
    }]);

};

//Home 2 Filter - Best Seller
if (jQuery('.kopa-product-list-4-widget').length > 0) {

    Modernizr.load([{
        load: [ kopa_variable.url.template_directory_uri + 'js/imagesloaded.js', kopa_variable.url.template_directory_uri + 'js/jquery.wookmark.js'],
        complete: function () {

            jQuery('.kopa-product-list-4-widget').each(function(){

                var $this = jQuery(this);

                $this.find('.product-list-item').imagesLoaded(function() {
                // Prepare layout options.
                    var options = {
                      autoResize: true, // This will auto-update the layout when the browser window is resized.
                      container: $this.find('.product-container'), // Optional, used for some extra CSS styling
                      offset: 0, // Optional, the distance between grid items
                      fillEmptySpace: true // Optional, fill the bottom of each column with widths of flexible height
                    };

                    // Get a reference to your grid items.
                    var handler = $this.find('.product-list-item li'),
                        filters = $this.find('.filters-options li');

                    // Call the layout function.
                    handler.wookmark(options);

                    /**
                     * When a filter is clicked, toggle it's active state and refresh.
                     */
                    var onClickFilter = function(event) {
                      var item = $(event.currentTarget),
                          activeFilters = [];

                      if (!item.hasClass('active')) {
                        filters.removeClass('active');
                      }
                      item.toggleClass('active');

                      // Filter by the currently selected filter
                      if (item.hasClass('active')) {
                        activeFilters.push(item.data('filter'));
                      }

                      handler.wookmarkInstance.filter(activeFilters);
                    }

                    // Capture filter click events.
                    filters.on("click", onClickFilter);
                });

            })            

        }
    }]);

};


 /* =========================================================
12. Filter Masonry
============================================================ */

//Home 1 Portfolio   
if (jQuery('.kopa-portfolio-widget').length > 0) {
    Modernizr.load([{
        load: [kopa_variable.url.template_directory_uri + 'js/imagesloaded.pkgd.min.js', kopa_variable.url.template_directory_uri + 'js/jquery.masonry.min.js', kopa_variable.url.template_directory_uri + 'js/filtermasonry.js', kopa_variable.url.template_directory_uri + 'js/jquery.colorbox-min.js'],
        complete: function() {

            jQuery('.kopa-portfolio-widget').each(function(){

                var $this = jQuery(this);

                var $container_filter = $this.find('.portfolio-container');                

                $container_filter.multipleFilterMasonry({
                    gutterWidth: 5,
                    columnWidth: 1,
                    itemSelector: '.element',
                    filtersGroupSelector:'.filters'
                });

                $this.find('.filter-options li label').click(function(){  
                    $this.find('.filter-options li label').removeClass('active');
                    jQuery(this).addClass('active');                    
                });

                // jQuery(".popup-icon").colorbox({
                //     rel:'group8', 
                //     transition:"fade"
                // });  

                return false;

            })
               
        }
    }]);    
};

if (jQuery(".kopa-portfolio-widget").length > 0) {
    Modernizr.load([{
        load: [kopa_variable.url.template_directory_uri + "js/jquery.colorbox-min.js"],
        complete: function() {         

            jQuery(".popup-icon").colorbox({
                rel:'group8', 
                transition:"fade"
            });    
        }
    }]);
};  


/* =========================================================
13. Masonry
============================================================ */

// Blog 2 Masonry
if (jQuery('.kopa-entry-list.style2').length > 0) {
    if (jQuery(".video-wrapper").length > 0) {

        Modernizr.load([{
            load: [kopa_variable.url.template_directory_uri + 'js/fitvids.js', kopa_variable.url.template_directory_uri + 'js/jquery.masonry.min.js'],
            complete: function() {
                jQuery(".video-wrapper").fitVids();

                var container = document.querySelector('.wrap-masonry');
                var msnry = new Masonry( container, {
                  // options
                  columnWidth: 0,
                  itemSelector: '.masonry-item'
                });
            }
        }]);    

    } else {
        Modernizr.load([{
            load: [kopa_variable.url.template_directory_uri + 'js/jquery.masonry.min.js'],
            complete: function() {

                var container = document.querySelector('.wrap-masonry');
                var msnry = new Masonry( container, {
                  // options
                  columnWidth: 0,
                  itemSelector: '.masonry-item'
                });
            }
        }]);    
    }    
};


/* =========================================================
14. Color box
============================================================ */

if (jQuery(".owl-related-posts-carousel").length > 0) {
    Modernizr.load([{
        load: [kopa_variable.url.template_directory_uri + "js/jquery.colorbox-min.js"],
        complete: function() {         

            jQuery(".popup-icon").colorbox({
                rel:'group1', 
                transition:"fade"
            });    
        }
    }]);
};  

/* =========================================================
15. Flickr
============================================================ */

if (jQuery('.kopa-flickr-widget').length > 0) {
    Modernizr.load([{
        load: [kopa_variable.url.template_directory_uri + 'js/jflickrfeed.js', kopa_variable.url.template_directory_uri + 'js/imgliquid.js'],
        complete: function () {
            jQuery('.flickr-wrap ul').jflickrfeed({
                limit: 6,
                qstrings: {
                    id: '78715597@N07'
                },
                itemTemplate: 
                    '<li class="flickr-badge-image">' +
                    '<a target="blank" href="{{link-icon}}" title="{{title}}" class="imgLiquid">' +
                    '<img src="{{image_s}}" alt="{{title}}" />' +
                    '</a>' +
                    '</li>'
            }, function (data) {
                jQuery('.flickr-wrap .imgLiquid').imgLiquid();
            });
        }
    }]);
}   

/* ============================================
16. Single-author-Filter
=============================================== */

jQuery('.social-filter > div span').click(function () {
    if (jQuery(".social-filter ul").is(":hidden")) {
        jQuery(".social-filter ul").slideDown("slow");
    } else {
        jQuery(".social-filter ul").slideUp();
    }
});

/* ============================================
17. Match height
=============================================== */

if (jQuery('.products').length > 0) {
    
    Modernizr.load([{
        load: [kopa_variable.url.template_directory_uri + 'js/jquery.matchHeight-min.js'],
        complete: function () {

            var item_1 = $('.products');
            
            item_1.each(function() {
                $(this).children('li').children('a').matchHeight();
            });
        }
    }]);

};


if (jQuery('.owl-product-list-3').length > 0) {
    
    Modernizr.load([{
        load: [kopa_variable.url.template_directory_uri + 'js/jquery.matchHeight-min.js'],
        complete: function () {

            var item_2 = jQuery('.owl-product-list-3');
            
            item_2.each(function() {
                $(this).find('.product').children('.product-info').matchHeight();
            });
        }
    }]);

};

if (jQuery('.owl-related-products').length > 0) {
    
    Modernizr.load([{
        load: [kopa_variable.url.template_directory_uri + 'js/jquery.matchHeight-min.js'],
        complete: function () {

            var item_3 = jQuery('.owl-related-products');
            
            item_3.each(function() {
                $(this).find('.product').children('.product-info').matchHeight();
            });
        }
    }]);

};

/* =========================================================
18. Fit Video
============================================================ */ 

if (jQuery(".video-wrapper").length > 0) {
    Modernizr.load([{
        load: [kopa_variable.url.template_directory_uri + 'js/fitvids.js'],
        complete: function() {
            jQuery(".video-wrapper").fitVids();
        }
    }]);
};
   

/* =========================================================
19. Scroll to top
============================================================ */

jQuery('.back-to-top').click(function (event) {
    event.preventDefault();
    jQuery('body,html').animate({
        scrollTop: 0
    }, 800);    
    return false;
})

/* =========================================================
20. set User Agent
============================================================ */

var doc = document.documentElement;
doc.setAttribute('data-useragent', navigator.userAgent);

/* =========================================================
21. Custom Scroll Bar
============================================================ */ 

if (jQuery("#humberger-menu .humberger-nav").length > 0) {
    Modernizr.load([{
        load: [kopa_variable.url.template_directory_uri + 'js/jquery.mCustomScrollbar.min.js'],
        complete: function() {
            jQuery(".humberger-menu-wrapper").mCustomScrollbar();
        }
    }]);
};


});



jQuery(document).ready(function(e) {
    jQuery(".brandsTab header").hide();
	 jQuery(".brandsTab header:first-child").show();
		jQuery(".portfolio-container li").not(".no_hover").hover(function() {
			var getData = jQuery(this).attr("get-data");
			jQuery(".brandsTab header:visible").hide();
			jQuery("#"+getData).show();
			
		});

// VIDEO
jQuery(".play-button").on("click",function() { 
	jQuery(".videoCover").slideUp();
  autoPlayVideo('_0BdmKEedyA','100%','400');
 });

     function autoPlayVideo(vcode, width, height){
  "use strict";
  $("#videoContainer").html('<iframe width="'+width+'" height="'+height+'" src="https://www.youtube.com/embed/'+vcode+'?autoplay=1&loop=1&rel=0&wmode=transparent&ampmodestbranding=1;autohide=1&amp;showinfo=0&amp;controls=0" frameborder="0" allowfullscreen wmode="Opaque"></iframe>');
} 
 // VIDEO END


setTimeout(function(){ 

jQuery(".brandName").animate({"left":"0"},800);
jQuery(".logobase").animate({"right":"0"}, 800);
  }, 300);

setTimeout(function(){ 
jQuery( ".stars.animatedStar li" ).last().fadeIn( 80, function showPrev() {
    jQuery( this ).prev( "li" ).fadeIn( 80, showPrev );
  });

jQuery(".IntroLogo").delay(2500).animate({"margin-left":"140px", "margin-top":"25px"}, 500);
}, 1100);
setTimeout(function(){$(".enterWebsite").fadeIn("slow");}, 6100);
setTimeout(function(){$(".stars.nomovments, .stars li").fadeIn("slow");}, 4500);
$(".enterWebsite").click(function() {
	$(".intro").slideUp("slow");
	$("body").removeClass("fixed");
});
 
 
 var count = 0;
setInterval(function() {
    count = ($(".stars.animatedStar :nth-child("+count+")").not("p").removeClass("bigstar").next().length == 0) ? 1 : count+1;
    $(".stars.animatedStar :nth-child("+count+")").not("p").addClass("bigstar");
}, 4600);

var imgwidth = $(window).width();
$(".IntroLogo .stars li > img").css({"width":imgwidth, "max-width":imgwidth, "margin-left":-imgwidth/2, "left":"49%"});


 var countasdasd = 0;
setTimeout(function(){ 
jQuery(".bgintro").addClass("fullbigstar_"+countasdasd);
}, 4600);

 
    var loops = 3 * 2;
    function removeAddClass() {
	 $(".bgintro").attr("class", "bgintro intro");
        $(".bgintro").addClass("bgintro fullbigstar_"+countasdasd++);
        if (--loops > 0)
             setTimeout(removeAddClass, 4600);
    }
    removeAddClass();
 


/* var introbg = 0;
setInterval(function() {
    introbg = ($(".IntroLogo ul").removeClass("stars fullbigstar").next().length == 0) ? 1 : introbg+1;
    $(".IntroLogo ul").addClass("stars fullbigstar");
}, 4600);*/

setTimeout(function(){ 
 $('.introTitle').animate({"left":"0"}).fadeIn();
 }, 3100);

$(".filterWrapper a").on("click", function() {

if($(this).next(".filters-options").hasClass("activeFilter")) {
$(this).next(".filters-options").removeClass("activeFilter").slideUp();
}else{
 $(".filters-options.activeFilter:visible").removeClass("activeFilter").slideUp();
$(this).next(".filters-options").addClass("activeFilter").slideDown();
}
});
$(".filterWrapper .filters-options li").on("click", function() {$(".filters-options:visible").slideUp();});

});
 



$(".brandsLogo").hover(function() {
	$(this).closest(".brandsLogos").find(".brandsLogo").addClass("fadeout");
	$(this).removeClass("fadeout").addClass("hover");
},function() {
	$(".brandsLogo").removeClass("fadeout");
	$(this).removeClass("hover");
});




 var nav = $('.floating_tringle');
    $(window).scroll(function () {

        /*if ($(this).scrollTop() > $(window).height() ) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }*/

        $('.businesses .kopa-breadcrumb.imageBreadcrumb').each(function () {
			    	 

		 	var getabg = $(this).attr("data-bg");  
			var liNUmb = $(this).index(); 
			var tabsPostionTop = $(this).attr("data-postionTop");
			var dataTabMargin = $(this).attr("data-margin");  
			 var positionsofelem = $(this).position(); 
		//	$(this).find(".horizontal_listing").css({"top": positionsofelem.top, "left": positionsofelem.left});
 		if ($(window).scrollTop() > $(this).position().top-130) {
		$(this).closest(".businesses").css("background-color", getabg);
 		
 			//  $(".floating_tringle").attr("id", "float"+getaId);	
             }else {
 $(this).find(".page-title").attr("style","");
 
}

if ($(window).scrollTop() > $(this).position().top-130) {
var i = 0;
i++; 
			if($('.businesses .kopa-breadcrumb.imageBreadcrumb').eq(i)) {  
//$(".horizontal_listing.activedetails" ).fadeOut();
$( ".horizontal_listing.activedetails" ).removeClass("activedetails");
  $(this).find( ".horizontal_listing" ).css({"top":tabsPostionTop+"px", "margin":dataTabMargin}).addClass("activedetails");

// $(this).find( ".horizontal_listing" ).fadeIn();

} 






 $(this).find(".page-title").css({"left":"0"});
			  $(this).find( ".horizontal_listing li" ).first().show( "fast", function showNext() {
   				 $( this ).next( ".horizontal_listing li" ).show( "fast", showNext );
		 	 });
}  


        });
    });

//tabs
$(document).ready(function(e) {
    $(".tabbtn").on("click",function() {
if($(this).hasClass("closebtn")) {
 	$(this).next(".closetabmenu").show();
	$(this).hide();
}
if($(this).hasClass("backbtn")) {
 	$(this).prev(".closebtn").show();
	$(this).hide();
}

		var getlink = $(this).attr("data-link");
 		$(".tabcontent:visible").slideUp();
		$("."+getlink).slideDown();
		 
});
});


$(document).ready(function(e) {
if (screen.width < 500) { 	
		$('.kopa-logo').find('a').removeAttr("href");
 };
 
 });
 


 
 var ua = navigator.userAgent.toLowerCase();
 
var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
 if(isAndroid) { $("html").addClass("android"); }

var isiPhone = navigator.userAgent.toLowerCase().indexOf("iphone");
  var isiPad = navigator.userAgent.toLowerCase().indexOf("ipad");
  var isiPod = navigator.userAgent.toLowerCase().indexOf("ipod");

  if(isiPhone > -1)
  {
     $("html").addClass("iphone");
  }
  if(isiPad > -1)
  {
      $("html").addClass("ipad");
  }
  if(isiPod > -1)
  {
      $("html").addClass("ipod");
  }