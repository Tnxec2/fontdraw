const alignElement = document.getElementById("align");
const backgroundtransparentElement = document.getElementById("transparent");
const backgroundcolorElement = document.getElementById("backgroundcolor");
const textcolorElement = document.getElementById("textcolor");
const smoothElement = document.getElementById("smooth");
const removeblackElement = document.getElementById("removeblack");
const textarea = document.getElementById("myText");
const canvasContainer = document.getElementById("canvasContainer");
const prefixnameElement = document.getElementById("prefixname");
const startindexElement = document.getElementById("startindex");
const fontInputElement = document.getElementById("font-input")
const fontSizeElement = document.getElementById("font-size")
const fontStyleElement = document.getElementById("font-style")
const textBlockElement = document.getElementById("text-block")

var canvasArray = []
let font;
let fontSize = 48;
let fontStyle = 'normal';

drawText()

textBlocks = { 
    'digits': "0\n1\n2\n3\n4\n5\n6\n7\n8\n9"
    ,'en-monts': "January\nFebruary\nMarch\nApril\nMay\nJune\nJuly\nAugust\nSeptember\nOctober\nNovember\nDecember"
    ,'en-monts_up': "JANUARY\nFEBRUARY\nMARCH\nAPRIL\nMAY\nJUNE\nJULY\nAUGUST\nSEPTEMBER\nOCTOBER\nNOVEMBER\nDECEMBER"
    ,'en-monts3': "Jan\nFeb\nMar\nApr\nMay\nJun\nJul\nAug\nSept\nOct\nNov\nDec"
    ,'en-monts3_up': "JAN\nFEB\nMAR\nAPR\nMAY\nJUN\nJUL\nAUG\nSEPT\nOCT\nNOV\nDEC"
    ,'en-weekdays': "Monday\nTuesday\nWednesday\nThursday\nFriday\nSaturday\nSunday"
    ,'en-weekdays_up': "MONDAY\nTUESDAY\nWEDNESDAY\nTHURSDAY\nFRIDAY\nSATURDAY\nSUNDAY"
    ,'en-weekdays3': "Mon\nTue\nWed\nThu\nFri\nSat\nSun"
    ,'en-weekdays3_up': "MON\nTUE\nWED\nTHU\nFRI\nSAT\nSUN"
    ,'en-weekdays2': "Mo\nTu\nWe\nTh\nFr\nSa\nSu"
    ,'en-weekdays2_up': "MO\nTU\nWE\nTH\nFR\nSA\nSU"
    
    ,'ru-monts': "Январь\nФевраль\nМарт\nАпрель\nМай\nИюнь\nИюль\nАвгуст\nСентябрь\nОктябрь\nНоябрь\nДекабрь"
    ,'ru-monts_up': "ЯНВАРЬ\nФЕВРАЛЬ\nМАРТ\nАПРЕЛЬ\nМАЙ\nИЮНЬ\nИЮЛЬ\nАВГУСТ\nСЕНТЯБРЬ\nОКТЯБРЬ\nНОЯБРЬ\nДЕКАБРЬ"
    ,'ru-monts3': "Янв\nФев\nМар\nАпр\nМай\nИюн\nИюл\nАвг\nСен\nОкт\nНоя\nДек"
    ,'ru-monts3_up': "ЯНВ\nФЕВ\nМАР\nАПР\nМАЙ\nИЮН\nИЮЛ\nАВГ\nСЕН\nОКТ\nНОЯ\nДЕК"
    ,'ru-weekdays': "Понедельник\nВторник\nСреда\nЧетверг\nПятница\nСуббота\nВоскресенье"
    ,'ru-weekdays_up': "ПОНЕДЕЛЬНИК\nВТОРНИК\nСРЕДА\nЧЕТВЕРГ\nПЯТНИЦА\nСУББОТА\nВОСКРЕСЕНЬЕ"
    ,'ru-weekdays3': "пнд\nвтр\nсрд\nчтв\nптн\nсбт\nвск"
    ,'ru-weekdays3_up': "ПНД\nВТР\nСРД\nЧТВ\nПТН\nСБТ\nВСК"
    ,'ru-weekdays2': "пн\nвт\nср\nчт\nпт\nсб\nвс"
    ,'ru-weekdays2_up': "ПН\nВТ\nСР\nЧТ\nПТ\nСБ\nВС"
}


function setText() {
    textarea.value = textBlocks[textBlockElement.value]
    drawText()
}

function handleTransparentClick() {
    backgroundcolorElement.disabled = backgroundtransparentElement.checked;
    removeblackElement.disabled = backgroundtransparentElement.checked;
    drawText()
}

function removeCustomFont() {
    if (font) {
        document.fonts.delete(font);
        fontInputElement.value = null;
        font = null;
        drawText()
    }
}

