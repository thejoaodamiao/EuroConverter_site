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

function nameAge(students){
    return students.name + " com " + students.age + " anos."
}


//console.log(students.map(nameAge));



function map (callback){

    let stundentsMap = [];
    for( let student of students){
        let maped = callback(student);
        stundentsMap.push(maped);
    }
    return stundentsMap;
}

console.log(map(nameAge));

