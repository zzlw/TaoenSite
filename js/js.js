$(function(){

//console.log(document.documentElement.clientWidth);
///console.log(window.innerWidth);

/*轮播图开始*/
var a = 0;
var Time;

function imgCha(){
	var bgc = $("#big .con .pic a").eq(a).attr("bgc");
	$("#big").css("background",bgc);
	$("#big .con .pic a").eq(a).stop(true).fadeIn(200).siblings().hide();
	$("#big .con .list li").eq(a).addClass("hov").siblings().removeClass("hov");
};

$("#big .con .list li").hover(function(){a = $(this).index();imgCha();});
$("#big .con .but .right").click(function(){(a<2)?(a++):(a=0);imgCha();});
$("#big .con .but .left").click(function(){(a>0)?(a--):(a=2);imgCha();});

function auto(){
	Time = setInterval(function(){
		(a<2)?(a++):(a=0);imgCha();
	},4000);
};
auto();
$("#big .con").hover(function(){clearInterval(Time)},function(){auto()});

var b = 0;
var Time1;

function imgCha1(){
	var bgc = $("#info .con .pic a").eq(b).attr("bgc");
	$("#info").css("background",bgc);
	$("#info .con .pic a").eq(b).stop(true).fadeIn(200).siblings().hide();
	$("#info .con .list li").eq(b).addClass("hov").siblings().removeClass("hov");
};

$("#info .con .list li").hover(function(){b = $(this).index();imgCha1();});
$("#info .con .but .right").click(function(){(b<1)?(b++):(b=0);imgCha1();});
$("#info .con .but .left").click(function(){(b>0)?(b--):(b=1);imgCha1();});

function auto1(){
	Time1 = setInterval(function(){
		(b<1)?(b++):(b=0);imgCha1();
	},3000);
};
auto1();
$("#info .con").hover(function(){clearInterval(Time1)},function(){auto1()});
/*播图结束*/


/*平滑锚链接开始*/
$(function(){   
		$('a[href*=#],area[href*=#]').click(function() {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var $target = $(this.hash);
				$target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
				if ($target.length) {
					var targetOffset = $target.offset().top;
					$('html,body').animate({
						scrollTop: targetOffset
					},
					1000);
					return false;
				}
			}
		});
	})
/*平滑锚链接结束*/

/*封装鼠标滚动距离方法开始*/
function getScrollTop() {  
        var scrollPos;  
        if (window.pageYOffset) {  
        scrollPos = window.pageYOffset; }  
        else if (document.compatMode && document.compatMode != 'BackCompat')  
        { scrollPos = document.documentElement.scrollTop; }  
        else if (document.body) { scrollPos = document.body.scrollTop; }   
        return scrollPos;   
}
/*封装鼠标滚动距离方法结束*/

/*固定adv开始*/
window.onmousewheel=asd;

function asd() { 
var dis= getScrollTop();
  if(dis>152){

  	$("#Head .content").css({"display":"none","padding-top":"0"});
  	$("#Head").css({"position":"fixed","top":"0","left":"0","z-index":"10","background":"#403e3f"});
  }
  else{
  	$("#Head").removeAttr("style");
  	$("#Head .content").css({"padding-top":"30px","display":"block"});
  	$("#Head").css({"width":"100%","background-color":"#403e3f","background-image":"url(../img/top-bj.png) no-repeat center"});
  }
}
/*固定adv结束*/

/*下拉菜单开始*/
	$("#Head .adv .con .list .one").hover(function(){
		$("#Head .adv .con .pos").css({"height":"200","opacity":"0.9"});
		
		$("#Head .adv .con .list .one").mouseleave(function(){
			$("#Head .adv .con .pos").css({"height":"0","opacity":"0"});
		});
		
	});
	
/*下拉菜单结束*/


/*恢复开始*/
	$("#fixed .content .L4 a").click(function(){ 
	  	$("#Head").removeAttr("style");
	  	$("#Head .content").css({"padding-top":"30px","display":"block"});
	  	$("#Head").css({"width":"100%","background-color":"#403e3f","background-image":"url(../img/top-bj.png) no-repeat center"});
	})
/*恢复结束*/

});