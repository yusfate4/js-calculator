var opr = prompt("Choose your operator: ")
var num1 = parseInt(prompt("Your first number is: "))
var num2 = parseInt(prompt("Your second number is: "))

    if(opr == '+')
    {
        console.log(num1 + num2 )
        alert(num1 + num2 )
    }
    else if(opr == '-'){
        console.log(num1 - num2 )
        alert(num1 - num2 )
    }
    else if(opr == '*'){
        console.log(num1 * num2 )
        alert(num1 * num2 )
    }
    else if(opr == '/') {
        console.log(num1 / num2 )
        alert(num1 / num2 )
    }