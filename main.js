/*
Leon's Rules: Scissors cuts paper. Paper covers rock. Rock crushes lizard. Lizard poisons Spock. Spock smashes scissors. Scissors decapitates lizard. Lizard eats paper. Paper disproves Spock. Spock vaporizes rock. Rock crushes scissors.

PREP
1. user clicks button (either rock, paper, scissors...)
2. computer generates random of 5 options (using array and math.random)
3. display user choice on dom, and computer choice on dom
4. event listener, on that click (tied to a button) generate js function code
5. function code:
  usertotal = 0
  computertotal= 0
  if userchoice == computer choice
    print(There was a tie)
  else if
    userchoice == scissors && computer choice == paper
      usertotal++
    computer choice == scissors && userchoice == paper
      computertotal++
    userchoice == paper && computer choice == rock
      usertotal++
    computer choice == paper && userchoice == rock
      computertotal++
    userchoice == rock && computer choice == lizard
      usertotal++
    userchoice == rock && computer choice == lizard
      usertotal++
    computer choice == lizard && userchoice == spok
      computertotal++
    userchoice == lizard && computer choice == spok
      usertotal++
    computer choice == spok && userchoice == scissors
      computertotal++
    userchoice == spok && computer choice == scissors
      usertotal++
    computer choice == scissors && userchoice == lizard
      computertotal++
    userchoice == scissors && computer choice == lizard
      usertotal++
    computer choice == lizard && userchoice == paper
      computertotal++
    userchoice == lizard && computer choice == paper
      usertotal++
    computer choice == paper && userchoice == spok
      computertotal++
    userchoice == paper && computer choice == spok
      usertotal++
    computer choice == spok && userchoice == rock
      computertotal++
    userchoice == spok && computer choice == rock
      usertotal++
    computer choice == rock && userchoice == scissors
      computertotal++
    userchoice == rock && computer choice == scissors
      usertotal++

*/
//user clicks button (either rock, paper, scissors...)

let userchoice == document.querySelectorAll('button').value
document.querySelectorAll('button').addEventListener('click', playGame)

function playGame(){
  let usertotal = 0
  let computertotal= 0
  const computerchoices = ['rock', 'paper', 'scissors', 'lizard', 'spok']
  const choosecomp = computerchoices[Math.floor(Math.random() *5)]

  if userchoice == computer choice
    print(There was a tie)
  else if
    userchoice == scissors && computer choice == paper
      usertotal++
    computer choice == scissors && userchoice == paper
      computertotal++
    userchoice == paper && computer choice == rock
      usertotal++
    computer choice == paper && userchoice == rock
      computertotal++
    userchoice == rock && computer choice == lizard
      usertotal++
    userchoice == rock && computer choice == lizard
      usertotal++
    computer choice == lizard && userchoice == spok
      computertotal++
    userchoice == lizard && computer choice == spok
      usertotal++
    computer choice == spok && userchoice == scissors
      computertotal++
    userchoice == spok && computer choice == scissors
      usertotal++
    computer choice == scissors && userchoice == lizard
      computertotal++
    userchoice == scissors && computer choice == lizard
      usertotal++
    computer choice == lizard && userchoice == paper
      computertotal++
    userchoice == lizard && computer choice == paper
      usertotal++
    computer choice == paper && userchoice == spok
      computertotal++
    userchoice == paper && computer choice == spok
      usertotal++
    computer choice == spok && userchoice == rock
      computertotal++
    userchoice == spok && computer choice == rock
      usertotal++
    computer choice == rock && userchoice == scissors
      computertotal++
    userchoice == rock && computer choice == scissors
      usertotal++


}
// node.forEach((e)=> {
//
//     e.addEventListener('click', (e) =>{
//         let cardPick = e.target.getAttribute("value")
//         eventTrigger(cardPick)
//     })
// })
//  user clicks button (either rock, paper, scissors...)
// 2. computer generates random of 5 options (using array and math.random)
// 3. display user choice on dom, and computer choice on dom
// 4. event listener, on that click (tied to a button) generate js function code
// 5. function code:
