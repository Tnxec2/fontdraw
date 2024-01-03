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
const fontBuiltInElement = document.getElementById("font-builtin")
const textBlockElement = document.getElementById("text-block")
const textVarElement = document.getElementById("text-var")

const letterSpacingElement = document.getElementById("letterSpacing")
const rotateElement = document.getElementById("rotate")

const canvaswidthElement = document.getElementById("canvaswidth")
const canvasheightElement = document.getElementById("canvasheight")
const canvastopElement = document.getElementById("canvastop")
const canvasleftElement = document.getElementById("canvasleft")

const textincircleElement = document.getElementById("textincircle")
const circlexElement = document.getElementById("circlex")
const circleyElement = document.getElementById("circley")
const circleradiusElement = document.getElementById("circleradius")
const warningcircletextElement = document.getElementById("warningcircletext")

let font;

textBlocks = { 
    'digits': "0\n1\n2\n3\n4\n5\n6\n7\n8\n9"
    ,'digits_cap': "0\n1\n2\n3\n4\n5\n6\n7\n8\n9"
    ,'digits_up': "0\n1\n2\n3\n4\n5\n6\n7\n8\n9"
    ,'en-monts': "january\nfebruary\nmarch\napril\nmay\njune\njuly\naugust\nseptember\noctober\nnovember\ndecember"
    ,'en-monts_cap': "January\nFebruary\nMarch\nApril\nMay\nJune\nJuly\nAugust\nSeptember\nOctober\nNovember\nDecember"
    ,'en-monts_up': "JANUARY\nFEBRUARY\nMARCH\nAPRIL\nMAY\nJUNE\nJULY\nAUGUST\nSEPTEMBER\nOCTOBER\nNOVEMBER\nDECEMBER"
    ,'en-monts3': "jan\nfeb\nmar\napr\nmay\njun\njul\naug\nsept\noct\nnov\ndec"
    ,'en-monts3_cap': "Jan\nFeb\nMar\nApr\nMay\nJun\nJul\nAug\nSept\nOct\nNov\nDec"
    ,'en-monts3_up': "JAN\nFEB\nMAR\nAPR\nMAY\nJUN\nJUL\nAUG\nSEPT\nOCT\nNOV\nDEC"
    ,'en-weekdays': "monday\ntuesday\nwednesday\nthursday\nfriday\nsaturday\nsunday"
    ,'en-weekdays_cap': "Monday\nTuesday\nWednesday\nThursday\nFriday\nSaturday\nSunday"
    ,'en-weekdays_up': "MONDAY\nTUESDAY\nWEDNESDAY\nTHURSDAY\nFRIDAY\nSATURDAY\nSUNDAY"
    ,'en-weekdays3': "mon\ntue\nwed\nthu\nfri\nsat\nsun"
    ,'en-weekdays3_cap': "Mon\nTue\nWed\nThu\nFri\nSat\nSun"
    ,'en-weekdays3_up': "MON\nTUE\nWED\nTHU\nFRI\nSAT\nSUN"
    ,'en-weekdays2': "mo\ntu\nwe\nth\nfr\nsa\nsu"
    ,'en-weekdays2_cap': "Mo\nTu\nWe\nTh\nFr\nSa\nSu"
    ,'en-weekdays2_up': "MO\nTU\nWE\nTH\nFR\nSA\nSU"

    ,'de-monts': "januar\nfebruar\nmärz\napril\nmai\njuni\njuli\naugust\nseptember\noktober\nnovember\ndezember"
    ,'de-monts_cap': "Januar\nFebruar\nMärz\nApril\nMai\nJuni\nJuli\nAugust\nSeptember\nOktober\nNovember\nDezember"
    ,'de-monts_up': "JANUAR\nFEBRUAR\nMÄRZ\nAPRIL\nMAI\nJUNI\nJULI\nAUGUST\nSEPTEMBER\nOKTOBER\nNOVEMBER\nDEZEMBER"
    ,'de-monts3': "jan\nfeb\nmärz\napr\nmai\njun\njul\naug\nsept\nokt\nnov\ndez"
    ,'de-monts3_cap': "Jan\nFeb\nMärz\nApr\nMai\nJun\nJul\nAug\nSept\nOkt\nNov\nDez"
    ,'de-monts3_up': "JAN\nFEB\nMÄRZ\nAPR\nMAI\nJUN\nJUL\nAUG\nSEPT\nOKT\nNOV\nDEZ"

    ,'de-weekdays': "montag\ndienstag\nmittwoch\ndonnerstag\nfreitag\nsamstag\nsonntag"
    ,'de-weekdays_cap': "Montag\nDienstag\nMittwoch\nDonnerstag\nFreitag\nSamstag\nSonntag"
    ,'de-weekdays_up': "MONTAG\nDIENSTAG\nMITTWOCH\nDONNERSTAG\nFREITAG\nSAMSTAG\nSONNTAG"

    ,'de-weekdays3': "mon\ndie\nmit\ndon\nfre\nsam\nson"
    ,'de-weekdays3_cap': "Mon\nDie\nMit\nDon\nFre\nSam\nSon"
    ,'de-weekdays3_up': "MON\nDIE\nMIT\nDON\nFRE\nSAM\nSON"

    ,'de-weekdays2': "mo\ndi\nmi\ndo\nfr\nsa\nso"
    ,'de-weekdays2_cap': "Mo\nDi\nMi\nDo\nFr\nSa\nSo"
    ,'de-weekdays2_up': "MO\nDI\nMI\nDO\nFR\nSA\nSO"
    
    ,'ru-monts': "январь\nфевраль\nмарт\nапрель\nмай\nиюнь\nиюль\nавгуст\nсентябрь\nоктябрь\nноябрь\nдекабрь"
    ,'ru-monts_cap': "Январь\nФевраль\nМарт\nАпрель\nМай\nИюнь\nИюль\nАвгуст\nСентябрь\nОктябрь\nНоябрь\nДекабрь"
    ,'ru-monts_up': "ЯНВАРЬ\nФЕВРАЛЬ\nМАРТ\nАПРЕЛЬ\nМАЙ\nИЮНЬ\nИЮЛЬ\nАВГУСТ\nСЕНТЯБРЬ\nОКТЯБРЬ\nНОЯБРЬ\nДЕКАБРЬ"
    ,'ru-monts3': "янв\nфев\nмар\nапр\nмай\nиюн\nиюл\nавг\nсен\nокт\nноя\nдек"
    ,'ru-monts3_cap': "Янв\nФев\nМар\nАпр\nМай\nИюн\nИюл\nАвг\nСен\nОкт\nНоя\nДек"
    ,'ru-monts3_up': "ЯНВ\nФЕВ\nМАР\nАПР\nМАЙ\nИЮН\nИЮЛ\nАВГ\nСЕН\nОКТ\nНОЯ\nДЕК"
    ,'ru-weekdays': "понедельник\nвторник\nсреда\nчетверг\nпятница\nсуббота\nвоскресенье"
    ,'ru-weekdays_cap': "Понедельник\nВторник\nСреда\nЧетверг\nПятница\nСуббота\nВоскресенье"
    ,'ru-weekdays_up': "ПОНЕДЕЛЬНИК\nВТОРНИК\nСРЕДА\nЧЕТВЕРГ\nПЯТНИЦА\nСУББОТА\nВОСКРЕСЕНЬЕ"
    ,'ru-weekdays3': "пнд\nвтр\nсрд\nчтв\nптн\nсбт\nвск"
    ,'ru-weekdays3_cap': "Пнд\nВтр\nСрд\nЧтв\nПтн\nСбт\nВск"
    ,'ru-weekdays3_up': "ПНД\nВТР\nСРД\nЧТВ\nПТН\nСБТ\nВСК"
    ,'ru-weekdays2': "пн\nвт\nср\nчт\nпт\nсб\nвс"
    ,'ru-weekdays2_cap': "Пн\nВт\nСр\nЧт\nПт\nСб\nВс"
    ,'ru-weekdays2_up': "ПН\nВТ\nСР\nЧТ\nПТ\nСБ\nВС"
    
    ,'ua-monts': "січень\nлютий\nберезень\nквітень\nтравень\nчервень\nлипень\nсерпень\nвересень\nжовтень\nлистопад\nгрудень"
    ,'ua-monts_cap': "Січень\nЛютий\nБерезень\nКвітень\nТравень\nЧервень\nЛипень\nСерпень\nВересень\nЖовтень\nЛистопад\nГрудень"
    ,'ua-monts_up': "СІЧЕНЬ\nЛЮТИЙ\nБЕРЕЗЕНЬ\nКВІТЕНЬ\nТРАВЕНЬ\nЧЕРВЕНЬ\nЛИПЕНЬ\nСЕРПЕНЬ\nВЕРЕСЕНЬ\nЖОВТЕНЬ\nЛИСТОПАД\nГРУДЕНЬ"

    ,'ua-monts3': "сiч\nлют\nбер\nквiт\nтрав\nчерв\nлип\nсерп\nвер\nжовт\nлист\nгруд"
    ,'ua-monts3_cap': "Сiч\nЛют\nБер\nКвiт\nТрав\nЧерв\nЛип\nСерп\nВер\nЖовт\nЛист\nГруд"
    ,'ua-monts3_up': "СIЧ\nЛЮТ\nБЕР\nКВIТ\nТРАВ\nЧЕРВ\nЛИП\nСЕРП\nВЕР\nЖОВТ\nЛИСТ\nГРУД"

    ,'ua-weekdays': "понеділок\nвівторок\nсереда\nчетвер\nп`ятниця\nсубота\nнеділя"
    ,'ua-weekdays_cap': "Понеділок\nВівторок\nСереда\nЧетвер\nП`ятниця\nСубота\nНеділя"
    ,'ua-weekdays_up': "ПОНЕДІЛОК\nВІВТОРОК\nСЕРЕДА\nЧЕТВЕР\nП`ЯТНИЦЯ\nСУБОТА\nНЕДІЛЯ"

    ,'ua-weekdays3': "пнд\nвтр\nсрд\nчтв\nптн\nсбт\nндл"
    ,'ua-weekdays3_cap': "Пнд\nВтр\nСрд\nЧтв\nПтн\nСбт\nНдл"
    ,'ua-weekdays3_up': "ПНД\nВТР\nСРД\nЧТВ\nПТН\nСБТ\nНДЛ"
    
    ,'ua-weekdays2': "пн\nвт\nср\nчт\nпт\nсб\nнд"
    ,'ua-weekdays2_cap': "Пн\nВт\nСр\nЧт\nПт\nСб\nНд"
    ,'ua-weekdays2_up': "ПН\nВТ\nСР\nЧТ\nПТ\nСБ\nНД"

}

