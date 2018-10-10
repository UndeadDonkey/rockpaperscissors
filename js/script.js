// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES




// DOCUMENT READY FUNCTION BELOW
$(document).ready(function(){
    $("#rock").click(function(){
        $("#rock").css("border","3px black solid");
        $("#paper").css("border","0px black solid");
        $("#scissors").css("border","0px black solid");
    });
    $("#paper").click(function(){
        $("#rock").css("border","0px black solid");
        $("#paper").css("border","3px black solid");
        $("#scissors").css("border","0px black solid");
    });
    $("#scissors").click(function(){
        $("#rock").css("border","0px black solid");
        $("#paper").css("border","0px black solid");
        $("#scissors").css("border","3px black solid");
    });
    $("button").click(function(){
        
    });
})
