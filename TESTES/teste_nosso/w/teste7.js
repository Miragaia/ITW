function valida() {
    console.log("CALL: valida()");
    var value = true;

    x = nome.value.trim();
    z1 = sexomasculino.value;
    z2 = sexofeminino.value;
    t = nascimento.value;

    if (x.length < 3) {
        nome_error.style.display = "block";
        value = false;
    }

    if (document.getElementById("field_31").checked == false && document.getElementById("field_32").checked == false) {
        sexo_error.style.display = "block";
        value = false;
    }

    if (t == "") {
        nascimento_error.style.display = "block";
        return false;
    }

    if ( 0< document.getElementById("field_51").checked.value < 21) {
        alga_error.style.display = "block";
        value = false;
    }

    if (0 < document.getElementById("field_51").checked.value < 21) {
        ef_error.style.display = "block";
        value = false;
    }

    if (0 < document.getElementById("field_51").checked.value < 21) {
        calculo_error.style.display = "block";
        value = false;
    }

    if (0 < document.getElementById("field_51").checked.value < 21) {
        itw_error.style.display = "block";
        value = false;
    }

    if (0 < document.getElementById("field_51").checked.value < 21) {
        fp_error.style.display = "block";
        value = false;
    }
    return value;
}


function limpa() {
    console.log("CALL: limpa()");
    nome_error.style.display = "none";
    ultimonome_error.style.display = "none";
    sexo_error.style.display = "none";
    nascimento_error.style.display = "none";
    disciplinas_error.style.display = "none";
}

function media(x1,x2,x3,x4,x5) {
    console.log("CALL: media()");
    var me = ((x1 + x2 + x3 + x4 + x5) / 5)
    return me
}

function soma(x1, x2, x3, x4, x5) {

    return x1 + x2 + x3 + x4 + x5;
}





var nome = document.getElementById("fld_1");
var sexomasculino = document.getElementById("field_21");
var sexofeminino = document.getElementById("field_22");
var nascimento = document.getElementById("field_4");
var alga = document.getElementById("field_51");
var ef = document.getElementById("field_52");
var calculo = document.getElementById("field_53");
var itw = document.getElementById("field_54");
var fp = document.getElementById("field_55");


var nome_error = document.getElementById("field_1_Error");
var ultimonome_error = document.getElementById("field_2_Error");
var sexo_error = document.getElementById("field_3_Error");
var nascimento_error = document.getElementById("field_4_Error");
var alga_error = document.getElementById("field_51_Error");
var ef_error = document.getElementById("field_52_Error");
var calculo_error = document.getElementById("field_53_Error");
var itw_error = document.getElementById("field_54_Error");
var fp_error = document.getElementById("field_55_Error");

var x1 = (parseFloat(document.getElementById("field_51"));
var x2 = (parseFloat(document.getElementById("field_52"));
var x3 = (parseFloat(document.getElementById("field_53"));
var x4 = (parseFloat(document.getElementById("field_54"));
var x5 = (parseFloat(document.getElementById("field_55"));

