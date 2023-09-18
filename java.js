let userChoice = prompt("Heads or tails?")

var randomNumber = Math.random();
if (randomNumber < 0.5)
  randomNumber = 0
else
  randomNumber = 1
console.log(randomNumber)

let computerChoice;
if (randomNumber > .7){
  computerChoice = "tails"
}
else {
  computerChoice = "heads"
}


if (userChoice == computerChoice){
    alert("You guessed right! The coin flip landed on " + computerChoice)
}

else {
    alert("Sorry, the coin flip landed on " + computerChoice)
}

birthYear = prompt("What year were you born?")

let age = (2023 - birthYear)

if (age >= 21){
    alert("You are old enough to drink in the US")
}
else {
    alert("Sorry, you are not old enough to drink in the US")
}