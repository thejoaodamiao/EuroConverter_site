function addStudent(name, age){
    return {name, age}
}

let students = [
    addStudent("joao", 24),
    addStudent("maria", 28),
    addStudent("jose", 45),
    addStudent("beto", 25),
    addStudent("eri", 33)
]

function under30(students){
    return students.age < 30;
}



//let stundentsUnder30 = students.filter((students)=>{
   // return students.age < 30;
//});

//console.log(stundentsUnder30);

function filter (callback){

    let filteredStudents = [];
    for( let student of students){
        if(callback(student)){
            filteredStudents.push(student);
        }
    }

    return filteredStudents;
}

console.log(filter(under30));
