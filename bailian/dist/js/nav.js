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

    $(".header .connter .header_right .search_top .pay").mouseenter(function () {
        //	弹出下拉菜单
        $(".header .connter .header_right .search_top .pay a").css("border", "1px solid red");
        $(".header .connter .header_right .search_top .pay a").css("color", "red");
        // $(".header .connter .header_right .search_top .pay a i").animate({
        //     height: "300px"
        // });

    }).mouseleave(function () {
        $(".header .connter .header_right .search_top .pay a").css("border", "1px solid black");
        $(".header .connter .header_right .search_top .pay a").css("color", "#666");
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

}