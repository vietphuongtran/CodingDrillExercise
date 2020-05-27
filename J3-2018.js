/*0 3 13 25 30
Data          The pattern:
3 0 10 22 27: |3-0| |3-3| |3-13| |3-25| |3-30|
13 10 0 12 17: |13-0| |13-3| |13-13| |13-25| |13-30|
25 22 12 0 5: ....
30 27 17 5 0: ....

Step 1: get the first line of result using sum of an array
Step 2: grab that first line of result to produce the 2nd line
Step 3: produce the 2nd line of result
Step 4: use nested for loop produce the other lines
*/
window.onload = pageReady;
function pageReady () {
    let formHandle = document.forms[0];
    console.log(formHandle);
    formHandle.onsubmit = processForm;
    function processForm() {
            /*var number0 = parseInt(document.getElementById("number0").value);
            var number1 = parseInt(document.getElementById("number1").value);
            var number2 = parseInt(document.getElementById("number2").value);
            var number3 = parseInt(document.getElementById("number3").value);
            var number4 = parseInt(document.getElementById("number4").value);*/
            //get all number as an array
            var number = document.getElementsByClassName("number");
            var numbers = [];
            var sum = 0;
            var finalresult = document.getElementById("finalresult")
            var finalresult2 = document.getElementById("finalresult2")
            for (var i = 0; i <=4; i++) {
                //push the number in the array one by one
                numbers.push(parseInt(number[i].value));
                //sum each by each
                sum += numbers[i];
                finalresult.innerHTML += sum + ' ';
            }
            //grab the finalresult and turn it into an array
            //split by " "
            var allSum = finalresult.innerHTML.split(" ");
            var allSumInt = [];
            //the array is now strings turn it into a number by parseInt
            for (var j = 0; j <=4; j++) {
                allSumInt.push(parseInt(allSum[j]));
            }
            console.log(allSumInt);
            //print all the result
            for (var h=1; h<=4; h++) {
                finalresult2.innerHTML += "<div>";
                //print just no.2 line of the result
                for (var k = 0; k <=4; k++) {
                    //Math.abs() return the absolute value of a number.
                    finalresult2.innerHTML += Math.abs(allSumInt[h] - allSumInt[k]) + ' ' + "</div>";
                }
            }
        return false;
    }

}