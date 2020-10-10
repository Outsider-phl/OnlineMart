define([
    'require',
    'jquery'
], function(require, $) {
    'use strict';
    function download() {
        $.ajax({
            type :"get",
            url:"./data/data.json",
            success: function (arr) {
                for (var i = 0; i < arr.length; i++) {
                    $(`<li class="guess_show">
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
                </li>`).appendTo(node.find(".guess .connter .guess_body ul"));
                }
            },
            error: function (msg) {
              console.log(msg);
            }
        })
    }

    return{
        download : download
    }
});