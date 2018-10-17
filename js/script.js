// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES

/*global $*/


// DOCUMENT READY FUNCTION BELOW
$(document).ready(function(){
    var winner = "";
    var computerChoice = "";
    var userChoice = "";
    var randomNumber = 0;
    var scissors = "https://images-na.ssl-images-amazon.com/images/I/41o907KrqfL._SX425_.jpg";
    var paper = "https://neal.fun/paper/paper.jpg";
    var rock = "http://www.arriagastone.com/wp-content/uploads/2017/03/ARRIAGA-STONE.jpg";
    
    $("#rock").click(function(){
        $("#rock").css("border","3px black solid");
        $("#paper").css("border","0px black solid");
        $("#scissors").css("border","0px black solid");
        userChoice = "http://www.arriagastone.com/wp-content/uploads/2017/03/ARRIAGA-STONE.jpg";
    });
    $("#paper").click(function(){
        $("#rock").css("border","0px black solid");
        $("#paper").css("border","3px black solid");
        $("#scissors").css("border","0px black solid");
        userChoice = "https://neal.fun/paper/paper.jpg";
    });
    $("#scissors").click(function(){
        $("#rock").css("border","0px black solid");
        $("#paper").css("border","0px black solid");
        $("#scissors").css("border","3px black solid");
        userChoice = "https://images-na.ssl-images-amazon.com/images/I/41o907KrqfL._SX425_.jpg";
    });
    $("button").click(function(){
        randomNumber = Math.random();
        if(randomNumber < 0.33333){
            $("#computerChoice").attr({"src":"http://www.arriagastone.com/wp-content/uploads/2017/03/ARRIAGA-STONE.jpg","width":"33%"});
        }else if(randomNumber >= 0.33333 && randomNumber < 0.66666 ) {
            $("#computerChoice").attr({"src":"https://neal.fun/paper/paper.jpg","width":"33%"});
        }else {
            $("#computerChoice").attr({"src":"https://images-na.ssl-images-amazon.com/images/I/41o907KrqfL._SX425_.jpg","width":"33%"});
        }
        $("#userChoice").attr({"src": userChoice,"width":"33%"});
        
        if($("#userChoice").attr("src") === $("#computerChoice").attr("src")) {
            
        }else if($("#userChoice").attr("src")){
            
        }
    });
})
