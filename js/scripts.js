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


// funzione crea celle con numero progressivo
function createCells (min, max, container, x) {

        //Crea N celle e inseriscile in un contenitore
        for (let i = min; i <= max; i++ ) {

            // Crea una nuova cella
            const cell = document.createElement('div');

            cell.classList.add('stile-cella');
            cell.classList.add(`${x}`);
            cell.innerHTML = i;
            container.append(cell);


            // // Al click di ogni cella, la cella si colora di blu
            cell.addEventListener ('click',
            
                function () {
                    cell.classList.add('clicked');
                    console.log('Il numero della cella cliccata è: ', i);
                    }
            
            )
        }
    

    return createCells;
}


// Prendo opzione livello
const sceltaLivello = document.getElementById('level');
console.log(sceltaLivello.value);


// Prendo bottone Play da HTML
const buttonPlay = document.getElementById('button-play');
console.log(buttonPlay);

// Prendo la mia griglia
const myGrid = document.getElementById('grid');
console.log(myGrid);


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

