var output = document.querySelector("#outputTable");
var input = document.querySelector("#inputTable");
var tablePrint = document.querySelector("#tablePrint");

function prinTable() {
    tablePrint.innerHTML = "";
    output.innerHTML = "<h2 class='table-h2'>Your Printed Table Here!</h2>"
    for (var i = 1; i <= 10; i++) {
        output.innerHTML += `${input.value} x  ${i} =  ${i * +input.value} <br />`
    }
}