fontInputElement.addEventListener("input", async () => {
    if (font)
        document.fonts.delete(font);

    const data = await fontInputElement.files[0].arrayBuffer();
    font = new FontFace('custom-font', data);
    await font.load();
    document.fonts.add(font);
    drawText()
});

function drawText() {
    removeAllChildNodes(canvasContainer);
    canvasArray = []

    const alignment = alignElement.value;
    fontSize = Number(fontSizeElement.value);
    fontStyle = fontStyleElement.value;

    var x = 0;
    var y = 0;
    var lines = textarea.value.split('\n');
    var maxWidth = 0;
    var lineheight = 0;

    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext("2d");
    if (!smoothElement.checked) {
        // make canvas context render without antialiasing
        // ctx.filter = "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxmaWx0ZXIgaWQ9ImZpbHRlciIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj48ZmVDb21wb25lbnRUcmFuc2Zlcj48ZmVGdW5jUiB0eXBlPSJpZGVudGl0eSIvPjxmZUZ1bmNHIHR5cGU9ImlkZW50aXR5Ii8+PGZlRnVuY0IgdHlwZT0iaWRlbnRpdHkiLz48ZmVGdW5jQSB0eXBlPSJkaXNjcmV0ZSIgdGFibGVWYWx1ZXM9IjAgMSIvPjwvZmVDb21wb25lbnRUcmFuc2Zlcj48L2ZpbHRlcj48L3N2Zz4=#filter)";
        ctx.filter = "url(#remove-alpha)";
    }


    if (font) ctx.font = fontStyle + ' ' + fontSize + "px custom-font"
    else ctx.font = fontStyle + ' ' + fontSize + "px sans-serif";

    ctx.textBaseline = "top";

    // find max line height and text width
    for (var i = 0; i < lines.length; i++) {
        let metrics = ctx.measureText(lines[i]);
        let linewidth = metrics.actualBoundingBoxRight + metrics.actualBoundingBoxLeft
        let fontHeight = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent

        if (linewidth > maxWidth) maxWidth = linewidth
        if (fontHeight > lineheight) lineheight = fontHeight
    }

    // draw each line in canvas
    for (var i = 0; i < lines.length; i++) {
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext("2d");
        canvas.width = maxWidth
        canvas.height = lineheight
        canvas.id = i;
        ctx.textBaseline = "top";

        if (!backgroundtransparentElement.checked) {
            ctx.fillStyle = backgroundcolorElement.value
            ctx.fillRect(0, 0, maxWidth, lineheight)
        }
        ctx.fillStyle = textcolorElement.value

        if (font) ctx.font = fontStyle + ' ' + fontSize + "px custom-font"
        else ctx.font = fontStyle + ' ' + fontSize + "px sans-serif";

        if (!smoothElement.checked) ctx.filter = "url(#remove-alpha)";

        ctx.textAlign = alignElement.value;
        x = alignElement.value === 'center' ? maxWidth / 2 : alignElement.value === 'end' ? maxWidth : 0

        ctx.fillText(lines[i], x, 0);

        if (!backgroundtransparentElement.checked && removeblackElement.checked) removeColor(ctx, canvas, backgroundcolorElement.value)
        var div = document.createElement('div');
        div.appendChild(canvas)
        canvasContainer.appendChild(div);
        canvasArray.push(canvas);
    }

    document.getElementById("lineHeight").innerHTML = lineheight;
    document.getElementById("lineWidth").innerHTML = Math.ceil(maxWidth);
}

function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

function removeColor(ctx, canvas, hexColor) {
    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imageData.data;
    var backgroudColorRGB = hexToRgb(hexColor);
    var sumBackgroundColor = backgroudColorRGB.r + backgroudColorRGB.g + backgroudColorRGB.b;
    for (var i = 0; i < data.length; i += 4) {
        if (data[i] + data[i + 1] + data[i + 2] == sumBackgroundColor) {
            data[i + 3] = 0; // alpha
        }
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.putImageData(imageData, 0, 0);
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function downloadAll() {
    for (var i = 0; i < canvasArray.length; i++) {
        downloadCanvasAsImage(canvasArray[i])
    }
}

function downloadCanvasAsImage(canvas) {
    let downloadLink = document.createElement('a');

    var prefix = prefixnameElement.value && prefixnameElement.value.length > 0 ? prefixnameElement.value + '_' : '';
    var sIndex = startindexElement.value && startindexElement.value.length > 0 ? (Number(startindexElement.value)) : 0;
    var num = pad(sIndex + Number(canvas.id), 4);

    downloadLink.setAttribute('download', prefix + num + '.png');

    canvas.toBlob(function (blob) {
        let url = URL.createObjectURL(blob);
        downloadLink.setAttribute('href', url);
        downloadLink.click();
    });
}