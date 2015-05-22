/**
Milissa McClelland
may 14, 2015
 DEVELOP Duel #3
*/

// self-executing function
(function(){
    //logs to console FIGHT!!!
    console.log("FIGHT!!!");

    //player name
    //creates variable for player names and assigns values
   /* var playerOneName = "Spiderman";
    var playerTwoName = "Batman";

    //player damage
    //creates variable for player DMG and assigns values
    var player1Damage = 20;
    var player2Damage = 20;

    //player health
    //creates variable for players health and assigns values
    var playerOneHealth = 100;
    var playerTwoHealth = 100;
*/
    //created object literals for player information
    var fighters = [
        fighter1 = {name:"Kabal", damage: 20, health: 100},
        fighter2 = {name:"Kratos", damage: 20, health: 100}
    ];

    //create var for each fighter and set it to array with name, DMG, and Health
    //var fighter1 = ["Spiderman", 20, 100];
    //var fighter2 = ["Batman", 20, 100];


    //initiate round
    //creates variable for fight round and assigns value
    var round=0;
    //variable for the fight button
    var fightButton = document.getElementById("fight_btn");
    fightButton.onclick = function(e){
        fight();
        e.preventDefault();
        return false;
    };

    //displays information at the top instead of alerts
    document.getElementById("kabal").innerHTML = fighters[0].name + ": " + fighters[0].health;
    document.getElementById("kratos").innerHTML = fighters[1].name + ": " + fighters[1].health;

    //creates function and names it fight
    function fight(){
        //alerts user to the player names and health
        //alert(fighter1[0] +":"+fighter1[2]+"  *START*  "+fighter2 [0]+":"+fighter2[2]);


        if(fighters[0].health < 1 && fighters[1].health < 1){
            return false;
        }
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            //randomizes DMG per player
            var minDamage1 = fighters[0].damage * .5;
            var minDamage2 = fighters[1].damage * .5;
            var f1 = Math.floor(Math.random()*(fighters[0].damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(fighters[1].damage-minDamage2)+minDamage2);

            //inflict damage
            //subtracts DMG from players health
            fighters[0].health = fighters[0].health-=f1;
            fighters[1].health = fighters[1].health-=f2;
            //logs to console players name and health
            console.log(fighters[0].name+": "+fighters[0].health + " " + fighters[1].name+":"+fighters[1].health);

            //check for victor
            //creates variable for results and sets it to a function
            var result = winnerCheck();
            console.log(result);
            //if statement that determines if there is no winner and goes to the next round if no winner is found
            if (result==="no winner")
            {
                round++;
                //alert(fighter1[0]+":"+fighter1[2]+"  *ROUND "+round+" OVER"+"*  "+fighter2[0]+":"+fighter2[2]);
                //changes the displayed health each round
                document.getElementById("kabal").innerHTML = fighters[0].name + ": " + fighters[0].health;
                document.getElementById("kratos").innerHTML = fighters[1].name + ": " + fighters[1].health;
                document.getElementById("round_number").innerHTML = "Round " + round + ": Complete!";

            //if winner is found alert user and break from funciton
            } else{
                //alert(result);
                fightButton.onclick = false;
                fightButton.innerHTML = result;

            };


    };
    //function created to check for winner
    function winnerCheck(){
        var result="no winner";
        //determines if both players are below 1 HP and runs
        if (fighters[0].health<1 && fighters[1].health<1)
        {
            result = "You Both Die";
            //determines which player has the most health
        } else if(fighters[0].health<1){
            result =fighters[1].name+" WINS!!!"
        } else if (fighters[1].health<1)
        {
            result = fighters[0].name+" WINS!!!"
        };
        //returns the result of the winnerCheck to the variable result
       return result;
    };

    /*******  The program gets started below *******/
    //calls the fight function
    fight();

})();