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
        $(".right_slidebar .right_slidebar_main .main_top .sidecss .news").css("display", "none");
    });

    // $(".right_slidebar .right_slidebar_main .shopcar").mouseenter(function () {
    //     $(".right_slidebar .right_slidebar_main .shopcar").css("background", "red");
    //     $(".right_slidebar").css("right","0");
    // }).mouseleave(function () {
    //     $(".right_slidebar .right_slidebar_main .shopcar").css("background", "black");
    // });
    $(".right_slidebar .right_slidebar_main .shopcar").click(function () {
        $(".right_slidebar .right_slidebar_main .shopcar").css("background", "red");
        $(".right_slidebar").css("right", "0");
    })
    $(".right_slidebar .right_slidebar_detail .shopcar-detail-h .sidebar-closed").click(function () {
        $(".right_slidebar .right_slidebar_main .shopcar").css("background", "black");
        $(".right_slidebar").css("right", "-276px");
    })




    sc_msg();
    sc_num();
    prices();
    $.ajax({
        url: "../data/over.json",
        success: function (arr) {
            var str = ``;
            for (var i = 0; i < arr.length; i++) {
                // console.log(arr);
                str += `<li>
                        <div class="brand-main-img">
                            <img src="${arr[i].img}" alt="" srcset="">
                        </div>
                        <div class="brand-main-list-right">
                            <a href="#"  target="_blank"
                            title="${arr[i].title}">${arr[i].title}</a>
                            <div class="pice">
                                <p>${arr[i].price}</p>
                                <p class="frist">参考价：${arr[i].del}</p>
                            </div>
                            <div class="sc">
                                <div id="${arr[i].id}" class="sc_btn">加入购物车</div>
                            </div>
                        </div>
                    </li>`
            }
            $(".top .connter .brand-ul-main-1 ul ").html(str);
        },
        error: function (msg) {
            console.log(msg);
        }
    })

    //给加入购物车按钮添加点击
    //设置cookie <1>只能存储字符串  <2>cookie大小限制
    //json数据，id num  [{id:1,num:1},{id:2,num2}];
    $(".top .connter .brand-ul-main-1 ul").on("click", ".sc_btn", function () {
        //取出当前点击加入购物车按钮的id
        var id = this.id;
        //1、判断是否是第一次添加
        // var first = $.cookie("goods") == null ? true : false;
        var first = !($.cookie("goods"));
        if (first) {
            $.cookie("goods", JSON.stringify([{ id: id, num: 1 }]), {
                expires: 7
            });
        } else {
            //2、不是第一次，判定之前是否添加过
            var cookieArr = JSON.parse($.cookie("goods"));
            var same = false; //假设没有相同的数据
            for (var i = 0; i < cookieArr.length; i++) {
                if (cookieArr[i].id == id) {
                    same = true;
                    break;
                }
            }
            same ? cookieArr[i].num++ : cookieArr.push({ id: id, num: 1 });

            //3、将处理完的数据存储回去
            $.cookie("goods", JSON.stringify(cookieArr), {
                expires: 7
            })
        }
        sc_msg();
        sc_num();
        prices();
    })


    //给右侧购物车的删除按钮添加点击
    $(".right_slidebar .right_slidebar_detail ul").on("click", ".delete_goodsBtn button", function () {
        var id = $(this).closest("li").remove().attr("id");
        //删除页面上的节点  从cookie中删除数据
        var cookieArr = JSON.parse($.cookie("goods"));
        for (var i = 0; i < cookieArr.length; i++) {
            if (cookieArr[i].id == id) {
                cookieArr.splice(i, 1);
                break;
            }
        }
        if (cookieArr.length) {
            $.cookie("goods", JSON.stringify(cookieArr), {
                expires: 7
            })
        } else {
            $.cookie("goods", null);
        }

        //更新数据数量
        sc_num();
    })
    $(".right_slidebar .right_slidebar_detail ul").on("click", ".sc_goodsNum button", function () {
        var id = $(this).closest("li").attr("id");
        var cookieArr = JSON.parse($.cookie("goods"));
        for (var i = 0; i < cookieArr.length; i++) {
            if (cookieArr[i].id == id) {
                break;
            }
        }
        if (this.innerHTML == "+") {
            cookieArr[i].num++;
        } else {
            cookieArr[i].num == 1 ? alert("数量为1，不能减少") : cookieArr[i].num--;
        }
        $.cookie("goods", JSON.stringify(cookieArr), {
            expires: 7
        })

        //修改页面上的数量
        $(this).siblings("span").html(`${cookieArr[i].num}`);
        sc_num();
    })

    //加载右侧的购物车里面的数据
    //1、购物车的数据存储在cookie  2、商品数据在服务器
    function sc_msg() {
        var cookieStr = $.cookie("goods");
        if (!cookieStr) {
            return;
        }
        //下载所有的商品数据
        $.ajax({
            url: "../data/over.json",
            success: function (arr) {
                var cookieArr = JSON.parse(cookieStr);
                //精益求精  写算法
                var newArr = [];
                for (var i = 0; i < arr.length; i++) {
                    for (var j = 0; j < cookieArr.length; j++) {
                        if (cookieArr[j].id == arr[i].id) {
                            arr[i].num = cookieArr[j].num;
                            newArr.push(arr[i]);
                            break;
                        }
                    }
                }
                //通过newArr。处理数据，将数据添加页面上
                var str = ``;
                for (var i = 0; i < newArr.length; i++) {
                    str += `<li id="${newArr[i].id}" class="li_price">
                    <div class="sc_goodsPic">
                        <img src="${newArr[i].img}"
                            alt="">
                    </div>
                    <div class="sc_goodsTitle">
                        <p>${newArr[i].title}</p>

                        <div class="sc_goodsNum">
                            <div>
                                <button>-</button>
                                <span id="span_prices">${newArr[i].num}</span>
                                <button>+</button>
                            </div>
                        </div>
                    </div>
                    <div class="delete_goodsBtn">
                        ￥<p id="prices">${newArr[i].price}</p>
                        <button></button>
                    </div>
                </li>`;

                }
                $(".right_slidebar .right_slidebar_detail ul").html(str);
            },
            error: function (msg) {
                console.log(msg);
            }
        })
    }

    //处理数量
    function sc_num() {
        var cookieStr = $.cookie("goods");
        var sum = 0;
        if (cookieStr) {
            var cookieArr = JSON.parse(cookieStr);
            for (var i = 0; i < cookieArr.length; i++) {
                sum += cookieArr[i].num;
            }
        }
        $(".right_slidebar .right_slidebar_main .main_top .shopcar b").html(sum);
        $(".right_slidebar .right_slidebar_detail .shopcar-submit div i").html(sum);
    }

    function prices() {
        var all = $(".right_slidebar .right_slidebar_detail #ul_prices").find(".li_price");
        var total = 0;
        var count = 0;
        var totalAll = 0;
        all.each(function (item) {
            // total += parseFloat($(".sc_goodsTitle .sc_goodsNum span").html()) * parseFloat($(".delete_goodsBtn #prices").html().trim());
            // console.log(total) 
        })

        $(".right_slidebar .right_slidebar_detail .shopcar-submit div b").html(total);
    }


}