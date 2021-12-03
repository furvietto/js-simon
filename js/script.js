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



let randNum = randomFunc();

console.log(randNum);
const container = document.querySelector(".container");


for (let i = 0; i < randNum.length; i++) {
    container.innerHTML += randNum[i] + " ";
} 

let arrayNum = []

setTimeout(() => {
    container.innerHTML = ""
}, 3000)

setTimeout(() => {
    for (let i = 0; i < 5; i++) {
        let ask =parseInt(prompt("ridimmi i numeri"))
        arrayNum.push(ask);
    }    
},4000)

console.log(arrayNum);

for (let i = 0; i < 5; i++) {
    if (randNum[i] == arrayNum[i]) {
        console.log("hai vinto");
    } else {
        console.log("hai perso");
    }
    
}

  
