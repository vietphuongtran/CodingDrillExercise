//alert("hello World")
//3 steps problem:
//1. capture how many lines are needed
//2. depend on number of lines populate the form field
//3. Capture the value in the form field and decode the message
//3.1 Make it work for 1 input field
//3.2 Put it inside a loop and make it work for more than 1 input field
window.onload = pageReady;
function pageReady () {
    let formHandle = document.forms[0];
    console.log(formHandle);
    formHandle.onsubmit = processForm;
    function processForm() {
        //capture how many lines needed first
        var line = parseInt(document.getElementById("line").value);
        var info = document.getElementById('info');
        console.log (line);
        //depend on the number of lines provided pop up the line in the form
        for (var i=1; i<= line; i++) {
            var formHandle2 = document.forms[1];
            formHandle2.style.display = "block";
            var info = document.getElementById('info');
            //still 1 here
            console.log(i);
            info.innerHTML +=
                //print put testing line first
                //"<div>print " + i + " line";
                "<div>" +
                "<label>Input number " + i +" </label>" +
                "<input type=number class='number' id='number" + i + "'>"+
                "<label> Input symbol " + i +" </label>" +
                "<input type=text class=symbol id=text"  + i + ">"+
                "</div>";
            //it's still 1 here
            console.log(i);
            formHandle2.onsubmit = processForm2;
            function processForm2() {
                //i should be 1 when I enter 1 line but when I console.log(i) it is 2???
                console.log(i);
                console.log("number" + i);
                console.log(document.getElementById("number" + (i-1)).value);
                //Capture the value in the form field and decode the message
                var number = parseInt(document.getElementById("number" + (i-1)).value);
                var symbol = document.getElementById("text" + (i-1)).value;
                console.log(symbol);
                var finalResult = document.getElementById('finalresult');
                //one line complete
                //need to do it for other lines
                //solution: nested for loop?
                // for (var i = 1; i <= line; i++) {
                //     //create the div depends on how many lines needed
                //     //append the line with the symbol
                //     document.createElement("div"+i);
                //     finalResult.appendChild("div"+i);
                // }
                //The code is working for 1 line
                for (var j = 1; j <= number; j ++) {
                    finalresult.innerHTML += symbol;
                }
                return false;
            }
        }
        return false;
    }
}