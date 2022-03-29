
function numberRestriction(obj) {
    var inputChar = window.event.key;
    obj.style.border = '2px solid #E0E0E0';
    if (obj.selectionStart != obj.selectionEnd) {
        if (inputChar.charCodeAt() == 66)
            obj.value = obj.value.substr(0, obj.selectionStart) + obj.value.substr(obj.selectionEnd, obj.value.length - obj.selectionEnd);
        else if (inputChar.charCodeAt() >= 48 && inputChar.charCodeAt() <= 57)
            obj.value = obj.value.substr(0, obj.selectionStart) + inputChar + obj.value.substr(obj.selectionEnd, obj.value.length - obj.selectionEnd);
    }
    else if (inputChar.charCodeAt() == 66)
        obj.value = obj.value.substr(0, obj.value.length - 1);
    else if (Number(obj.value) * 10 + inputChar.charCodeAt() - 48 > 9999)
        return;
    else if (inputChar.charCodeAt() >= 48 && inputChar.charCodeAt() <= 57)
        obj.value += inputChar;
    obj.value = Number(obj.value);
}
function clickCreateCanvas() {
    try {
        var h = Number($("#heightSet").val()), w = Number($("#widthSet").val());
    }
    catch (e) {
        alert("Please enter integers.")
    }
    if (h > 0 && w > 0) {
        $("#creatWindow").hide();
        $("title").text("WebCanvas");
        createCanvas(h, w);
    }
    else {
        if (h < 1)
            $("#heightSet").css({ 'border-color': 'red' });
        if (w < 1)
            $("#widthSet").css({ 'border-color': 'red' });
    }
}
function isMobile() {
    try { document.createEvent("TouchEvent"); return true; }
    catch (e) { return false; }
}

$("#creatWindow").ready(function () {
    if (isMobile()) {
        $("#heightSet").removeAttr("readonly");
        $("#heightSet").removeAttr("type");
        $("#heightSet").removeAttr("onkeydown");
        $("#heightSet").attr("type", "number");
        $("#widthSet").removeAttr("readonly");
        $("#widthSet").removeAttr("type");
        $("#widthSet").removeAttr("onkeydown");
        $("#widthSet").attr("type", "number");
    }
});