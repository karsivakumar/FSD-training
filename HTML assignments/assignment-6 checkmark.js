setTimeout(() => {

var input1 = document.getElementsByClassName("form-control");

$('form :input').change(function(){

    for (i=0; i<input1.length; i++) {
        console.log(input1[i].id);
    }

});

// document.getElementsById("form-control").addEventListener("change",inputChange);

}, 500);