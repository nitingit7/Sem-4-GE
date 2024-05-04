// Accept a number from the user
let number = parseInt(prompt("Enter a number to generate its multiplication table:"));

// Check if the input is a valid number
if (!isNaN(number)) {
    // Print the multiplication table
    document.write("<h2>Multiplication Table of " + number + "</h2>");
    document.write("<table border='1'>");
    document.write("<tr><th>Number</th><th>Multiplier</th><th>Result</th></tr>");
    for (let i = 1; i <= 10; i++) {
        let result = number * i;
        document.write("<tr><td>" + number + "</td><td>" + i + "</td><td>" + result + "</td></tr>");
    }
    document.write("</table>");
} else {
    alert("Invalid input! Please enter a valid number.");
}
