// Descrizione:

// Visualizzare in pagina 5 numeri casuali poi fateli sparire.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.
// Vi lascio anche qualche BONUS per il weekend lungo:
// L'utente non deve poter inserire numeri minori di zero e del massimo che avete deciso;
// L'utente non può scrivere 2 o più volte lo stesso numero;
// Proviamo a creare dei livelli di difficoltà selezionabili all'inizio: più il livello è alto più numeri compaiono :party_parrot:


// Funzioni
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function randomFunc(length) {
    let randomNumber = [];

  while (randomNumber.length < length) {
      let random = getRndInteger(1,100)
      while (randomNumber.includes(random)) {
          random = getRndInteger(1,100)
      }
      randomNumber.push(random);    
  }
  return randomNumber
}





// numeri random creati tramite funzione
const button = document.querySelector("button")

button.addEventListener("click" , function pippo() {
    const container = document.querySelector(".container");
    container.innerHTML = ""
    this.removeEventListener("click", pippo)
    const level = document.getElementById("level")
    const levelSelect = level.value

    let randNum = randomFunc();


    switch (levelSelect){
        default:
        case "easy":
            randNum = randomFunc(5);
             break;
        case "medium":
            randNum = randomFunc(10);
            break;
        case "hard" :
            randNum = randomFunc(15);
            break
    }
    

    console.log(randNum);
    
    
    for (let i = 0; i < randNum.length; i++) {
        container.innerHTML += randNum[i] + " ";
    } 
    
    // numeri pushati dal prompt
    let second = 5
    
    setTimeout(() => {
        container.innerHTML = ""
       const timer = setInterval(() => {
            if (second > 0) {
                container.innerHTML = `incomincia a ricordarti i numeri mancano ${second}`
                second --
            }else {
                clearInterval(timer)
                container.innerHTML = "VIA"
                setTimeout(() => {
                    let arrayNum = []; //numeri prompt
                    let cond = 0;
                    let arrayCond = [];
                    for (let i = 0; i < randNum.length; i++) {
                        let ask =parseInt(prompt("inserisci un numero da uno a 100"))
                        while (isNaN(ask) || ask < 0 || ask > 100)  {
                            ask = parseInt(prompt("numero non valido riprova"))
                        }
                        while (arrayNum.includes(ask)) {
                            ask = parseInt(prompt("numero doppio non valido riprova"))
                        }
    
                        arrayNum.push(ask);
                        if (randNum.includes(arrayNum[i])) {
                            cond ++
                            arrayCond.push(arrayNum[i])
                        }
                    }
                    container.innerHTML = `hai indovinato ${cond} numeri le quali erano ${arrayCond}`
                    button.addEventListener("click" , pippo)
                },200)
            }       
        },1000)
    }, 3000) 
})
