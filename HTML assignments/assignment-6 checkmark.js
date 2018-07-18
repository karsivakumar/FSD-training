setTimeout(() => {

var forminput = document.getElementsByClassName("form-control");

var textinp;
var emailinp;
var websiteinp;
var messageinp;

var name1_asterisk = document.getElementById("name1_asterisk");
var email1_asterisk = document.getElementById("email1_asterisk");
var website1_asterisk = document.getElementById("website1_asterisk");
var message1_asterisk = document.getElementById("message1_asterisk");

$('form :input').change(function(){

    for ( var i=0; i<forminput.length; i++) {

        console.log(i);
        console.log(forminput[i].id);
        console.log(document.getElementById(forminput[i].id).value);

        if (forminput[i].id == "name1")
        {
            textinp = document.getElementById(forminput[i].id).value;

            if (textinp > '') {
                console.log("valid name");
                forminput[i].classList.add("form-control-ok");
                name1_asterisk.classList.remove("asterisk_input");
                console.log(name1_asterisk.id);
                name1_asterisk.classList.add("asterisk_input_remove");
                name1_asterisk.classList.add("glyphicon");
                name1_asterisk.classList.add("glyphicon-ok-circle");
            }
            else {
                console.log("invalid name");

                forminput[i].classList.remove("form-control-ok");
                forminput[i].classList.add("form-control");
                name1_asterisk.classList.remove("glyphicon-ok-circle");
                name1_asterisk.classList.remove("glyphicon");
                name1_asterisk.classList.remove("asterisk_input_remove");
                name1_asterisk.classList.add("asterisk_input");
            } 
        }

        if (forminput[i].id == "email1")
        {
           emailinp = document.getElementById(forminput[i].id).value;

            if ((emailinp > '') && 
                (emailinp.indexOf("@") == emailinp.lastIndexOf("@")) && 
                (emailinp.lastIndexOf(".com") > (emailinp.indexOf("@")+1)) &&
                (emailinp.endsWith(".com") == true) &&  
                ((emailinp.lastIndexOf(".") > emailinp.indexOf("@")) && (emailinp.lastIndexOf(".") == emailinp.lastIndexOf(".com"))) 
               ) 
            {
                console.log("valid email");
                forminput[i].classList.add("form-control-ok");
                email1_asterisk.classList.remove("asterisk_input");
                email1_asterisk.classList.add("asterisk_input_remove");
                email1_asterisk.classList.add("glyphicon");
                email1_asterisk.classList.add("glyphicon-ok-circle");
            }
            else {
                console.log("invalid email");
                forminput[i].classList.remove("form-control-ok");
                forminput[i].classList.add("form-control");
                email1_asterisk.classList.remove("glyphicon");
                email1_asterisk.classList.remove("glyphicon-ok-circle");
                email1_asterisk.classList.remove("asterisk_input_remove");
                email1_asterisk.classList.add("asterisk_input");
            } 
        }

        if (forminput[i].id == "website1")
        {
            websiteinp = document.getElementById(forminput[i].id).value;

            if ((websiteinp > '') && 
                (websiteinp.indexOf("http://") == 0) && 
                (websiteinp.indexOf("@") == -1) && 
                (websiteinp.endsWith(".com") == true) 
               )
            {
                console.log("valid website");
                forminput[i].classList.add("form-control-ok");
                website1_asterisk.classList.remove("asterisk_input");
                website1_asterisk.classList.add("asterisk_input_remove");
                website1_asterisk.classList.add("glyphicon");
                website1_asterisk.classList.add("glyphicon-ok-circle");
            }
            else {
                console.log("invalid website");
                forminput[i].classList.remove("form-control-ok");
                forminput[i].classList.add("form-control");
                website1_asterisk.classList.remove("glyphicon");
                website1_asterisk.classList.remove("glyphicon-ok-circle");
                website1_asterisk.classList.remove("asterisk_input_remove");
                website1_asterisk.classList.add("asterisk_input");
            } 
        }

        if (forminput[i].id == "message1")
        {
            messageinp = document.getElementById(forminput[i].id).value;

            if (messageinp > '') {
                console.log("valid message");
                forminput[i].classList.add("form-control-ok");
                message1_asterisk.classList.remove("asterisk_input1");
                message1_asterisk.classList.add("asterisk_input1_remove");
                message1_asterisk.classList.add("glyphicon");
                message1_asterisk.classList.add("glyphicon-ok-circle");
            }
            else {
                console.log("invalid mesage");
                forminput[i].classList.remove("form-control-ok");
                forminput[i].classList.add("form-control");
                message1_asterisk.classList.remove("glyphicon");
                message1_asterisk.classList.remove("glyphicon-ok-circle");
                message1_asterisk.classList.remove("asterisk_input1_remove");
                message1_asterisk.classList.add("asterisk_input1");
            } 
        }

    }
    
});

}, 500);