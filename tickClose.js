var second = 5;
var na = rawInput("appName");
toast("12");

setTimeout(function(){
    toast("hello");
    openAppSetting(getPackageName(na));
    while(!click("结束运行"));
    click("确定");
}, second * 1000);