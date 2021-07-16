(function ($, window) {
 
    var App = App || {
        init: function () {
            $('.js-toggle-search').on('click', function () {
                $('.js-search').toggleClass('is-visible');
            });
 
            $('.js-next a').on('click', function (e) {
                $(infinite_scroll.contentSelector).infinitescroll(infinite_scroll);
 
                var $body = $('body');
 
                $body.scrollTop($body.scrollTop() - 1);
 
                e.preventDefault();
            })
 
            $(window).keydown(function (event) {
                if (event.keyCode == 27) {
                    if ($('.js-search').attr('class').indexOf('is-visible') > 0) {
                        $('.js-search').removeClass('is-visible');
                    }
                }
            });
 
            $('.js-search .text-input').keydown(function (event) {
                if (event.keyCode == 13) {
                    location.href = 'https://www.google.com/search?q=site:yumemor.com ' + $(this).val();
                    return false;
                }
            })
        }
    };
 

    $(App.init);

    $(function(){
 
        var navToggle = $('#nav-toggle'),
            nav = $('nav'),
            navLinks = nav.find('a');
 
        navToggle.on('click', function () {
            navToggle.toggleClass('active');
            nav.toggleClass('open');
            return false;
        });
        navLinks.on('click', function () {
            navToggle.toggleClass('active');
            nav.toggleClass('open');
        });
 
        $(document).on('click', function () {
            if (nav.hasClass('open')) {
                navToggle.toggleClass('active');
                nav.toggleClass('open');
            }
        });
 
        $('.btn-slide').click(function () {
            $('#panel').slideToggle("slow");
            $(this).toggleClass("active");
            return false;
        });
 
        $(window).scroll(function () {
            var header = $('header');
 
            if ($(this).scrollTop() > 1) {
                header.addClass("scrolled");
            } else {
                header.removeClass("scrolled");
            }
        });
 
        $("#social-share").click(function () {
            $("#social").toggleClass("visible").slideToggle(200);
        });
 
        if ($('.welcome')[0]) {
            $('.author-info').hide();
            $('span.info-edit').click(function () {
                $('.author-info').toggle();
            });
        }

        var bannerNode = $('.top-image');
        if(bannerNode.data('enable')){
            var index = parseInt((Math.random() * 4) + 1);
			var sUserAgent = navigator.userAgent.toLowerCase();
            var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
            var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
            var bIsMidp = sUserAgent.match(/midp/i) == "midp";
            var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
            var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
            var bIsAndroid = sUserAgent.match(/android/i) == "android";
            var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
            var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
			if (!(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) ){
          bannerNode.attr('style','background-image:url(https://cdn.jsdelivr.net/gh/zhangxiaolongsima/zhangxiaolongsima.github.io/banner/1.jpg)');
        }else{
		  bannerNode.attr('style','background-image:url(https://cdn.jsdelivr.net/gh/zhangxiaolongsima/zhangxiaolongsima.github.io/banner/2.jpg)');
		}
        }
    })

}(jQuery, window));