/*

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.           OK
Ogni cella ha un numero progressivo, da 1 a 100.                                    OK
Ci saranno quindi 10 caselle per ognuna delle 10 righe.                             OK

Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. OK

==Bonus==
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà: OK
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;               OK
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;


*/

// Funzione per creare numero casuale 
function createRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




// Funzione che crea un array di 16 numeri casuali; ogni numero può andare da 1 a 100
function createRandomNumbers () {

    let numberRandom;

    let arrayNumbersRandom = [];

    // Il numero casuale esce solo per 16 volte in modo univoco
    for (let r = 1; r <= 16; r++) {
    
    // Crea numero random singolo
    numberRandom = createRandomNumber (1, 100);

    // Crea array per creare un gruppo di numeri generati all'interno dei 16 giri
    const numeriGenerati = [];

    while(numeriGenerati.includes(numberRandom)) {
        console.log(numberRandom);
    }

    numeriGenerati.push(numberRandom);

    console.log('Al giro ' + r + ' prendi il numero random ' + numberRandom);

    arrayNumbersRandom.push(numberRandom);

    }

    return arrayNumbersRandom

}

// Crea la variabile dei 16 numeri casuali 
const numbersRandom = createRandomNumbers();
console.log(numbersRandom);





// funzione crea celle con numero progressivo
function createCells (min, max, container, x) {

        //Crea N celle e inseriscile in un contenitore
        for (let i = min; i <= max; i++ ) {

            // Crea una nuova cella
            const cell = document.createElement('div');
            

            cell.classList.add('stile-cella');
            cell.classList.add(`${x}`);
            // questo è il contenuto visibile all'utente su HTML
            cell.innerHTML = i;  
            
            container.append(cell);


            // // Al click di ogni cella, la cella fa due cose diverse
            cell.addEventListener ('click',
            
                function () {

                    for (let i = 0; i <= 16; i++) {

                        // // Modifica condizioni if
                        if (cell.innerHTML == numbersRandom[i]) {
                        cell.classList.add('clicked-bomb');

                        const main = document.getElementById('my-main');
                        const message = document.createElement('p');
                        message.classList.add('paragraph');
                        message.innerHTML = 'Mi dispiace, hai perso!';
                        
                        main.append(message);


                        
                        }
                        else {
                            cell.classList.add('clicked');
                        }

                    }
                    
                    }
            
            )
        }
    

    return createCells;
}



// Crea gruppo di numeri random generati
// const numeriGenerati = [];

// Verifica che ogni numero casuale uscito non venga ripetuto - manca l'evento: quando devo fare verifica?
    // Finchè il gruppo numeri generati contiene quel numero random, continua la ricerca di un nuovo numero random; altrimenti quando ne ha trovato uno nuovo lo pusha nel gruppo. 
    // while(numeriGenerati.includes(numberRandom)) {
    //     numberRandom = createRandomNumber(1, 16);
    // }

    // numeriGenerati.push(numberRandom);

    // console.log(numeriGenerati);







// Prendo opzione livello
const sceltaLivello = document.getElementById('level');
// console.log(sceltaLivello.value);


// Prendo bottone Play da HTML
const buttonPlay = document.getElementById('button-play');
// console.log(buttonPlay);

// Prendo la mia griglia
const myGrid = document.getElementById('grid');
// console.log(myGrid);


// All'evento clicca il bottone play
buttonPlay.addEventListener ('click',

    function () {

        myGrid.innerHTML = '';
        
        if (sceltaLivello.value == 'facile') {

            allCells = createCells (1, 100, myGrid, 'riga-dieci');

        }

        else if (sceltaLivello.value == 'media') {


            allCells = createCells (1, 81, myGrid, 'riga-nove');

        }

        else if (sceltaLivello.value == 'difficile') {


            allCells = createCells (1, 49, myGrid, 'riga-sette');

        }

        

    }

);

