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
    var userScore = 0;
    var computerScore= 0;
    
    $("#rock").click(function(){
        $("#rock").css("border","3px black solid");
        $("#paper").css("border","0px black solid");
        $("#scissors").css("border","0px black solid");
        userChoice = rock;
    });
    $("#paper").click(function(){
        $("#rock").css("border","0px black solid");
        $("#paper").css("border","3px black solid");
        $("#scissors").css("border","0px black solid");
        userChoice = paper;
    });
    $("#scissors").click(function(){
        $("#rock").css("border","0px black solid");
        $("#paper").css("border","0px black solid");
        $("#scissors").css("border","3px black solid");
        userChoice = scissors;
    });
    $("button").click(function(){
        randomNumber = Math.random();
        if(randomNumber < 0.33333){
            $("#computerChoice").attr({"src":rock,"width":"250px"});
        }else if(randomNumber >= 0.33333 && randomNumber < 0.66666 ) {
            $("#computerChoice").attr({"src":paper,"width":"250px"});
        }else {
            $("#computerChoice").attr({"src":scissors,"width":"250px"});
        }
        
        $("#userChoice").attr({"src": userChoice,"width":"250px"});
    
        if($("#userChoice").attr("src") === $("#computerChoice").attr("src")) {
            $("#who").text("tie");
        }else if($("#userChoice").attr("src") === scissors){
            if($("#computerChoice").attr("src") === paper){
                $("#who").text("Winner!");
                userScore = userScore +1;
                $("#userScore").html(userScore);
            }else if($("#computerChoice").attr("src") === rock){
                $("#who").text("Loser!");
                computerScore = computerScore +1;
                $("#computerScore").html(computerScore);
            }
        }else if($("#userChoice").attr("src") === paper){
            if($("#computerChoice").attr("src") === scissors){
                $("#who").text("Loser!");
                computerScore = computerScore +1;
                $("#computerScore").html(computerScore);
            }else if($("#computerChoice").attr("src") === rock){
                $("#who").text("Winner!");
                userScore = userScore +1;
                $("#userScore").html(userScore);
            }
        }else if($("#userChoice").attr("src") === rock){
            if($("#computerChoice").attr("src") === scissors){
                $("#who").text("Winner!");
                userScore = userScore +1;
                $("#userScore").html(userScore);
            }else if($("#computerChoice").attr("src") === paper){
                $("#who").text("Loser!");
                computerScore = computerScore +1;
                $("#computerScore").html(computerScore);
            }
        }
    });
})
