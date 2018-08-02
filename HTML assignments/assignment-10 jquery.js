setTimeout(() => {

$("input:first").on("change", function(){
    if ($(this).val() == "") {
    }
    else {
        alert("text has been entered in first textbox!!");
        alert("text entered: " + $("#TxtBoxStr").val());
    }
});

$("#inputStr").on("change", function(){
    if ($(this).val() == "") {
        }
    else {
    // alert("text has been entered in second textbox!!");
    // alert("text entered: " + $("#inputStr").val());
            $("#btnnew").text(function(){
                return $("#inputStr").val();
            });
        }
});

$("input:last").on("change", function(){
    if ($(this).val() == "") {
    }
    else {
        // alert("text has been entered in last textbox!!");
        // alert("text entered: " + $("#dropDownInp").val());
        $("select").append(function(){
            return ("<option>" + $("#dropDownInp").val() + "</option>")
        })
        alert("dropdown option added")
        $("input:last").val(" ")
    }
})

$("img").on("click", function(){
    alert("image clicked: ")
    var bgrndhref = ($(this).attr("src"))
    console.log(bgrndhref);
    bgrndhref = "url(" + bgrndhref + ")"
    console.log(bgrndhref);
    $("body").css("background",bgrndhref)
});

}, 500);