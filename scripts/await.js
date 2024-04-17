let users = ["joao","maria","jose"];

function insertUsers (user){
    
    let promise = new Promise(( resolve, reject)=>{
        setTimeout(()=>{
            users.push(user)
            
            let error = true;
            
            if(!error){
                resolve();

            }else{
                reject({msg:"minha pomba"})
            }
        }, 1000);

    });

    return promise;

}

function allUsers(){
    console.log(users);

}


insertUsers("igor").then(allUsers).catch((error)=>{
    console.log(error.msg);
})
/*sync function execute(){

    await insertUsers("igor")
        .catch((error)=>{
            console.log(error.msg);
    });
    allUsers();
}

execute();*/