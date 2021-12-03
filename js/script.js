// Descrizione:

// Visualizzare in pagina 5 numeri casuali poi fateli sparire.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.



// Funzioni
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function randomFunc() {
    let randomNumber = [];

  while (randomNumber.length < 5) {
      let random = getRndInteger(1,5)
      while (randomNumber.includes(random)) {
          random = getRndInteger(1,5)
      }
      randomNumber.push(random);    
  }
  return randomNumber
}


// numeri random creati tramite funzione
let randNum = randomFunc();

console.log(randNum);
const container = document.querySelector(".container");
const container2 = document.querySelector(".container2")

for (let i = 0; i < randNum.length; i++) {
    container.innerHTML += randNum[i] + " ";
} 

// numeri pushati dal prompt
let second = 30

setTimeout(() => {
    container.innerHTML = ""
   const timer = setInterval(() => {
        if (second > 0) {
            container.innerHTML = `incomincia a ricordarti i numeri mancano ${second}`
            second -= 1
        }else {
            clearInterval(timer)
            container.innerHTML = "VIA"
            setTimeout(() => {
                let arrayNum = [];
                for (let i = 0; i < 5; i++) {
                    let ask =parseInt(prompt("ridimmi i numeri"))
                    arrayNum.push(ask);
                }
                let cond = 0
                let arrayCond = []
                for (let i = 0; i < 5; i++) {
                    if (randNum[i] == arrayNum[i] && !isNaN(arrayNum[i])) {
                        cond ++
                        arrayCond.push(arrayNum[i])
                    }
                }
                for (let i = 0; i < arrayCond.length; i++) {
                    container.innerHTML = `hai indovinato ${cond} numeri le quali erano `
                    container2.innerHTML += arrayCond[i] + " ";
                }    
                console.log(cond);
            },200)
        }
        
    },1000)
}, 3000)











  

