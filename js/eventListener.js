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
        $("#toolScrollBlock").css({ "top": "{0}px".replace("{0}", nowToolY) });
});
