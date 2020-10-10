window.onload = function(){
    $(".login_main .login_content .login_content_center .top ul .title .left").click(function () {
        $(".login_main .login_content .login_content_center .top ul .scan").css("display", "block");
        $(".login_main .login_content .login_content_center .top ul .member").css("display", "none");
        $(".login_main .login_content .login_content_center .top ul .title .left").css("color","red");
        $(".login_main .login_content .login_content_center .top ul .title .right").css("color","#000");

    })
    $(".login_main .login_content .login_content_center .top ul .title .right").click(function () {
        $(".login_main .login_content .login_content_center .top ul .scan").css("display", "none");
        $(".login_main .login_content .login_content_center .top ul .member").css("display", "block");
        $(".login_main .login_content .login_content_center .top ul .title .right").css("color","red");
        $(".login_main .login_content .login_content_center .top ul .title .left").css("color","#000");
    })
}