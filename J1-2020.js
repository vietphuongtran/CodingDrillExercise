//alert("hello world")
window.onload = pageReady;
function pageReady () {
    let formHandle = document.forms[0];
    console.log(formHandle);
    formHandle.onsubmit = processForm;
    function processForm () {
        //var small = document.getElementById("small");
        //let S = parseInt(small.value);
        //factoring the code
        let S = parseInt(document.getElementById("small").value);
        var errorMsg = document.getElementById('errorMsg');
        //problem1: although I have type="number" the console still understand it's a string.
        //solution1: use parseInt
        //parseInt turn strings into number otherwise it would be concatenated all the number into the result
        //problem2: handle empty string

        console.log(S);
        let M = parseInt(document.getElementById("medium").value);
        console.log(M);
        let L = parseInt(document.getElementById("large").value);
        console.log(L);
        if (isNaN(S) || isNaN(M) || isNaN(L)) {
            errorMsg.innerHTML = "*Field required";
            return false;
        } else {
            errorMsg.innerHTML = "";
            var result = document.getElementById("result");
            var happiness = S + 2 * M + 3 * L;
            console.log(happiness);
            if (happiness < 10) {
                result.innerHTML = "sad";
            } else {
                result.innerHTML = "happy";
            }
            return false;
        }

    }

}
