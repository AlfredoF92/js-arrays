const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
// procedimento: 
// reversedTeachers[0] = teachers[teachers.length-1];
// reversedTeachers[1] = teachers[teachers.length-2];
// reversedTeachers[2] = teachers[teachers.length-3];
// reversedTeachers[3] = teachers[teachers.length-4];
// reversedTeachers[4] = teachers[teachers.length-5];
// reversedTeachers[5] = teachers[teachers.length-6];
let reversedTeachers = [];
y=0;
for(i=1; i<=teachers.length; i++){ 
  reversedTeachers[y]= teachers[teachers.length-i];
  y++;

 // console.log("Nome da inserire: teacher[", i,  "] --> ", teachers[teachers.length-i] );
  //console.log("L'array reversedTeachers ora è --> ", y, reversedTeachers);
}

 //console.log("#######################################################################");
 let reversedTeachersPush = [];

 for(i=1; i<=teachers.length; i++){ 
   reversedTeachersPush.push(teachers[teachers.length-i]);
  
   //console.log("Nome da inserire: teacher[", i,  "] --> ", teachers[teachers.length-i] );
   //console.log("L'array reversedTeachers ora è --> ", y, reversedTeachersPush);
 }

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
longNames = [];
for(i=0; i<teachers.length; i++){
  if(teachers[i].length >= 5){
    longNames.push(teachers[i]);
  }
}

//console.log("L'array longNames ora è --> ", longNames); 



console.log("L'array teachers con FABIO è --> ", reversedTeachers );

//ELIMINA ED MANUALMENTE
for(i = 0; i < reversedTeachers.length; i++) {
  if(reversedTeachers[i] === "Ed") {
    console.log("Ho trovato ED in posizione ", i);

    for(y = i; y < reversedTeachers.length; y++) {
      reversedTeachers[i] = reversedTeachers[i + 1];
      console.log("Ho spostato ", reversedTeachers[i+1], " in posizione ", i);
    }
    reversedTeachers.pop();
  }
}

console.log("L'array reversedTeachers senza ED è --> ", reversedTeachers);



/*
for(i=0; i<teachers.length; i++){
  if(teachers[i]==="Ed"){
    teachers.splice(i, 1);
  }
}
console.log("L'array teachers senza ED è --> ", teachers); 
*/