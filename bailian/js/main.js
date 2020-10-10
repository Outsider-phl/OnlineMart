// console.log("加载成功");
require.config({
    paths: {
        "jquery":"jquery-1.10.1.min",
        "jquery-cookie":"jquery-cookie",
        "data":"data"
    },
    shim: {
        "jquery-cookie":["jquery"]
    }
})

require(["data"]),function (data) {
    data.download();
}