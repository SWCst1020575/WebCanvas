var mouseDownCursorX, mouseDownCursorY;
var isMouseDown = 0;
var img;
$("#canvasBlock").mousedown(function (event) {
    var canvasY = $("#canvasBlock").css("top");
    var canvasX = $("#canvasBlock").css("left");
    canvasX = parseInt(canvasX, 10);
    canvasY = parseInt(canvasY, 10);
    var cursorX = event.pageX - canvasX;
    var cursorY = event.pageY - canvasY;
    switch (nowTool) {
        case 1:
            mouseDownCursorX = cursorX;
            mouseDownCursorY = cursorY;
            toolActive = 1;
            break;
        case 2:
            drawStepStack.redoStack.length = 0;
            drawStepStack.undoStack.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
            if (drawStepStack.undoStack.length > 50)
                drawStepStack.undoStack.shift();
            break;
        case 3:
            drawStepStack.redoStack.length = 0;
            drawStepStack.undoStack.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
            if (drawStepStack.undoStack.length > 50)
                drawStepStack.undoStack.shift();
            ctx.lineWidth = $("#thicknessRange").val();
            ctx.lineCap = 'round';
            ctx.strokeStyle = $("#inputColor").val();
            ctx.beginPath();
            ctx.moveTo(cursorX, cursorY);
            toolActive = 1;
            break;
        case 4:
            drawStepStack.redoStack.length = 0;
            drawStepStack.undoStack.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
            if (drawStepStack.undoStack.length > 50)
                drawStepStack.undoStack.shift();
            ctx.lineWidth = $("#thicknessRange").val();
            ctx.lineCap = 'round';
            ctx.globalCompositeOperation = 'destination-out';
            ctx.beginPath();
            ctx.moveTo(cursorX, cursorY);
            toolActive = 1;
            break;
        case 5:
            drawStepStack.redoStack.length = 0;
            drawStepStack.undoStack.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
            if (drawStepStack.undoStack.length > 50)
                drawStepStack.undoStack.shift();
            toolActive = 1;
            mouseDownCursorX = cursorX;
            mouseDownCursorY = cursorY;
            ctx.lineWidth = $("#thicknessRange").val();
            ctx.strokeStyle = $("#inputColor").val();
            canvasRecord = ctx.getImageData(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.arc(cursorX, cursorY, 0, 0, 2 * Math.PI);
            ctx.stroke();
            break;
        case 6:
            drawStepStack.redoStack.length = 0;
            drawStepStack.undoStack.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
            if (drawStepStack.undoStack.length > 50)
                drawStepStack.undoStack.shift();
            toolActive = 1;
            mouseDownCursorX = cursorX;
            mouseDownCursorY = cursorY;
            ctx.lineWidth = $("#thicknessRange").val();
            ctx.strokeStyle = $("#inputColor").val();
            canvasRecord = ctx.getImageData(0, 0, canvas.width, canvas.height);
            ctx.strokeRect(cursorX, cursorY, 0, 0);
            break;
        case 7:
            drawStepStack.redoStack.length = 0;
            drawStepStack.undoStack.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
            if (drawStepStack.undoStack.length > 50)
                drawStepStack.undoStack.shift();
            toolActive = 1;
            mouseDownCursorX = cursorX;
            mouseDownCursorY = cursorY;
            ctx.lineWidth = $("#thicknessRange").val();
            ctx.strokeStyle = $("#inputColor").val();
            ctx.lineCap = 'round';
            canvasRecord = ctx.getImageData(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.moveTo(mouseDownCursorX, mouseDownCursorY);
            ctx.lineTo(cursorX, cursorY);
            ctx.moveTo(mouseDownCursorX, mouseDownCursorY);
            ctx.lineTo(mouseDownCursorX - (cursorX - mouseDownCursorX), cursorY);
            ctx.moveTo(mouseDownCursorX - (cursorX - mouseDownCursorX), cursorY);
            ctx.lineTo(cursorX, cursorY);
            ctx.stroke();
            break;
        case 8:
            drawStepStack.redoStack.length = 0;
            drawStepStack.undoStack.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
            if (drawStepStack.undoStack.length > 50)
                drawStepStack.undoStack.shift();
            toolActive = 1;
            mouseDownCursorX = cursorX;
            mouseDownCursorY = cursorY;
            ctx.lineWidth = $("#thicknessRange").val();
            ctx.strokeStyle = $("#inputColor").val();
            ctx.lineCap = 'round';
            canvasRecord = ctx.getImageData(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.moveTo(mouseDownCursorX, mouseDownCursorY);
            ctx.lineTo(cursorX, cursorY);
            ctx.stroke();
            break;
    }
});
$("#canvasBlock").click(function (event) {
    var absoluteCursorX = event.pageX;
    var absoluteCursorY = event.pageY;
    var canvasY = $("#canvasBlock").css("top");
    var canvasX = $("#canvasBlock").css("left");
    canvasX = parseInt(canvasX, 10);
    canvasY = parseInt(canvasY, 10);
    var cursorX = event.pageX - canvasX;
    var cursorY = event.pageY - canvasY;
    switch (nowTool) {
        case 2:
            if (!toolActive) {
                toolActive = 1;
                $("#textInput").val("");
                $("#textInput").css({ "left": absoluteCursorX, "top": absoluteCursorY });
                $("#textInput").show();
            }
            break;
        case 10:
            if (toolActive) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.putImageData(canvasRecord, 0, 0);
                ctx.globalAlpha = 1;
                ctx.drawImage(img, cursorX - img.width / 2, cursorY - img.height / 2);
                toolActive = 0;
                changeToolButton(0);
                $("#canvasBlock").css({ 'cursor': "default" });
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
    if (toolActive) {
        switch (nowTool) {
            case 1:
                drag(canvasX, canvasY, cursorX - mouseDownCursorX, cursorY - mouseDownCursorY);
                break;
            case 3:
            case 4:
                ctx.lineTo(cursorX, cursorY);
                ctx.stroke();
                ctx.moveTo(cursorX, cursorY);
                break;
            case 5:
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.putImageData(canvasRecord, 0, 0);
                ctx.beginPath();
                ctx.arc(mouseDownCursorX, mouseDownCursorY, Math.sqrt((cursorX - mouseDownCursorX) * (cursorX - mouseDownCursorX) + (cursorY - mouseDownCursorY) * (cursorY - mouseDownCursorY)), 0, 2 * Math.PI);
                ctx.stroke();
                break;
            case 6:
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.putImageData(canvasRecord, 0, 0);
                ctx.strokeRect(mouseDownCursorX, mouseDownCursorY, cursorX - mouseDownCursorX, cursorY - mouseDownCursorY);
                break;
            case 7:
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.putImageData(canvasRecord, 0, 0);
                ctx.beginPath();
                ctx.moveTo(mouseDownCursorX, mouseDownCursorY);
                ctx.lineTo(cursorX, cursorY);
                ctx.moveTo(mouseDownCursorX, mouseDownCursorY);
                ctx.lineTo(mouseDownCursorX - (cursorX - mouseDownCursorX), cursorY);
                ctx.moveTo(mouseDownCursorX - (cursorX - mouseDownCursorX), cursorY);
                ctx.lineTo(cursorX, cursorY);
                ctx.stroke();
                break;
            case 8:
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.putImageData(canvasRecord, 0, 0);
                ctx.beginPath();
                ctx.moveTo(mouseDownCursorX, mouseDownCursorY);
                ctx.lineTo(cursorX, cursorY);
                ctx.stroke();
                break;
            case 10:
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.putImageData(canvasRecord, 0, 0);
                ctx.globalAlpha = 0.3;
                ctx.drawImage(img, cursorX - img.width / 2, cursorY - img.height / 2);
                break;
        }
    }
});
$("#canvasBlock").mouseup(function (event) {
    var canvasY = $("#canvasBlock").css("top");
    var canvasX = $("#canvasBlock").css("left");
    canvasX = parseInt(canvasX, 10);
    canvasY = parseInt(canvasY, 10);
    var cursorX = event.pageX - canvasX;
    var cursorY = event.pageY - canvasY;
    switch (nowTool) {
        case 1:
            toolActive = 0;
            break;
        case 3:
        case 4:
            ctx.lineTo(cursorX, cursorY);
            ctx.stroke();
            toolActive = 0;
            ctx.globalCompositeOperation = 'source-over';
        case 5:
        case 6:
        case 7:
        case 8:
            toolActive = 0;
            break;
    }
});
$("#canvasBlock").mouseenter(function (event) {
    var canvasY = $("#canvasBlock").css("top");
    var canvasX = $("#canvasBlock").css("left");
    canvasX = parseInt(canvasX, 10);
    canvasY = parseInt(canvasY, 10);
    var cursorX = event.pageX - canvasX;
    var cursorY = event.pageY - canvasY;
    if (toolActive) {
        switch (nowTool) {
            case 3:
            case 4:
                ctx.moveTo(cursorX, cursorY);
                ctx.lineTo(cursorX, cursorY);
                ctx.stroke();
                ctx.moveTo(cursorX, cursorY);
                break;
        }
    }
});
$("#canvasBlock").mouseleave(function (event) {
    var canvasY = $("#canvasBlock").css("top");
    var canvasX = $("#canvasBlock").css("left");
    canvasX = parseInt(canvasX, 10);
    canvasY = parseInt(canvasY, 10);
    var cursorX = event.pageX - canvasX;
    var cursorY = event.pageY - canvasY;
    if (toolActive) {
        switch (nowTool) {
            case 3:
            case 4:
                ctx.lineTo(cursorX, cursorY);
                ctx.stroke();
                break;
        }
    }
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
        ctx.font = $("#thicknessRange").val() + "px Arial";
        ctx.fillStyle = $("#inputColor").val();
        var nowX = parseInt($('#textInput').css("left"), 10) - parseInt($("#canvasBlock").css("left"), 10);
        var nowY = parseInt($('#textInput').css("top"), 10) - parseInt($("#canvasBlock").css("top"), 10);
        ctx.fillText($('#textInput').val(), nowX, nowY);
        $("#textInput").hide();
    }
});

document.getElementById('uploadFile').addEventListener('change', function (event) {
    if (event.target.files) {
        let imageFile = event.target.files[0]; //here we get the image file
        var reader = new FileReader();
        try {
            drawStepStack.redoStack.length = 0;
            drawStepStack.undoStack.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
            if (drawStepStack.undoStack.length > 50)
                drawStepStack.undoStack.shift();
            reader.readAsDataURL(imageFile);
            reader.onloadend = function (event) {
                img = new Image();
                img.src = event.target.result;
                img.onload = function () {
                    toolActive = 1;
                    canvasRecord = ctx.getImageData(0, 0, canvas.width, canvas.height);
                    $("#canvasBlock").css({ 'cursor': "none" });
                }
            }
            document.getElementById('uploadFile').value = "";
        } catch (error) {
            toolActive = 0;
            changeToolButton(0);
            $("#canvasBlock").css({ 'cursor': "default" });
            console.log(error);
        }

    }
});

$(window).resize(function () {
    $("#toolScrollBlock").css({ "top": "0px" });
});