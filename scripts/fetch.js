let url = "http://api.exchangeratesapi.io/v1/latest?access_key=7c88a609bbe5fbf4bd7305d142a44ffa&format=1"



function converter(){

    let valor = document.getElementById("valor").value;

    fetch(url)
    .then((clap)=>{
        console.log(clap);

        return clap.json();

}).then((data)=>{

    let rate = data.rates.BRL;

    let resultado =  `R$ ${valor} é  EUR$ ${(rate * valor).toFixed(2)} em euros`
    
    document.getElementById("resultado").innerHTML = resultado;

    console.log(data);
    
})
   
    
}