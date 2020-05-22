//alert("hello World")
//3 steps problem:
//1. capture how many lines are needed
//2. depend on number of lines populate the form field
//3. Capture the value in the form field and decode the message
//3.1 Make it work for 1 input field
//
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
        var i;
        //depend on the number of lines provided pop up the line in the form
        for (i=1; i<= line; i++) {
            var formHandle2 = document.forms[1];
            formHandle2.style.display = "block";
            var info = document.getElementById('info');
            info.innerHTML +=
                //print put testing line first
                //"<div>print " + i + " line";
                "<div>" +
                "<label>Input number " + i +" </label>" +
                "<input type=number class='number' id='number" + i + "'>"+
                "<label> Input symbol " + i +" </label>" +
                "<input type=text class=symbol id=text"  + i + ">"+
                "</div>";
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
                var j;
                for (j = 1; j <= number; j ++) {
                    finalResult.innerHTML += symbol;
                }
                return false;
            }
        }
        return false;
    }
}