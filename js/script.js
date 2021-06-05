function num1() {
    let x = parseFloat(document.getElementById("val").value);
    let y;
    if (x <= -3) {
        y = Math.sin(x) + Math.tan(x);
    } else if (x <= 4) {
        y = 2;
    } else {
        y = Math.sqrt(x ** 3) - Math.cos(x);
    }
    document.getElementById("result1").innerHTML = "Результат: " + y.toFixed(5);
}

function num2() {
    let x = parseFloat(document.getElementById("x").value);
    let y = parseFloat(document.getElementById("y").value);
    const rad = 2;
    let dif = Math.hypot(rad - x, rad - y);
    // y1 = 2 - x
    // y2 = 4 - x
    if ((x <= 2 - y && y <= 2 - x && dif <= rad) || (x >= 4 - y && y >= 4 - x && dif <= rad)) {
        document.getElementById("result2").innerHTML = "Попадает";
    } else {
        document.getElementById("result2").innerHTML = "Не попадает";
    }
}

function num3(myForm) {
    let tugriks = parseInt(document.getElementById("val2").value);
    let div1 = parseInt(tugriks / 15); // Количество тугриков
    let div2 = tugriks % 15; // Остаток рублей
    let rub = "";
    let tug = "";
    let m1;
    if (div1 >= 10 && div1 <= 20) {
        tug = "тугриков";
    } else {
        m1 = div1 % 10; // Определение последней цифры
        switch (m1) {
            case 1:
                tug = "тугрик";
                break;
            case 2: 
            case 3: 
            case 4:
                tug = "тугрика";
                break;
            default:
                tug = "тугриков";
                break;
        }
    }
    if (div2 >= 10 && div2 <= 20) {
        rub = "рублей";
    } else {
        m1 = div2 % 10; // Определение последней цифры
        switch (m1) {
            case 1:
                rub = "рубль";
                break;
            case 2: 
            case 3: 
            case 4:
                rub = "рубля";
                break;
            default:
                rub = "рублей";
                break;
        }
    }
    document.getElementById("result3").innerHTML = "Результат: " + div1 + " " + tug + " " + div2 + " " + rub;
}

function num4() {
    let score = 0;
    if (document.getElementById("radio-correct").checked) {
        score++;
    }
    if (document.getElementById("checkbox-correct-1").checked && document.getElementById("checkbox-correct-2").checked && document.getElementById("checkbox-incorrect-3").checked == false && document.getElementById("checkbox-incorrect-4").checked == false) {
        score++;
    }
    let select = document.getElementById("select1");
    if (select.options[select.selectedIndex].value == 2) {
        score++;   
    }
    select = document.getElementById("select2");
    let opt;
    let tmp = 0;
    for (let i = 0; i < select.options.length; i++) {
        opt = select.options[i];
        if (opt.selected) {
            if (opt.value == 3 || opt.value == 4) {
                tmp++;
            } else {
                tmp--;
            }
        }
    }
    if (tmp == 2) {
        score++;
    }
    if (document.getElementById("vop5").value.toUpperCase() == "FORM" || document.getElementById("vop5").value.toUpperCase() == "<FORM>") {
        score++;
    }
    document.getElementById("result4").innerHTML = "Результат: " + score + " баллов";
}
