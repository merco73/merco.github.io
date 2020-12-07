
// PRELOAD WEB
window.onload = function(){
    jQuery('#preloader').fadeOut('slow');
  }


//Particulas
var typed = new Typed('.animate', {
    strings:[ 
      "Web Developer",
      "UI/UX Developer",
      "Graphic Designer"
    ],
    typeSpeed:30,
    backSpeed:30,
    backDelay: 2000,
    cursorChar: '|',
    loop:true
  });


//Carga de partes
window.addEventListener('scroll', function(){
    let skHtml = document.getElementById('skHtml');
    let skCss = document.getElementById('skCss');
    let skJs = document.getElementById('skJs');
    let skWord = document.getElementById('skWord');
    let skPhp = document.getElementById('skPhp');
    let skSql = document.getElementById('skSql');


    let posicionObj1=skSql.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamañoDePantalla = window.innerHeight/1;

    if(posicionObj1 < tamañoDePantalla){
        //animacion.style.animation = 'mover 1s ease-out'
        //HTML
        skHtml.style.animation = 'skHtml 2s';
        skHtml.style.width = '90%';

        //CSS
        skCss.style.animation = 'skCss 2s';
        skCss.style.width = '85%';


        //JS
        skJs.style.animation = 'skJs 2s';
        skJs.style.width = '75%';


        //WP
        skWord.style.animation = 'skWord 2s';
        skWord.style.width = '95%';

        //PHP
        skPhp.style.animation = 'skPhp 2s';
        skPhp.style.width = '75%';
        
        //SQL
        skSql.style.animation = 'skSql 2s';
        skSql.style.width = '85%';

        
    }
})



//Efecto Counter

$(document).ready(function(){
  $(".counter").counterUp({
    delay: 10,
    time: 1200
  });
});