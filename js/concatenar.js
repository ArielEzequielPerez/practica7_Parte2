function concatenar (){
    let nombre= document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    if(nombre != "" && apellido != ""){
        let concatenacion = nombre+" "+apellido;
        alert("con un espacio entre las dos palabras es: "+nombre+" "+apellido);
    }else{
        alert("ingrese un nombre y apellido, por favor.")
    }
    
}

