//var timer;
//		timer=setTimeout(function(){
//			$("#read img").eq(3).css({"opacity":0});
//			setTimeout(function(){
//			     $("#read img").eq(2).css({"opacity":0});
//			},1000);
//		},1000)
		 var swiper = new Swiper('.swiper-container', {
		      direction: 'vertical',
		      loop: true,
		      pagination: '.swiper-pagination',
		      paginationClickable: true,
		      mousewheelControl: true,
		      onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
		        swiperAnimateCache(swiper); //隐藏动画元素
		        swiperAnimate(swiper); //初始化完成开始动画
		      },
		      onSlideChangeEnd: function(swiper){
		        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
		      }
		   }); 
//		    var stop=document.querySelectorAll("#music");
//		    var oaudio=document.querySelector("audio");
//		    console.log(stop[0])
//		    console.log(oaudio)
//		    stop[0].addEventListener("click",function(){
//		    	console.log(1)
//		    	oaudio.pause();
//		    	
//		    })
