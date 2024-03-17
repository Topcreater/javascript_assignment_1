document.getElementById("button 1").onclick = function () {
    let a = prompt("Enter your name:");

    alert(a)
    let statement = a
    document.getElementById("original").innerHTML = statement
    document.getElementById('output').innerHTML = ""
}
document.getElementById("button 2").onclick = function () {
    let a = parseFloat(prompt("Enter the number:"));
    alert(a)
    let statement = a
    document.getElementById("original").innerHTML = statement
    document.getElementById('output').innerHTML = ""
}
document.getElementById("button 3").onclick = function () {
    let statement = "Name"
    document.getElementById('original').innerHTML = statement
    document.getElementById('output').innerHTML = " "

}
document.getElementById("button 4").onclick = function () {
    document.getElementById('original').innerHTML = "thisIsCamelCase"
    document.getElementById('output').innerHTML = ""

}
document.getElementById("button 5").onclick = function () {

    let a = parseFloat(prompt("Enter the first number:"));
    let b = parseFloat(prompt("Enter the second number:"));
    c = a + b
    console.log(c)

    document.getElementById('original').innerHTML = "let a=" + a + ";<br> let b= " + b + ";<br> Sum= a+b;"
    document.getElementById('output').innerHTML = "Sum=" + c

}
document.getElementById("button 6").onclick = function () {

    let a = parseFloat(prompt("Enter the first number:"));
    let b = parseFloat(prompt("Enter the second number:"));
    c = a - b
    console.log(c)

    document.getElementById('original').innerHTML = "let a=" + a + ";<br> let b= " + b + ";<br> Subtract= a-b;"
    document.getElementById('output').innerHTML = "Subtract=" + c

}
document.getElementById("button 7").onclick = function () {

    let a = parseFloat(prompt("Enter the first number:"));
    let b = parseFloat(prompt("Enter the second number:"));
    c = a * b
    console.log(c)

    document.getElementById('original').innerHTML = "let a=" + a + ";<br> let b= " + b + ";<br> Multiply= a*b;"
    document.getElementById('output').innerHTML = "Multiply=" + c

}
document.getElementById("button 8").onclick = function () {

    let a = parseFloat(prompt("Enter the first number:"));
    let b = parseFloat(prompt("Enter the second number:"));
    c = a / b
    console.log(c)

    document.getElementById('original').innerHTML = "let a=" + a + ";<br> let b= " + b + ";<br> Divide= a/b;"
    document.getElementById('output').innerHTML = "Divide=" + c

}
document.getElementById("button 9").onclick = function () {

    let a = parseFloat(prompt("Enter the first number:"));
    let b = parseFloat(prompt("Enter the second number:"));
    let c = parseFloat(prompt("Enter the third number:"));
    let d = parseFloat(prompt("Enter the fourth number:"));
    let e = parseFloat(prompt("Enter the fifth number:"));
    f = a / b + c - d * e
    console.log(c)

    document.getElementById('original').innerHTML = "let a=" + a + ";<br> let b= " + b + ";<br> let c= " + c + ";<br> let d= " + d + ";<br> let e= " + e + ";<br> Calculate= a/b+c-d*e;"
    document.getElementById('output').innerHTML = "Calculate=" + f

}
document.getElementById("clear s").onclick = function () {
    document.getElementById("original").innerHTML = ""
}
document.getElementById("clear o").onclick = function () {
    document.getElementById("output").innerHTML = ""
}