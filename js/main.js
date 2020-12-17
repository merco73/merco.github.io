
// PRELOAD WEB
window.onload = function(){
    jQuery('#preloader').fadeOut('slow');
  }


//Particulas
var typed = new Typed('.animate', {
    strings:[ 
      "Web Developer",
      "UI/UX Developer",
      "Front End Developer"
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



//My experience Texto
//const trunc = document.querySelector('.p-trunc');
//trunc.innerText = trunc.innerText.substring(0,80)




//Anclas Efecto scroll 
$(document).ready(function() {
  $('a[href^="#"]').click(function() {
    var destino = $(this.hash);
    if (destino.length == 0) {
      destino = $('a[name="' + this.hash.substr(1) + '"]');
    }
    if (destino.length == 0) {
      destino = $('html');
    }
    $('html, body').animate({ scrollTop: destino.offset().top }, 500);
    return false;
  });
});



//Anclas Efecto scroll 






//Ajax Form
$(document).ready(function(){
  $('#submit-btn').click(function(event){
    event.preventDefault();
     $.ajax({
        dataType: 'JSON',
        url: 'sendmail.php',
        type: 'POST',
        data: $('#contact').serialize(),
        beforeSend: function(xhr){
          $('#submit-btn').html('PROCESANDO...');
        },
        success: function(response){
          if(response){
            console.log(response);
            if(response['isSuccess']){
             $('#msg').html('<div class="alert alert-success">'+ response['msg']  +'</div>');
              $('input, textarea').val(function() {
                 return this.defaultValue;
              });
            }
            else{
              $('#msg').html('<div class="alert alert-danger">'+ response['msg'] +'</div>');
            }
          }
        },
        error: function(){
          $('#msg').html('<div class="alert alert-danger">Ocurrio un error. Por favor intentar mas tarde.</div>');
        },
        complete: function(){
          $('#submit-btn').html('ENVIAR');
        }
      });
  });
});


