// home score code
let homeScoreEl = document.getElementById("homescore-el")

let homeScore = 0
function incrementHomeScore1(){
   homeScore += 1
    homeScoreEl.textContent = homeScore
}

function incrementHomeScore2(){
   homeScore += 2
    homeScoreEl.textContent = homeScore
}

function incrementHomeScore3(){
   homeScore += 3
    homeScoreEl.textContent = homeScore
}

//guest score code
let guestScoreEl = document.getElementById("guestscore-el")

let guestScore = 0
function incrementGuestScore1(){
   guestScore += 1
    guestScoreEl.textContent = guestScore
}

function incrementGuestScore2(){
   guestScore += 2
    guestScoreEl.textContent = guestScore
}

function incrementGuestScore3(){
   guestScore += 3
    guestScoreEl.textContent = guestScore
}