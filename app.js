var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

//outputDiv.innerText= "I am preethi"

//console.log(innerTxt);



function clickHandler() {
        outputDiv.innerText = "ajjjjj " +txtInput.value;
       
    };

    btnTranslate.addEventListener("click",clickHandler)
