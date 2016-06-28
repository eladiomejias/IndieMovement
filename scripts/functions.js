
/* definiendo el botón */
var button = document.getElementById('trivia-button');

button.onclick = function () { 
    
    var one, two, three, four, five;
    
    /* para busqueda de los inputs checked en terms */
    one  = whoIsCheck('terms');
    two = whoIsCheck('noband');
    three = whoIsCheck('gender');
    four = whoIsCheck('carac');
    five = whoIsCheck('move');

    var answers = [one, two, three, four, five];
    var cont = correctAnswers(answers);
   
    if(cont==5){
        showAdvice("Excelente trabajo!", cont);
    }else if(cont>=2 && cont<=4){
       showAdvice("Muy buen trabajo!", cont);
    }else if(cont==1){
        showAdvice("Debes leer más!", cont);
    }else{
         showAdvice("Mejor suerte para la próxima, sigue leyendo articulos!", cont);
    }
    
   
   

    
};

function showAdvice(sm, cont){
    


    swal({   title: "Acertaste una cantidad de:  "+cont+" en la trivia. <br>"+sm,   
    showCancelButton: false,   
    confirmButtonText: "OK",   
    closeOnConfirm: false,   
    html: true }, 
    function(isConfirm){   
        if (isConfirm) {     
            location.reload();   
            
        }  });
}


/* params 
nombre de los name de los distintos radio buttons. */

function whoIsCheck(name){

   var radios = document.getElementsByName(name);
    var valor = "";

   for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
        // do whatever you want with the checked radio
       // alert(radios[i].value);
        // only one radio can be logically checked, don't check the rest
        return radios[i].value;
        break;
    }
}
    
}


function correctAnswers(answer){
    
    var one = "first"; var two = "four"; var three = "first"; var four = "second"; var five = "first"; var cont;
    var corrects = [one, two, three, four, five];
    cont = 0;
    for(var i = 0, length = corrects.length; i < length; i++){
          
        if(answer[i] === corrects[i]){
            cont++
        }
    }
    
    return cont;
    
}
