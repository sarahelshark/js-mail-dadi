console.log("im working");
/*
Mail
------
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

>tools
-form con input e bottone submit
-event listener (oppure prompt, piu facile ma piu brutto)
-let/const
-array
-query selector o getElementById
-condizionale
-stampo nel dom .innerHTML

>steps
1.creare una lista di email
2.chiedere all'utente di inserire la propria mail
3. confrontare la mail inserita dall'utente con tutte le email inserite nella lista
4. se la mail è presente nella lista l'utente può accedere, se non è presente l'utente viene bloccato

*/
//creare lista di email per la verifica
const emailList = ["random@gmail.com", "tommybell1ssimo@yahoo.it", "emaildelnonno@outlook.com", "lafantasiafinisce@hotmail.it", "emailipsum@yahoo.com"];
//stampo per vedere se funziona
console.log(emailList);

//prendo email utente e racchiudo in costante
const email = document.getElementById("exampleFormControlInput1").value;

//prendo form e racchiudo in costante (per agganciarci event listener dopo)
const form = document.getElementById("form");

//stampo tutti i dati in console per vedere se funziona
console.log(email);
console.log(form);

//verifica email vs lista
//event listener 
/**form.addEventListener('submit',function(event){
    event.preventDefault(); //prevents from autosubmitting

    let distance = document.getElementById("number").value; //prendo dato km inserito da utente
    console.log(distance);

    let age = document.getElementById("age").value; // prendo dato eta inserito da utente
    console.log(age); */

/*
Gioco dei dadi
------
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

>tools
-form con input e bottone submit
-event listener
-let/const
-query selector o getElementById
-condizionale

>steps
1.generare un numero da 1 a 6 per il giocatore
2.generale un numero da 1 a 6 per il computer 
3.confrontare i due numeri per decidere il vincitore
4. annunciare il vincitore
5.extra:chiedere se il giocatore vuole giocare di nuovo

*/