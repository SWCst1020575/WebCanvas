// 0=cursor 1=drag 2=text 3=pen 4=eraser 5=circle 6=rectangle 7=triangle
// 8=line 9=refresh 10=upload 11=download 12=undo 13=redo 14=enlarge 15=shrink
var nowTool = 0;

function createCanvas(h, w) {
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');
    console.log("Create canvas!");
    canvas.height = h;
    canvas.width = w;
    canvasX = "calc(50vw - {0}px)".replace("{0}", canvas.width / 2 - 90);
    canvasY = "calc(50vh - {0}px)".replace("{0}", canvas.height / 2);
    canvasBlockHeight = "{0}px".replace("{0}", h);
    canvasBlockWidth = "{0}px".replace("{0}", w);
    $("#canvasBlock").css({ 'background-color': "white", 'position': "absolute", 'width': canvasBlockWidth, 'height': canvasBlockHeight, 'top': canvasY, 'left': canvasX });
    nowTool = 0;
    $("#cursorButton").css({ 'background-color': "rgba(215, 215, 215, 0.7)" });
    $("#toolWindow").show();
    $("#myCanvas").show();
}
function clickCursor() {
    if (nowTool == 0)
        return;
    changeToolButton(0);
    $("#canvasBlock").css({ 'cursor': "default" });
}
function clickDrag() {
    if (nowTool == 1)
        return;
    changeToolButton(1);
    $("#canvasBlock").css({ 'cursor': "grab" });
}

function drag(originX, originY, dx, dy) {
    $("#canvasBlock").css({ "left": "{0}px".replace("{0}", (originX + dx)) });
    $("#canvasBlock").css({ "top": "{0}px".replace("{0}", (originY + dy)) });
}
function changeToolButton(target) {
    var colorType = "rgba(255, 255, 255, 0.7)";
    switch (nowTool) {
        case 0:
            $("#cursorButton").css({ 'background-color': colorType });
            break;
        case 1:
            $("#dragButton").css({ 'background-color': colorType });
            break;
        case 2:
            $("#textButton").css({ 'background-color': colorType });
            break;
        case 3:
            $("#penButton").css({ 'background-color': colorType });
            break;
        case 4:
            $("#eraserButton").css({ 'background-color': colorType });
            break;
        case 5:
            $("#circleButton").css({ 'background-color': colorType });
            break;
        case 6:
            $("#rectangleButton").css({ 'background-color': colorType });
            break;
        case 7:
            $("#triangleButton").css({ 'background-color': colorType });
            break;
        case 8:
            $("#lineButton").css({ 'background-color': colorType });
            break;
        case 9:
            $("#refreshButton").css({ 'background-color': colorType });
            break;
        case 10:
            $("#uploadButton").css({ 'background-color': colorType });
            break;
        case 11:
            $("#downloadButton").css({ 'background-color': colorType });
            break;
        case 12:
            $("#undoButton").css({ 'background-color': colorType });
            break;
        case 13:
            $("#redoButton").css({ 'background-color': colorType });
            break;
        case 14:
            $("#enlargeButton").css({ 'background-color': colorType });
            break;
        case 15:
            $("#shrinkButton").css({ 'background-color': colorType });
            break;
    }
    colorType = "rgba(215, 215, 215, 0.7)";
    switch (target) {
        case 0:
            $("#cursorButton").css({ 'background-color': colorType });
            break;
        case 1:
            $("#dragButton").css({ 'background-color': colorType });
            break;
        case 2:
            $("#textButton").css({ 'background-color': colorType });
            break;
        case 3:
            $("#penButton").css({ 'background-color': colorType });
            break;
        case 4:
            $("#eraserButton").css({ 'background-color': colorType });
            break;
        case 5:
            $("#circleButton").css({ 'background-color': colorType });
            break;
        case 6:
            $("#rectangleButton").css({ 'background-color': colorType });
            break;
        case 7:
            $("#triangleButton").css({ 'background-color': colorType });
            break;
        case 8:
            $("#lineButton").css({ 'background-color': colorType });
            break;
        case 9:
            $("#refreshButton").css({ 'background-color': colorType });
            break;
        case 10:
            $("#uploadButton").css({ 'background-color': colorType });
            break;
        case 11:
            $("#downloadButton").css({ 'background-color': colorType });
            break;
        case 12:
            $("#undoButton").css({ 'background-color': colorType });
            break;
        case 13:
            $("#redoButton").css({ 'background-color': colorType });
            break;
        case 14:
            $("#enlargeButton").css({ 'background-color': colorType });
            break;
        case 15:
            $("#shrinkButton").css({ 'background-color': colorType });
            break;
    }
    nowTool = target;
}