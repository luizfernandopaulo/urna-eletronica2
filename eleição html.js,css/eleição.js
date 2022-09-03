
var somabolso =0

var somalula =0

var somacirio=0;

var somabranc = 0

var nulo = document.getElementById('resultbranco')

var res = document.getElementById('result02')


function inserir(valor) {
    var valor1 = document.getElementById("campo1").value;
    var valor2 = document.getElementById("campo2").value;

    if (valor1 == '') {
        document.getElementById("campo1").value = valor;
    } else if (valor2 == '') {
        document.getElementById("campo2").value = valor;
    }
}

function corrige() {
    document.getElementById("campo1").value = "";
    document.getElementById("campo2").value = "";
}

function Branco(){

    somabranc += 1
    nulo.innerHTML =`o candidado a presidente bolsonaro teve ${somabolso} votos <br>
    o candidado a presidente Lula ${somalula} votos <br>
    o candidado a presidente Ciro teve ${somacirio} votos <br>
    votos em branco foi ${somabranc}`

    
}

function votar() {

    var valor1 = parseInt(document.getElementById("campo1").value);
    var valor2 = parseInt(document.getElementById("campo2").value);
    var candidado = (valor1 * 10) + valor2


    var resultado = document.getElementById('result')
    var resultado1 = document.getElementById('result01')
    

    if(candidado === 17){
        somabolso += 1
        resultado.innerHTML='Você votou no Bolsonario'
        
    }else if(candidado === 13){
        somalula +=1
        resultado.innerHTML='Você votou no Lula'

    }else if(candidado === 16){
        somacirio += 1
        resultado.innerHTML='Você votou no Cirio'
    } else {
        resultado.innerHTML='[ERRO] tente novamente'
    }
    resultado1.innerHTML=` o candidado a presidente bolsonaro teve ${somabolso} votos <br>
    o candidado a presidente Lula ${somalula} votos <br>
    o candidado a presidente Ciro teve ${somacirio} votos `

    document.getElementById("campo1").value = "";
    document.getElementById("campo2").value = "";
}

function resultado(){
    var imagem = document.getElementById('imange')
    

    if(somabolso > somalula && somabolso > somacirio){
        res.innerHTML = `O Bolsonaro teve voto de ${somabolso}`
    } else if(somalula > somabolso && somalula > somacirio){
        res.innerHTML=`O Lula teve voto de ${somalula}`
    }else if(somacirio > somalula && somacirio > somabolso){
        res.innerHTML=`O Ciro teve voto de ${somacirio} e ganhou `
    }
}


    /*if (sessionStorage.getItem(candidado) !== null) {
        votos = parseInt(sessionStorage.getItem(candidado)) + 1;
        sessionStorage.setItem(candidado, votos);
    } else {
        sessionStorage.setItem(candidado, 1);
        
    }
    alert("Confirmado voto no candidato "+candidado)
    document.getElementById("campo1").value = "";
    document.getElementById("campo2").value = "";*/