setText()

function setText() {
    textarea.value = textBlocks[textBlockElement.value + textVarElement.value]
    drawText()
}

function handleTransparentClick() {
    backgroundcolorElement.disabled = backgroundtransparentElement.checked;
    removeblackElement.disabled = backgroundtransparentElement.checked;
    drawText()
}

function handleTextInCircleClick() {
    circlexElement.disabled = !textincircleElement.checked;
    circleyElement.disabled = !textincircleElement.checked;
    circleradiusElement.disabled = !textincircleElement.checked;
    warningcircletextElement.style = textincircleElement.checked ? 'display: block': 'display:none'
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

function clearCustomCavasSize() {
    canvaswidthElement.value = 0;
    canvasheightElement.value = 0;
    canvastopElement.value = 0;
    canvasleftElement.value = 0;
    drawText();
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

    var x = 0;
    var y = 0;
    var lines = textarea.value.split('\n');
    var maxWidth = 0;
    var lineheight = 0;
    var spacing = letterSpacingElement.value + "px";

    let customCanvasWidth = Number(canvaswidthElement.value) || null
    let customCanvasHeight = Number(canvasheightElement.value) || null
    let customCanvasTop = Number(canvastopElement.value) || 0
    let customCanvasLeft = Number(canvasleftElement.value) || 0

    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext("2d");
    if (!smoothElement.checked) {
        // make canvas context render without antialiasing
        // ctx.filter = "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxmaWx0ZXIgaWQ9ImZpbHRlciIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj48ZmVDb21wb25lbnRUcmFuc2Zlcj48ZmVGdW5jUiB0eXBlPSJpZGVudGl0eSIvPjxmZUZ1bmNHIHR5cGU9ImlkZW50aXR5Ii8+PGZlRnVuY0IgdHlwZT0iaWRlbnRpdHkiLz48ZmVGdW5jQSB0eXBlPSJkaXNjcmV0ZSIgdGFibGVWYWx1ZXM9IjAgMSIvPjwvZmVDb21wb25lbnRUcmFuc2Zlcj48L2ZpbHRlcj48L3N2Zz4=#filter)";
        ctx.filter = "url(#remove-alpha)";
    }

    ctx.font = getFont();
    ctx.textBaseline = "top";
    ctx.letterSpacing = spacing;

    // find max line height and text width
    for (var i = 0; i < lines.length; i++) {
        let metrics = ctx.measureText(lines[i]);
        let linewidth = metrics.width
        let fontHeight = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent

        if (linewidth > maxWidth) maxWidth = linewidth
        if (fontHeight > lineheight) lineheight = fontHeight
    }

    maxWidth = Math.ceil(maxWidth)
    lineheight = Math.ceil(lineheight)

    const angle = Number(rotateElement.value) || 0
    const rotatedSize = getRotatedSize(maxWidth, lineheight, angle)

    let canvasWidth = customCanvasWidth || rotatedSize[0]+1
    let canvasHeight = customCanvasHeight || rotatedSize[1]+1

    // draw each line in canvas
    for (var i = 0; i < lines.length; i++) {
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext("2d");
        canvas.width = canvasWidth
        canvas.height = canvasHeight
        canvas.id = i;
        ctx.font = getFont();
        ctx.textBaseline = "Middle";
        ctx.letterSpacing = spacing;

        if (!backgroundtransparentElement.checked) {
            ctx.fillStyle = backgroundcolorElement.value
            ctx.fillRect(0, 0, canvas.width, canvas.height)
        }
        ctx.fillStyle = textcolorElement.value     
        
        if (!smoothElement.checked) ctx.filter = "url(#remove-alpha)";

        if (textincircleElement.checked) {
            ctx.textAlign = 'left';
            radius = Number(circleradiusElement.value) || 10
            startRotation = Number(rotateElement.value) || 0
            fillTextCircle(ctx, lines[i], radius, startRotation, Number(letterSpacingElement.value) | 0, maxWidth)
        } else {
            ctx.textAlign = alignElement.value;
            x = alignElement.value === 'center' ? maxWidth / 2 : alignElement.value === 'end' ? maxWidth : 0
            fillTextNormal(ctx, lines[i], rotatedSize, customCanvasLeft + x, customCanvasTop + y, maxWidth, angle)
        }


        if (!backgroundtransparentElement.checked && removeblackElement.checked) removeColor(ctx, canvas, backgroundcolorElement.value)

        canvasContainer.appendChild(canvas);
    }

    document.getElementById("lineHeight").innerHTML = canvasHeight;
    document.getElementById("lineWidth").innerHTML = canvasWidth;
}


function fillTextNormal(ctx, text, rotatedSize, x, y, maxWidth,  angle) {
    ctx.save();
    ctx.translate(rotatedSize[0] / 2, rotatedSize[1]/2)
    ctx.rotate(angle * (Math.PI / 180));
    let xToOrigin = x - maxWidth / 2
    ctx.fillText(text,  xToOrigin, y + 1);
    ctx.restore();
}


function fillTextCircle(ctx, text, radius, startRotation, spacing, maxWidth) {
    let customCenterX = Number(circlexElement.value) || 0
    let customCenterY = Number(circleyElement.value) || 0
    let x = (customCenterX!=0 || customCenterY!=0) ? customCenterX : ctx.canvas.width / 2
    let y = (customCenterX!=0 || customCenterY!=0) ? customCenterY : ctx.canvas.height / 2
    x += Number(canvasleftElement.value) || 0
    y += Number(canvastopElement.value) || 0
    ctx.save();
    ctx.translate(x, y);
    
    let textWidth = ctx.measureText(text).width;
    let startPadding = alignElement.value === 'center' ? ( maxWidth - textWidth) / 2  : alignElement.value === 'end' ? maxWidth - textWidth : 0;
    let startPaddingAngle = startPadding * 180 / (radius * Math.PI);

    ctx.rotate( (Math.PI / 180) * ( startRotation + startPaddingAngle));

    clockwise = 1 // 1 or -1

    for (var i = 0; i < text.length; i++) {
        ctx.save();
        let width = ctx.measureText(text[i]).width;
        ctx.fillText(text[i], 0, -1 * clockwise * radius);
        let sp = width + spacing;
        let spacingAngle = sp * 180 / (radius * Math.PI);
        ctx.rotate( Math.PI / 180 * clockwise * spacingAngle );
    }
    ctx.restore();
}

function getFont() {
    const fontSize = Number(fontSizeElement.value);
    const fontStyle = fontStyleElement.value;
    if (font) return fontStyle + ' ' + fontSize + 'px custom-font'
    else return `${fontStyle} ${fontSize}px "${fontBuiltInElement.value}"`;
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

async function downloadAll() {
    for (const node of canvasContainer.childNodes) {
        downloadCanvasAsImage(node)
        
        await pause(200)
    }
}

function downloadCanvasAsImage(canvas) {
    var image = canvas.toDataURL();
    var aDownloadLink = document.createElement('a');
    var prefix = prefixnameElement.value && prefixnameElement.value.length > 0 ? prefixnameElement.value + '_' : '';
    var sIndex = startindexElement.value && startindexElement.value.length > 0 ? (Number(startindexElement.value)) : 0;
    var num = pad(sIndex + Number(canvas.id), 4);
    var filename = '' + prefix + num + '.png';
    // Add the name of the file to the link
    aDownloadLink.download = filename;
    // Attach the data to the link
    aDownloadLink.href = image;
    // Get the code to click the download link
    aDownloadLink.click();
    // canvas.toBlob(function (blob) {
    //     var prefix = prefixnameElement.value && prefixnameElement.value.length > 0 ? prefixnameElement.value + '_' : '';
    //     var sIndex = startindexElement.value && startindexElement.value.length > 0 ? (Number(startindexElement.value)) : 0;
    //     var num = pad(sIndex + Number(canvas.id), 4);
    //     var filename = prefix + num + '.png'
    //     let downloadLink = document.createElement('a');
    //     console.log(downloadLink);
    //     downloadLink.setAttribute('download', filename);
    //     let url = URL.createObjectURL(blob);
    //     downloadLink.setAttribute('href', url);
    //     document.body.appendChild(downloadLink);
    //     downloadLink.click();
    //     document.body.removeChild(downloadLink);
    // });
}

function pause(msec) {
    return new Promise(
        (resolve, reject) => {
            setTimeout(resolve, msec || 1000);
        }
    );
}

function getRotatedSize(width, height, angle){
    angle = Math.abs(angle)
    if (angle == 0 || angle % 180 == 0) return [width, height]
    if (angle % 90 == 0) return [height, width]

    let w = width
    let h = height
    angle = angle % 180
    if (angle > 90) {
        h = width
        w = height
        angle = angle - 90
    }
    var radians = (Math.PI / 180) * angle
    let cos = Math.cos(radians)
    let sin = Math.sin(radians)
    return [  Math.ceil((w * cos) + (h * sin)), Math.ceil((w * sin) + (h * cos))]

}
