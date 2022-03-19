
function createCanvas(h, w) {
    $("#toolWindow").show();
    $("#myCanvas").show();
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');
    console.log("Create canvas!");
    canvas.height = h;
    canvas.width = w;
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, w, h);
    canvasX = "calc(50vw - {0}px)".replace("{0}", canvas.width / 2 - 90);
    canvasY = "calc(50vh - {0}px)".replace("{0}", canvas.height / 2);
    $("#myCanvas").css({ 'top': canvasY, 'left': canvasX });
}