window.onload = function () {
    $(".tool_nav").mouseenter(function () {
        //	弹出下拉菜单
        $(".tn_show").stop().slideDown(68);
        $(this).css("background", "#FFFFFF");
        $(".tool_nav a span").css("color", "red");
        $(".tool_nav a i").animate({
            height: "300px"
        });

    }).mouseleave(function () {
        $(".tn_show").stop().slideUp(68);
        setTimeout(function () {
            $(".tool_nav").css("background", "#F7F7F7");
            $(".tool_nav a span").css("color", "#666");
            $(".tool_nav a i").css("background-position", "0 0");
        }, 200);
    });
    $(".tool_right .my_li").mouseenter(function () {
        //	弹出下拉菜单
        $(".tool_my").stop().slideDown(110);
        $(this).css("background", "#FFFFFF");
        $(".tool_right .my_li a span").css("color", "red");
        $(".tool_right .my_li a i").animate({
            height: "300px"
        });

    }).mouseleave(function () {
        $(".tool_my").stop().slideUp(110);
        setTimeout(function () {
            $(".tool_right .my_li").css("background", "#F7F7F7");
            $(".tool_right .my_li a span").css("color", "#666");
            $(".tool_right .my_li a i").css("background-position", "0 0");
        }, 200);
    });

    $(".tool_right .tool_pay").mouseenter(function () {
        //	弹出下拉菜单
        $(".payment").stop().slideDown(110);
        $(this).css("background", "#FFFFFF");
        $(".tool_right .tool_pay a span").css("color", "red");
        $(".tool_right .tool_pay a i").animate({
            height: "300px"
        });

    }).mouseleave(function () {
        $(".payment").stop().slideUp(110);
        setTimeout(function () {
            $(".tool_right .tool_pay").css("background", "#F7F7F7");
            $(".tool_right .tool_pay a span").css("color", "#666");
            $(".tool_right .tool_pay a i").css("background-position", "0 0");
        }, 200);
    });

    $(".tool_right .service").mouseenter(function () {
        //	弹出下拉菜单
        $(".service_div").stop().slideDown(110);
        $(this).css("background", "#FFFFFF");
        $(".tool_right .service a span").css("color", "red");
        $(".tool_right .service a i").animate({
            height: "300px"
        });

    }).mouseleave(function () {
        $(".service_div").stop().slideUp(110);
        setTimeout(function () {
            $(".tool_right .service").css("background", "#F7F7F7");
            $(".tool_right .service a span").css("color", "#666");
            $(".tool_right .service a i").css("background-position", "0 0");
        }, 200);
    });
    // $(".tool_right ul li").mouseenter(function () {
    //     $(this).css("background", "#FFFFFF");
    //     $(this).css("color", "red");

    // }).mouseleave(function () {
    //         $(".tool_right ul li").css("background", "#F7F7F7");            
    // });

    $(".header .connter .header_right .search_top .pay").mouseenter(function () {
        //	弹出下拉菜单
        $(".header .connter .header_right .search_top .pay a").css("border", "1px solid red");
        $(".header .connter .header_right .search_top .pay a").css("color", "red");
    }).mouseleave(function () {
        $(".header .connter .header_right .search_top .pay a").css("border", "1px solid black");
        $(".header .connter .header_right .search_top .pay a").css("color", "#666");
    });
// 侧边栏
    $(".nav .connter .nav_left .show_nav ul .show_li").mouseenter(function () {
        $(this).css("background","#999");
        $(".nav .connter .nav_left .show_nav ul .show_li .xiangqing").css("display", "block");
    }).mouseleave(function () {
        $(".nav .connter .nav_left .show_nav ul .show_li .xiangqing").css("display", "none");
        $(".nav .connter .nav_left .show_nav ul .show_li").css("background","rgb(70, 67, 67)");
        
    });


    $(".right_slidebar .right_slidebar_main .main_top .sidecss").mouseenter(function () {
        //	弹出下拉菜单
        $(".right_slidebar .right_slidebar_main .main_top .sidecss").css("background", "red");
        $(".right_slidebar .right_slidebar_main .main_top .sidecss .news").stop().slideDown(110);
        

    }).mouseleave(function () {
        $(".right_slidebar .right_slidebar_main .main_top .sidecss").css("background", "black");
        $(".right_slidebar .right_slidebar_main .main_top .sidecss .news").css("display","none");
    });

    $(".right_slidebar .right_slidebar_main .shopcar").mouseenter(function () {
        $(".right_slidebar .right_slidebar_main .shopcar").css("background", "red");
    }).mouseleave(function () {
        $(".right_slidebar .right_slidebar_main .shopcar").css("background", "black");
    });

    $(".right_slidebar .right_slidebar_main .shopcar").click(function () {
        $(".right_slidebar .right_slidebar_main .shopcar").css("background", "red");
        $(".right_slidebar").css("right", "0");
    })
    $(".right_slidebar .right_slidebar_detail .shopcar-detail-h .sidebar-closed").click(function () {
        $(".right_slidebar .right_slidebar_main .shopcar").css("background", "black");
        $(".right_slidebar").css("right", "-276px");
    })

    $.ajax({
        url:"./data/data.json",
        success: function (arr) {
            var str=``;
            for (var i = 0; i < arr.length; i++) {
                // console.log(arr);
                str +=`<li class="guess_show">
                <div class="guess_pic">
                    <a href="details.html">
                        <img src="${arr[i].img}" alt="">
                    </a>
                </div>
                <div class="guess_name">
                    <a href="details.html" target="_blank"
                        title="${arr[i].title}">
                        ${arr[i].title}</a>
                </div>
                <div class="guess_money">
                    <div class="guess_money_main">
                        ￥<span>${arr[i].price}</span>
                        <a href="#">收藏</a>
                    </div>

                </div>
            </li>`
            }
            $(".guess .connter .guess_body ul").html(str);
        },
        error: function (msg) {
          console.log(msg);
        }
    })

    //当前图片
var index=0;
//下张显示图片
var nextIndex=0;
//计时器
var timer;
autoPlay();
//叠化
function animationPlay(){
	$(".banner .connter .rotationbox img").eq(index).stop().fadeOut(500);
	$(".banner .connter .rotationbox img").eq(nextIndex).stop().fadeIn();
	$(".banner .connter .rotationbox ul li").eq(nextIndex).addClass("ListOne").siblings().removeClass();
}
function autoPlay(){
	timer=setInterval(function(){
		if (nextIndex>=4) {
			nextIndex=0;
		} else{
			nextIndex++;
		}
		//	调用
		animationPlay();
	
		index=nextIndex;
	},3000);

}

$(".banner .connter .rotationbox ul li").mouseenter(function(){
	clearInterval(timer);
	nextIndex=$(this).index();
	animationPlay();
	index=nextIndex;
}).mouseleave(function(){
	autoPlay();
});
//箭头
$(".banner .connter .rotationbox .rightBtn").click(function(){
	if (nextIndex>=4) {
			nextIndex=0;
		} else{
			nextIndex++;
		}
		//	调用
		animationPlay();
	
		index=nextIndex;
		clearInterval(timer);
		autoPlay();
});
$(".banner .connter .rotationbox .leftBtn").click(function(){
	if (nextIndex<=0) {
			nextIndex=4;
		} else{
			nextIndex--;
		}
		//	调用
		animationPlay();
	
		index=nextIndex;
		clearInterval(timer);
		autoPlay();
});
var oCenter = document.getElementById("over_ul");
var left = document.getElementById("left");
var right = document.getElementById("right");
left.onclick = function () {
    oCenter.style.left = "-966px";
}
right.onclick = function () {
    oCenter.style.left = "0px";
}

}