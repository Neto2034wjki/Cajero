function Retirar() {
     let cantidad = document.getElementById("cant").value;
     let nombre = document.getElementById("nombre").value;
     let c100 = 0;
     let c50 = 0;
     let c20 = 0;
     let c10 = 0;
     let c5= 0;
     let Element100 = document.getElementById("c100");
     let Element50 = document.getElementById("c50");
     let Element20 = document.getElementById("c20");
     let Element10 = document.getElementById("c10");
     let Element5 = document.getElementById("c5");
     let Element1 = document.getElementById("c1");

     let nameElement = document.getElementById("name");
     nameElement.innerHTML = "Hola, "+ nombre + ". La cantidad que haz decidido retirar es $"+ cantidad 
     nameElement.classList.add("mostrar")
     nameElement.className = "alert alert-info mostrar"

     if(cantidad >=100){
        c100 = parseInt(cantidad / 100)
        cantidad = cantidad -(c100 * 100)
     }
     if(cantidad >=50){
        c50 = parseInt(cantidad/50)
        cantidad = cantidad - (c50 *50)
     }
     if(cantidad >=20){
        c20 = parseInt(cantidad/20)
        cantidad = cantidad -(c20 * 20)
     }
     if(cantidad >=10){
        c10 = parseInt(cantidad/10)
        cantidad = cantidad - (c10 * 10)
     }
     if(cantidad >= 5){
        c5 = parseInt(cantidad/5)
        cantidad = cantidad - (c5 *5)
     }
     
     Element100.innerHTML = c100
     Element50.innerHTML = c50
     Element20.innerHTML = c20
     Element10.innerHTML = c10
     Element5.innerHTML = c5
     Element1.innerHTML = cantidad
    }
    
    document.getElementById("btn").addEventListener("click",Retirar)
