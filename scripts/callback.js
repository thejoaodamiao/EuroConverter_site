let users = ["joao","maria","jose"];

function insertUsers (user, callback){
    setTimeout(()=>{
        users.push(user)
        callback();
    }, 1000);

}

function allUsers(){
    console.log(users);

}


insertUsers("igor", allUsers);
