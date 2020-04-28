var numbers = [];
var operators = [];
var num = "";
var text = "";

// var conv = {'one': '1','two': '2','three': '3','four': '4','five': '5','six': '6','seven': '7','eight': '8','nine': '9'};

$("button").click(function () {
    text = text + this.classList[1];
    $(".active").text(text);
    if (this.classList[2] !== "op") {
        num += this.classList[1];
    } else {
        numbers.push(Number(num));
        operators.push(this.classList[1]);
        num = "";
    }
    if (this.classList[1] === 'equal') {
        var result = results();
        $(".history").text(String(numbers[0]) + " " + operators[0] + " " + String(numbers[1]) + " =");
        $(".active").text("");
        $(".active").text(result);
        text = String(result);
        num = String(result)
        numbers.length = 0;
        operators.length = 0;
    }
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