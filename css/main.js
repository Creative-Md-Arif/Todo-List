let error = document.querySelector('.error')
let players = document.querySelector('.players')

let player_1 = document.querySelector('.player_1')
let player_2 = document.querySelector('.player_2')

let submit_1 = document.querySelector('.submit_1')

let submit_2 = document.querySelector('.submit_2')

let chance = document.querySelector('.chance')

let click = 0

submit_1.addEventListener('click',()=>{
 if(player_1.value - 0){

     if(player_1.value < 9){
       players.innerHTML = "player 2" ;
       player_1.style = "display:none;";
       submit_1.style = "display:none;";

       player_2.style = "display:inline-block;";
       submit_2.style = "display:inline-block;";
       chance.style = "display:inline-block;";

     }else{
        error.innerHTML = "please  input a number less then 10";
     }


 } else {
  error.innerHTML = "please input a number"
 }


})
submit_2.addEventListener('click',()=>{
    ++click
    if(player_2.value - 0){
         if(player_2.value < 9){

            if(click < 5){
                
                  if(player_1.value === player_2.value){
                    players.style = "display:none;";
                    player_2.style = "display:none;";
                    submit_2.style = "display:none;";
                    chance.innerHTML = "player 2 winner"

               
                }        


            }else{
                players.style = "display:none;";
                player_2.style = "display:none;";
                submit_2.style = "display:none;";
                chance.innerHTML = "player 1 winner"

            }
         }else{
            error.innerHTML = "please  input a number less then 10";
         }
       }else{
        error.innerHTML = "please input a number"
       } 
    
})