window.onload = function () {
    var oUsername = document.getElementById("username");
    var oUsername_span = document.getElementById("username_span");
    var oUsername_span01 = document.getElementById("username_span01");
    var oUsername_span02 = document.getElementById("username_span02");
    var oUsername_span03 = document.getElementById("username_span03");
    var oPassword = document.getElementById("password");
    var oPassword_span = document.getElementById("password_span");

    var oRepassword = document.getElementById("repassword");
    var oRepassword_span = document.getElementById("repassword_span");
    var oRepassword_span01 = document.getElementById("repassword_span01");
    var oRepassword_span02 = document.getElementById("repassword_span02");

    var oTelephone = document.getElementById("telephone");
    var oTelephone_span = document.getElementById("telephone_span");
    var oTelephone_span01 = document.getElementById("telephone_span01");
    var oTelephone_span02 = document.getElementById("telephone_span02");
    var oTestSpan = document.getElementById("testSpan");
    var aSpans = oTestSpan.getElementsByTagName("span");
    var oEmail = document.getElementById("email");
    var oEmail_span = document.getElementById("email_span");
    var oEmail_span01 = document.getElementById("email_span01");
    var oEmail_span02 = document.getElementById("email_span02");
    var oEmail_span03 = document.getElementById("email_span03");

    
    //获取焦点 foucs 事件
    oUsername.onfocus = function () {
        oUsername_span.style.display = "block";
        oUsername_span01.style.display = "none";
        oUsername_span02.style.display = "none";
        oUsername_span03.style.display = "none";
    };

    //失去焦点 blur  事件
    oUsername.onblur = function () {
        //拿到输入框的内容
        var oValue = oUsername.value;
        if (!oValue) {
            oUsername_span.style.display = "none";
        } else {
            //判断已经输入的内容是否为正确的用户名
            //判断长度是否符合条件
            if (oValue.length > 20 || oValue.length < 6) {
                oUsername_span01.style.display = "block";
                oUsername_span.style.display = "none";
            } else if (/\W/.test(oValue)) {
                oUsername_span02.style.display = "block";
                oUsername_span.style.display = "none";
            } else {
                oUsername_span03.style.display = "block";
                oUsername_span.style.display = "none";
            }
        }
    }

    //判断密码
    //获取焦点 foucs 事件
    oPassword.onfocus = function () {
        oPassword_span.style.display = "block";
    };
    // // 失去焦点
    oPassword.onblur = function () {
        oPassword_span.style.display = 'none';
    }
    oPassword.oninput = function () {
        var oValue = this.value;
        if (oValue.length >= 6 && oValue.length <= 16) {
            oTestSpan.style.display = "block";
            oPassword_span.style.display = "none";

            for (var i = 0; i < aSpans.length; i++) {
                aSpans[i].className = '';
            }

            if (/^\d+$/.test(oValue) || /^[a-z]+$/.test(oValue)) {
                aSpans[0].className = 'active';
            } else if (/^\d/.test(oValue) || /[a-z]/.test(oValue)) {
                aSpans[2].className = 'active';
            } else {
                aSpans[1].className = 'active';
            }
        } else {
            oTestSpan.style.display = "none";
            oPassword_span.style.display = 'block';
        }
    }


    oRepassword.onfocus = function () {
        oRepassword_span.style.display = "block";
        oRepassword_span01.style.display = 'none';
        oRepassword_span02.style.display = 'none';
    };
    // // 失去焦点
    oRepassword.onblur = function () {
        oRepassword_span.style.display = 'none';
        // if ( oPassword.value = oRepassword_span.value) {
        //     oRepassword_span.style.display = 'none';
        //     oRepassword_span02.style.display = "block";
        // } else {
        //     oRepassword_span.style.display = 'none';
        //     oRepassword_span01.style.display = "block";
        // }
    }

    // // 判断手机号
    // //获取焦点 foucs 事件
    oTelephone.onfocus = function () {
        oTelephone_span.style.display = "block";
        oTelephone_span01.style.display = "none";
        oTelephone_span02.style.display = "none";
    };
    // // 失去焦点
    oTelephone.onblur = function () {
        var tValue = oTelephone.value;
        if (!tValue) {
            oTelephone_span.style.display = "none";
        } else {
            // 判断手机号输入是否正确
            if (tValue == null || tValue.length != 11) {
                
                oTelephone_span.style.display = "none";
                oTelephone_span01.style.display = "block";
            } else if (/[^1]/.test(tValue[0])) {
                oTelephone_span01.style.display = "block";
                oTelephone_span.style.display = "none";
            } else if (/[^3|5|6|7|8|9]/.test(tValue[1])) {
                oTelephone_span01.style.display = "block";
                oTelephone_span.style.display = "none";
            } else {
               
                oTelephone_span.style.display = "none";
                oTelephone_span02.style.display = "block";
            }
        }
    }
    oEmail.onfocus = function () {
        oEmail_span.style.display = "block";
        oEmail_span01.style.display = "none";
        oEmail_span02.style.display = "none";
        oEmail_span03.style.display = "none";
    };
    // // 失去焦点
    oEmail.onblur = function () {
        oEmail_span.style.display = 'none';
        var eValue = oEmail.value;
        if (!eValue) {
            oEmail_span.style.display = "none";
        } else {

            if (eValue == null) {
                oEmail_span.style.display = "none";
                oEmail_span01.style.display = "block";
            } else if (/^[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*\.[a-z]{2,}$/.test(eValue)) {
                oEmail_span02.style.display = "block";
                oEmail_span.style.display = "none";
            }  else {
                oEmail_span.style.display = "none";
                oEmail_span03.style.display = "block";
            }
        }
    }
}