var person = {
    name: "maria",
    age: 55
}

var contact = {
    telephone: "5251302633",
    adress: "rua ripa na xulipa"
}

var copy = {...person, ...contact};

console.log(copy);