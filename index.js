var numbers = [];
var operators = [];
var num = "";
var text = "";

$("button").click(function () {
    cacl(this.classList[1], this.classList[2]);
});

$(document).on('keydown', function (eve) {
    var key;
    if (eve.key === 'Enter') {
        key = '=';
    } else if (eve.key === 'Delete') {
        key = 'C';
    } else {
        key = eve.key;
    }
    var list = $('button:contains(' + key + ')')[0].classList;
    cacl(list[1], list[2]);
})

function results() {
    var result;
    var num1 = numbers[0];
    var num2 = numbers[1];
    var op = operators[0];

    switch (op) {
        case "+":
            result = num1 + num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "%":
            result = num1 % num2;
            break;
        default:

    }
    return result;
}

function cacl(class1, class2) {
    text = text + class1;
    $(".active").text(text);
    if (class2 !== "op") {
        num += class1;
    } else {
        numbers.push(Number(num));
        operators.push(class1);
        num = "";
    }
    if (class1 === 'equal') {
        var result = results();
        $(".history").text(String(numbers[0]) + " " + operators[0] + " " + String(numbers[1]) + " =");
        $(".active").text("");
        $(".active").text(result);
        text = String(result);
        num = String(result)
        numbers.length = 0;
        operators.length = 0;
    }
    if (class1 == 'del') {
        numbers.length = 0;
        operators.length = 0;
        $(".history").text("");
        $(".active").text("");
        num = "";
        text = "";
    }
}