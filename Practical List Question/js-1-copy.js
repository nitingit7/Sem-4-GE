let number = parseInt(prompt("enter the number: "));

if (!isNaN(number)){
    document.write("<h2>The Multiplication of" + number + "is</h2>");
    document.write("<table border = '1px'>");
    document.write("<tr><th>Number</th><th>Multiplier</th><th>Result</th></tr>");
    for (let i = 1; i <= 10; i++){
        let result = number*i;
        document.write("<tr><td>" + number + "</td><td>" + i + "</td><td>" + result + "</td></tr>");
    }
    document.write("</table>");
} else{
    alert("enter the valid number")
}