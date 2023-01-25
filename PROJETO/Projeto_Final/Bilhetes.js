var quantidade = document.getElementById("quantidades");
var total = document.getElementById("total");

var precobilhete1 = parseFloat(document.getElementById("precobilhete1").value);
var precobilhete2 = parseFloat(document.getElementById("precobilhete2").value);
var precobilhete3 = parseFloat(document.getElementById("precobilhete3").value);
var precobilhete4 = parseFloat(document.getElementById("precobilhete4").value);
var precobilhete5 = parseFloat(document.getElementById("precobilhete5").value);
var precobilhete6 = parseFloat(document.getElementById("precobilhete6").value);


var bilhete1 = parseFloat(document.getElementById("bilhete1").value);
var bilhete2 = parseFloat(document.getElementById("bilhete2").value);
var bilhete3 = parseFloat(document.getElementById("bilhete3").value);
var bilhete4 = parseFloat(document.getElementById("bilhete4").value);
var bilhete5 = parseFloat(document.getElementById("bilhete5").value);
var bilhete6 = parseFloat(document.getElementById("bilhete6").value);

var somabilhetes = bilhete1 + bilhete2 + bilhete3 + bilhete4 + bilhete5 + bilhete6;
var precoTotal = bilhete1 * precobilhete1 + bilhete2 * precobilhete2 + bilhete3 * precobilhete3 + bilhete4 * precobilhete4 + bilhete5 * precobilhete5 + bilhete6 * precobilhete6;

function calcular() {

    var precobilhete1 = parseFloat(document.getElementById("precobilhete1").value);
    var precobilhete2 = parseFloat(document.getElementById("precobilhete2").value);
    var precobilhete3 = parseFloat(document.getElementById("precobilhete3").value);
    var precobilhete4 = parseFloat(document.getElementById("precobilhete4").value);
    var precobilhete5 = parseFloat(document.getElementById("precobilhete5").value);
    var precobilhete6 = parseFloat(document.getElementById("precobilhete6").value);

    var bilhete1 = parseFloat(document.getElementById("bilhete1").value);
    var bilhete2 = parseFloat(document.getElementById("bilhete2").value);
    var bilhete3 = parseFloat(document.getElementById("bilhete3").value);
    var bilhete4 = parseFloat(document.getElementById("bilhete4").value);
    var bilhete5 = parseFloat(document.getElementById("bilhete5").value);
    var bilhete6 = parseFloat(document.getElementById("bilhete6").value);

    var somabilhetes = bilhete1 + bilhete2 + bilhete3 + bilhete4 + bilhete5 + bilhete6;
    var precoTotal = bilhete1 * precobilhete1 + bilhete2 * precobilhete2 + bilhete3 * precobilhete3 + bilhete4 * precobilhete4 + bilhete5 * precobilhete5 + bilhete6 * precobilhete6;

    quantidade.innerText = somabilhetes;
    total.innerText = precoTotal.toFixed(2);
}

function comprar(number) {
    console.log("ww")
    var bilhete = document.getElementById("bilhete" + number);
    var x = parseFloat(bilhete.value) + 1;
    var element = document.getElementById("btn_send");
    
    element.classList.remove('disabled');
    element.classList.add('enabled');
    bilhete.value = x.toString();

    calcular();

}

function validar() {
    var btn = document.getElementById("btn_send");
    var myclass = ".enabled";

    if (btn.matches(myclass)) {
        window.location.href = "Formulario.html";
    }
    else {
        alert("erro");
    }
}


function limpar() {
    console.log("w1")
    var element = document.getElementById("btn_send");
    for (var i = 1; i <= 6; i++) {
        var x = document.getElementById("bilhete" + i);
        x.value = "0";

    }
    element.classList.remove('enabled');
    element.classList.add('disabled');
    quantidade.innerText = 0;
    total.innerText = "0.00";

}

function butao() {
    var quantidade = parseFloat(document.getElementById("quantidades").value);
    var element = document.getElementById("btn_send");
    console.log("www", quantidade);
    if (quantidade != 0) {
        btn_send.className = "btn btn-danger enabled";
    } 
}