setTimeout(() => {

 window.allowDrop = function allowDrop(ev) {
    ev.preventDefault();
}

window.drag = function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

window.drop = function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");

    var v2 = document.getElementById("ulelem");
    var v1 = document.getElementsByClassName("liclass");

    for (var i = 0; i < v1.length; i++) {
        if (v1[i].id == data) {
            var v3 = document.getElementById(data);
            v3.parentNode.removeChild(v3);
        }
    }
}

}, 500);