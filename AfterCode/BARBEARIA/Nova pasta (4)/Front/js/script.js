
var elemento = document.getElementById('elemento');
elemento.innerHTML = 'Ola mundo';

var cor = document.querySelector('.container h1');

cor.style.color = 'white';
cor.style.fontSize = '200px';
cor.style.backgroundColor = 'PURPLE';
cor.style.height = '450px';
cor.style.margin = '80px'
cor.style.padding = '80px'
cor.style.float = 'left';
cor.style.border = '40px solid black'

function mostrarMensagem() {
    document.getElementById('mensagem').innerHTML = 'Ola, mundoo';
    document.getElementById('number1 +').innerHTML = soma;
}

function texto(){
    const texto = document.querySelector('#campo');
    console.log(texto.value)
    alert(texto.value)
}

function somar(){
    let num1 = parseInt(document.querySelector('#num1').value);
    let num2 = parseInt(document.querySelector('#num2').value);

    alert(num1 + num2);
}

function mostrar(){
    var pintoLongo = document.getElementById('elementoOculto');
    if(pintoLongo.style.display === 'none'){
        pintoLongo.style.display = 'block';

    } else {
        pintoLongo.style.display = 'none' ;
    }
   
}

function trocaTema(){
    let body = document.body;

    if(body.classList.contains('theme-light')){
        body.classList.remove('theme-light')
        body.classList.add('theme-dark');
    } else {
        body.classList.remove('theme-dark');
        body.classList.add('theme-light');
    }
}

function keyPress(event){
    var tecla = document.getElementById('ultimaTecla');

    if(event.key){
        tecla.textContent = event.key;
    } else {
        tecla.textContent = "Tecla sem valor identificado"
    }
}

document.addEventListener('keydown',keyPress)

function atualizarRelogio(){
    var relogio = document.getElementById('relogio');
    var agora = new Date()
    var dat = agora.getDate();
    var hrs = agora.getHours();
    var min = agora.getMinutes();
    var seg = agora.getSeconds();

    //formatar a hora, minuto e segundos para exibir na tela
    var data = dat.toString()
    var hora = hrs.toString().padStart(2, '0');
    var minuto = min.toString().padStart(2, '0');
    var segundo = seg.toString().padStart(2, '0');
    
    //atualizar o elemento
    relogio.textContent = data + hora + ':' + minuto + ':' + segundo;
}

setInterval(atualizarRelogio,1000);

atualizarRelogio();

