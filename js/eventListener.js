var mouseDownCursorX, mouseDownCursorY;
var isMouseDown = 0;
$("#canvasBlock").mousedown(function (event) {
    var canvasY = $("#canvasBlock").css("top");
    var canvasX = $("#canvasBlock").css("left");
    canvasX = parseInt(canvasX, 10);
    canvasY = parseInt(canvasY, 10);
    var cursorX = event.pageX - canvasX;
    var cursorY = event.pageY - canvasY;
    isMouseDown = 1;
    switch (nowTool) {
        case 1:
            mouseDownCursorX = cursorX;
            mouseDownCursorY = cursorY;
            break;
    }
});
$("#canvasBlock").click(function (event) {
    var absoluteCursorX = event.pageX;
    var absoluteCursorY = event.pageY;
    switch (nowTool) {
        case 2:
            if (!toolActive) {
                toolActive = 1;
                $("#textInput").val("");
                $("#textInput").css({ "left": absoluteCursorX, "top": absoluteCursorY });
                $("#textInput").show();
            }
            break;
    }
});

$("#canvasBlock").mousemove(function (event) {
    var canvasY = $("#canvasBlock").css("top");
    var canvasX = $("#canvasBlock").css("left");
    canvasX = parseInt(canvasX, 10);
    canvasY = parseInt(canvasY, 10);
    var cursorX = event.pageX - canvasX;
    var cursorY = event.pageY - canvasY;
    if (isMouseDown) {
        switch (nowTool) {
            case 1:
                drag(canvasX, canvasY, cursorX - mouseDownCursorX, cursorY - mouseDownCursorY);
                break;
        }
    }
});
$("#canvasBlock").mouseup(function (event) {
    isMouseDown = 0;
});
//scroll of tool window
$("#toolWindow").bind('mousewheel', function (event) {
    var nowToolY = $("#toolScrollBlock").css("top");
    var nowToolHeight = $("#toolScrollBlock").css("height");
    var visibleHeight = $("#visibleBlock").css("height");
    nowToolY = parseInt(nowToolY, 10);
    nowToolHeight = parseInt(nowToolHeight, 10);
    visibleHeight = parseInt(visibleHeight, 10);
    nowToolY += event.originalEvent.wheelDelta / 5;
    if (nowToolY + nowToolHeight > visibleHeight && nowToolY <= 0)
        $("#toolScrollBlock").css({ "top": (nowToolY + "px") });
});
$('#textInput').keypress(function (event) {
    if (event.which == 13) {
        toolActive = 0;
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        ctx.font = $("#thicknessRange").val() + "px Arial";
        ctx.fillStyle = $("#inputColor").val();
        var nowX = parseInt($('#textInput').css("left"), 10) - parseInt($("#canvasBlock").css("left"), 10);
        var nowY = parseInt($('#textInput').css("top"), 10) - parseInt($("#canvasBlock").css("top"), 10);
        ctx.fillText($('#textInput').val(), nowX, nowY);
        $("#textInput").hide();
    }
});