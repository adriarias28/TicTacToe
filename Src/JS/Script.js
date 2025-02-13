const celdas = document.getElementsByClassName("celdas")
const celdaContenedores = document.getElementById("celdaContenedores")
const boton = document.getElementsByClassName("boton")

let jugador = true //Nombre jugador como true//


for (let index = 0; index < celdas.length; index++) { //Este for me va recorrer todas las celdas hasta la posicion 8//
    celdas[index].addEventListener("click", function () { 
        if (jugador == true) { 
            
            celdas[index].innerHTML = "🌼"
            jugador = false

        }   
            let valorAleatorio = Math.floor(Math.random()*9) /*Creamos un let que va determinar que vamos a jugar contra la maquina*/ 
            celdas[valorAleatorio].innerHTML = "🧸"          /*Mathfloor es un valor matematico, en el cual vamos agregar el mathRandom y ahi colocamos la cantidad de valores que tenemos*/ 
            jugador = true

        
    })
}






const combinacionesGanadoras = [ 
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];






/*boton.addEventListener("click", function () {
    
})*/