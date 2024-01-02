const playbtn=document.getElementById('play')
const restartbtn=document.getElementById('restart')


playbtn.addEventListener('click',()=>{
  num_guess()
  playbtn.disabled=true;
})
restartbtn.addEventListener('click',()=>{
  playbtn.disabled=false;
})



const num_guess = () => {
  let low = 1
  let high = 10
  let correct_ans = Math.floor(Math.random() * (high - low + 1)) + low;
  for (let i = 1; i <= 3; i++) {
    let user_guess = parseInt(prompt("Enter your guess between 1-10:"));
    if (user_guess < correct_ans) {
      alert(`Correct answer is greater! ${3 - i} chances left`)
    }
    else if (user_guess > correct_ans) {
      alert(`Correct answer is smaller! ${3 - i} chances left`)
    }
    else if (user_guess === correct_ans) {
      alert('You Win!!!')
      won = true
      return
    }
  }
  alert(`You lose! Correct answer was ${correct_ans}`)

}


