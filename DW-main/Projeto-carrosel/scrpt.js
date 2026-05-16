const imagens = [
    'imgs/1.jpg',
    'imgs/2.jpg',
    'imgs/3.jpg',
]

let indice = 0;

function mostrarSlide() {
    document.getElementById("imagem").src = imagens[indice];
}

function proximoSlide() {
    indice++;
    if(indice >= imagens.length){
        indice = 0
    }
    mostrarSlide()
}

function voltarSlide() {
    indice--;
    if(indice < 0){
        indice = imagens.length - 1
    }
    mostrarSlide()
}