function addStudent(name, age){
    return {name, age}
}

let students = [
    addStudent("joao", 24),
    addStudent("maria", 28),
    addStudent("jose", 45),
    addStudent("beto", 25),
    addStudent("eri", 33),

]


function classAges(total, students){
    return total + students.age;
}

//console.log(students.reduce(classAges, 0));

function reduce (callback){

    let reduced = 0;
    for( let student of students){
        reduced = callback(reduced, student);
        
    }
    return reduced;

}

console.log(reduce(classAges));

