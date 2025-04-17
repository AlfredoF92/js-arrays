const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 0. Per ogni insegnante stampa in console la frase:
// [Nome insengante] è l'insegnante in posizione [i]
for(i=0; i<teachers.length; i++){  
  console.log(teachers[i], "è l'insegnante in posizione", i);
}


// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3];
console.log("Il quarto insegnante è PHIL --> ", fourthTeacher); 

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
teachers[4] = "Patrick";
console.log("Il quinto insegnante ora è Patrick --> ", teachers[4]); 

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers.pop();
console.log("L'ultimo insegnante era Luca --> ", lastTeacher); 
console.log("L'array teachers ora è --> ", teachers); 

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.shift();
console.log("Il primo insegnante era Nathan --> ", firstTeacher); 
console.log("L'array teachers ora è --> ", teachers); 

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push("Vanessa");
console.log("Ho aggiunto Vanessa, L'array teachers ora è --> ", teachers); 

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift("Sarah");
console.log("Ho aggiunto Sarah, L'array teachers ora è --> ", teachers); 

// 7. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
isFabioPresent = teachers.includes("Fabio");
if (isFabioPresent) {
  console.log("Fabio è presente nell'array ");
}
else {
  console.log("Fabio non è presente nell'array ");
}

// 8. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
let lewisIndex = null;
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i] === "Lewis") {
    lewisIndex = i;
    break;
  }
}
console.log("L'indice di Lewis è --> ", lewisIndex); // 6

// 9. Unisci tutti gli insegnanti nell'array teachers in una stringa
// separata da virgole e salvala nella variabile teachersString
let teachersString = "";
for (let i = 0; i < teachers.length; i++) {
  teachersString = teachers[i] + ", " + teachersString; 
}
console.log("Gli insegnanti nella stringa teachersString sono --> ", teachersString); 

// 10. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
let isTeachersEmpty = null;
if (teachers.length === 0) {
  isTeachersEmpty = true;
}
else {
  isTeachersEmpty = false;
}
console.log("L'array teachers è vuoto? --> ", isTeachersEmpty);