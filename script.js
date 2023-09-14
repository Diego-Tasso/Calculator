var pressionado;
function insert (num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
    pressionado = false;
}

function insertSinal (num) {
    if (pressionado == false) {
        var numero = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = numero + num;
        pressionado = true;
    }
}

function insertPonto (num) {
    if (pressionado == false) {
        var numero = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = numero + num;
        pressionado = true;
    }
}

function clean () {
    document.getElementById ('resultado').innerHTML = "";
    pressionado = false;
}

function back () {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById ('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular () {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval (resultado);
        if (resultado.length >= 14) {
            document.getElementById('resultado').style.fontSize = '16px';
            if (resultado.lenght >= 22) {
                document.getElementById ('resultado').innerHTML = "Limite de números alcançado.";
            }
        }
        else if (resultado.length <= 14) {
            document.getElementById('resultado').style.fontSize = '25px';
        }
    }
    else {
        document.getElementById('resultado').style.fontSize = '10px';
        document.getElementById('resultado').innerHTML = "Nada para calcular..."
        if (resultado.length >= 14) {
            document.getElementById('resultado').style.fontSize = '16px';
            if (resultado.lenght >= 22) {
                document.getElementById ('resultado').innerHTML = "Limite de números alcançado.";
            }
        }
        else if (resultado.length <= 14) {
            document.getElementById('resultado').style.fontSize = '25px';
        }
    }
}