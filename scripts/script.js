/* this script is for register form validation and some extra elements*/

function validation(){
    
   var band = true;
   var msg = "";
   var nombre = document.getElementById('username').value;
   var contra = document.getElementById('userpass').value;
   var email = document.getElementById('email').value;
   var comment = document.getElementById('comments').value;
   
   if(nombre.length == "" ){ msg += "1. El nombre no tiene ningun caracter \n"; band = false;}
   if(contra.length < 5){ msg += "2. La contraseña debe ser mayor a 4. \n"; band = false;}
   if(!validateEmail(email)){ msg += "3. El e-mail no es valido. \n"; band = false;}
   if(!checkRadio("options")){ msg += "4. Active un radio button \n"; band=false;}
   if(comment.length <= 10){ msg += "5. El comentario debe ser mayor a 10 carácteres \n";}
   
   checkBoxes("checkboxes");

   /*alert(msg);*/
  
   if(!band){ sweetAlert("Oops...", msg, "error"); }
   
   return band;
   
    
}


function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


function checkRadio(name){
    
    var radios = document.getElementsByName(name);

   for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
        return true;
    }
    
    return false;
}

}

function checkBoxes(name){
    
    var checkboxes = document.getElementsByName(name);
    var myboxes = new Array();
    
    for(var i = 0, length = checkboxes.length; i < length; i++){
        if(checkboxes[i].checked){
            myboxes.push(1);
        }else{
            myboxes.push(0);
        }
    }
    
   // alert(myboxes);
    return myboxes;
    
}