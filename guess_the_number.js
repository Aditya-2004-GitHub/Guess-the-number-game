let y = Math.floor(Math.random()*100);
console.log(y);
let guesses = 0

document.getElementById("submitguess").onclick = function(){
    let num = document.getElementById("guessNum").value
    if(num > 100 || num < 1){
        alert("Enter number between 1 to 100")
    }
    else if(num == y){
        document.write(`<h1>You entered correct number and your score is: ${(100 - guesses)}</h1>`)
    } 

    else if(num < y){
        guesses++
        alert(`Please enter bigger number`)
    }

    else{
        guesses++
        alert(`lease enter smaller number`)
    }
}