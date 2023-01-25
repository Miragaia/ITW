function validar() {
    var retVal = true;
    var Nome = document.getElementById("Nome").value.trim();
    var Morada = document.getElementById("Morada").value.trim();
    var Telemovel = document.getElementById("Telemovel").value.trim();
    var palavrasArray = Morada.split('');
    var check = document.getElementById("check").value
    if (Nome.length < 3) {
        retVal = false;
        document.getElementById("e1").style.display = "block";
    }

    if (palavrasArray.length < 3) {
        retVal = false;
        document.getElementById("e3").style.display = "block";
    }

    if (Telemovel.length < 9) {
        retVal = false;
        document.getElementById("e2").style.display = "block";
    }

    if (document.dados.pagamento[0].check == false && document.dados.pagamento[1].check == false && document.dados.pagamento[2].check == false ) {
        retVal = false;
        document.getElementById("e4").style.display = "block";
    }

    return retVal;
}

function limpar() {
    var Nome = document.getElementById("Nome").value.trim();
    var Morada = document.getElementById("Morada").value.trim();
    var Telemovel = document.getElementById("Telemovel").value.trim();
    var check = document.getElementById("check").value
    var palavrasArray = Morada.split('');

    document.getElementById("e1").style.display = "none";
    document.getElementById("e2").style.display = "none";
    document.getElementById("e3").style.display = "none";
    document.getElementById("e4").style.display = "none";

}

