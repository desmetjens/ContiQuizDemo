$(function() {
    document.addEventListener("deviceready", onDeviceReady, true);
});

function onDeviceReady() {
    $("#quit").click(function () {
        if(navigator)
            navigator.app.exitApp();
    });
}