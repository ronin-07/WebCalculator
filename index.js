var numbers = [];
var operators = [];
var num = "";
var countOp = 0;

var conv = {
    'one': '1',
    'two': '2',
    'three': '3',
    'four': '4',
    'five': '5',
    'six': '6',
    'seven': '7',
    'eight': '8',
    'nine': '9'
};

$("button").click(function () {
    if (this.classList[1] !== "op") {
        num += conv[this.classList[1]];
    } else {
        countOp++;
        numbers.push(Number(num));
        operators.push(this.classList[2]);
        num = "";
    }
    if (this.classList[2] === 'equal') {
        $(".history").text(String(numbers[0]) + " " + operators[0] + " " + String(numbers[1]) + " =");
        $(".active").text(results());
        $("button").off();
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