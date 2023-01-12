/*

==Consegna==


Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell'array delle bombe non potranno esserci due numeri uguali.
--- Creato array con i 16 numeri casuali da 1 a 100 e che non si ripetono
--- Ora devo dire che se esce uno dei 16 numeri casuali contenuti nell'array, allora la cella si colora di rosso
--- Ma per fare comparazione tra cella e numero devo far si che siano dello stesso tipo
OK

In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
OK

La partita termina quando il giocatore clicca su una bomba
OK

OPPURE quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
NON SO SE è GIUSTA ISTRUZIONE

Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha cliccato su una cella che non era una bomba.
OK

*/

// Funzione per creare numero casuale 
function createRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




// Funzione che crea un array di 16 numeri casuali; ogni numero può andare da 1 a 100
function createRandomNumbers () {

    let numberRandom;

    const arrayNumbersRandom = [];

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
            
            // Dai classi e contenuto alla cella
            cell.classList.add('stile-cella');
            cell.classList.add('not-clicked');
            cell.classList.add(`${x}`);
            cell.innerHTML = i;  
            
            container.append(cell);

            // console.log('Al giro ' + i + ' prendi il numero random ' + cell.innerHTML);
        

             
            
            // // Al click di ogni cella, la cella fa due cose diverse
            cell.addEventListener ('click',
            
                function () {
                    // Raccolta  del punteggio delle celle cliccate
                    let punteggio = document.querySelectorAll('.clicked').length;
                    console.log(punteggio);

                    for (let i = 0; i <= 16; i++) {

                        const main = document.getElementById('my-main');

                        // // Se la cella cliccata è uguale ad un numero random allora 
                        if (this.innerHTML == numbersRandom[i]) {
                        this.classList.remove('not-clicked');
                        this.classList.add('clicked-bomb');

                        
                        // Compare messaggio di sconfitta 
                        const message = document.createElement('p');
                        message.classList.add('paragraph');
                        message.innerHTML = 'Mi dispiace, hai perso!';
                        
                        main.append(message);

                        // Compare messaggio del punteggio
                        const messagePunteggio = document.createElement('p');
                        messagePunteggio.classList.add('paragraph');
                        messagePunteggio.innerHTML = `Hai ottenuto il seguente punteggio: ${punteggio}`;
                        
                        main.append(messagePunteggio);


                        // Le altre celle non sono più cliccabili si può tradurre in: refresh della pagina 
                        // Così però lo fa subito --> c'è modo di ritardare?
                        // window.location.reload();

                        }

                        else if (this.innerHTML !== numbersRandom[i]) {
                            // Così escludo i 16 numeri random --> se cella è diversa da bomba
                            // Ergo, prendi le celle non bomba

                            // Posso cliccare finchè non sono finite tutte le celle not-clicked
                            
                            // let celleNonCliccate = document.querySelectorAll('.not-clicked').length;
                            // // In questa fase è come se stessi dicendo 100? Si 

                            // Finchè 
                            let celleCliccate = 0;

                            while (celleCliccate <= 84) {
                                this.classList.remove('not-clicked');
                                this.classList.add('clicked');

                                celleCliccate++;   
                                
                               
                            }

                            // Quando celle cliccate è uguale a 84
                            if (celleCliccate == 84) {
                                const vittoria = document.createElement('p');
                                vittoria.classList.add('paragraph');
                                vittoria.innerHTML = 'HAI VINTO!';
                                
                                main.append(vittoria);
                            }
                           

                        }

                    }
                    
                    }
            
            )
        }
    

    return createCells;
}







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

