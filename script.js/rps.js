function  range (max,min) {
    return Math.floor(Math.random() * (max -min ) + min )
}



function getRandomChoice () {
    let letters = 'rps'

var ind = range(0,3)
    return letters[ind]
}

let userwins = 0
let compwins = 0

let  wins = 0
let losses = 0 
let beraberlik = 0
let oyun = document.querySelector('#rps')

window.onkeyup = function  (e) {
    var userChoice = e.key
    var compChoice = getRandomChoice()
    

    if (userChoice === 'r' && compChoice === 'p' ){
       
        console.log('comp uddu','compun secimi ' + compChoice + ' idi')
        console.log('sizin secim ' + userChoice +  ' idi')
        console.log('compun qalibiyyetleri:',++compwins)
        console.log('===============')
    } else if (userChoice === 'p'&&
     compChoice === 'r' ) {
        
        console.log('siz uddunuz','sizin secim ' + userChoice + ' idi')
        console.log('compun secimi ' + compChoice + ' idi')
        console.log('sizin qalibiyyetleriniz:',++userwins)
        console.log('===============')
    } else if (userChoice === 'p'&&
     compChoice === 's') {
        
        console.log('comp uddu','compun secimi ' + compChoice + ' idi')
        console.log('sizin secim ' + userChoice + ' idi')
        console.log('compun qalibiyyetleri:',++compwins)
        console.log('===============')
    } else if (userChoice === 's'&&
     compChoice === 'p' ) {
        
        console.log('siz uddunuz','sizin secim ' + userChoice + ' idi')
        console.log('compun secimi ' + compChoice + ' idi')
        console.log('sizin qalibiyyetleriniz:',++userwins)
        console.log('===============')
    } else if (userChoice === 'r'&&
     compChoice === 's') {
        console.log('siz uddunuz','sizin secim ' + userChoice + ' idi')
        console.log('compun secimi ' + compChoice + ' idi')
        console.log('sizin qalibiyyetleriniz:',++userwins)
        console.log('===============')
    } else if (userChoice === 's'&&
     compChoice === 'r') {
        console.log('comp uddu','compun secimi ' + compChoice + ' idi')
        console.log('sizin secim ' + userChoice + ' idi')
        console.log('compun qalibiyyetleri:',++compwins)
        console.log('===============')
    } else {
        beraberlik++
        console.log('beraberlik ' + compChoice + ' idi')
        console.log('sizin secim ' + userChoice + ' idi')
        console.log('beraberlikler ',beraberlik)
        console.log('===============')
    }
} 