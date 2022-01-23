/*var square = document.getElementById("square");
square.addEventListener("click", function () {
    var x = document.getElementById("div_indice");
    var text1 = document.getElementById("subtitulos_indice1");
    var text2 = document.getElementById("subtitulos_indice2");
    var text3 = document.getElementById("subtitulos_indice3");
    var text4 = document.getElementById("subtitulos_indice4");
    console.log(x.style.width);
    if (x.style.width === "100vw") {
        console.log("adeus");
        x.style.width = "0px";
        x.style.height = "0px";
        square.style.backgroundColor = "black";
            text1.style.opacity = "0%";
            text2.style.opacity = "0%";
            text3.style.opacity = "0%";
            text4.style.opacity = "0%";
    } else {
        console.log("ola");
        x.style.width = "100vw";
        x.style.height = "100vh";
        square.style.backgroundColor = "white";
            text1.style.opacity = "100%";
            text2.style.opacity = "100%";
            text3.style.opacity = "100%";
            text4.style.opacity = "100%";
    }
});*/

//IMAGENS HOVER ARTIGO 2
var imagem1 = document.getElementById("image1");
var legenda1 = document.getElementById("legenda1");
imagem1.addEventListener("mouseover", function () {
    legenda1.style.display = "block";
});
imagem1.addEventListener("mouseout", function () {
    legenda1.style.display = "none";
});

var imagem2 = document.getElementById("image2");
var legenda2 = document.getElementById("legenda2");
imagem2.addEventListener("mouseover", function () {
    legenda2.style.display = "block";
});
imagem2.addEventListener("mouseout", function () {
    legenda2.style.display = "none";
});

var imagem3 = document.getElementById("image3");
var legenda3 = document.getElementById("legenda3");
imagem3.addEventListener("mouseover", function () {
    legenda3.style.display = "block";
});
imagem3.addEventListener("mouseout", function () {
    legenda3.style.display = "none";
});

var imagem4 = document.getElementById("image4");
var legenda4 = document.getElementById("legenda4");
imagem4.addEventListener("mouseover", function () {
    legenda4.style.display = "inline-block";
});
imagem4.addEventListener("mouseout", function () {
    legenda4.style.display = "none";
});

//SETAS ARTIGOS
const element = document.querySelector('#div_artigo1');
const trigger = document.querySelector('#seta1');
trigger.addEventListener('click', () => {
    // Scroll to the element with smooth scroll behavior
    element.scrollIntoView({ behavior: 'smooth' });
});

const element2 = document.querySelector('#div_artigo2');
const trigger2 = document.querySelector('#seta2');
trigger2.addEventListener('click', () => {
    // Scroll to the element with smooth scroll behavior
    element2.scrollIntoView({ behavior: 'smooth' });
});

//BARRA LATERAL
const homepage = document.querySelector('#homepage');
const homepage_barra = document.querySelector('#homepage_barra');
homepage_barra.addEventListener('click', () => {
    // Scroll to the element with smooth scroll behavior
    homepage.scrollIntoView({ behavior: 'smooth' });
});

const editorial = document.querySelector('#editorial');
const editorial_barra = document.querySelector('#editorial_barra');
editorial_barra.addEventListener('click', () => {
    // Scroll to the element with smooth scroll behavior
    editorial.scrollIntoView({ behavior: 'smooth' });
});

const carroussel_artigo1 = document.querySelector('#carroussel_artigo1');
const artigos_barra = document.querySelector('#artigos_barra');
artigos_barra.addEventListener('click', () => {
    // Scroll to the element with smooth scroll behavior
    carroussel_artigo1.scrollIntoView({ behavior: 'smooth' });
});

const div_artigo1 = document.querySelector('#div_artigo1');
const artigo1_barra = document.querySelector('#artigo1_barra');
artigo1_barra.addEventListener('click', () => {
    // Scroll to the element with smooth scroll behavior
    div_artigo1.scrollIntoView({ behavior: 'smooth' });
});

const div_artigo2 = document.querySelector('#div_artigo2');
const artigo2_barra = document.querySelector('#artigo2_barra');
artigo2_barra.addEventListener('click', () => {
    // Scroll to the element with smooth scroll behavior
    div_artigo2.scrollIntoView({ behavior: 'smooth' });
});


var isInViewport = function (elem) {
    var distance = elem.getBoundingClientRect();
    return (
        distance.top >= 0 &&
        distance.left >= 0 &&
        distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

var typeface_page = document.querySelector('#typeface_page');

typeface_page.addEventListener('mouseover', function (event) {
    console.log('olá');
    if (isInViewport(div_imagem1)) {
        var textoisa = document.getElementsByClassName("textosobreanimacaoisa");
        var imagem1 = document.querySelector("#image1");
        imagem1.style.opacity = "1";
        for (let i = 0; i < textoisa.length; i++) {
            textoisa[i].style.position = "absolute"
            textoisa[i].style.left = "0";
            textoisa[i].style.bottom = "0";
        }
        console.log('Está na janela Isa');
    }
    else {
        console.log('Não');
    }
}, false);


