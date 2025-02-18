const celdas = document.getElementsByClassName("celdas");
const celdaContenedores = document.getElementById("celdaContenedores");
const boton = document.getElementById("boton");
const gane = document.getElementById("validarGane");
const ganaMaquina = document.getElementById("validarGaneDos");
const empates = document.getElementById("empates");
let juego = true;
let jugador = true; //Nombre jugador como true//
let listaOcupados = []; //Me indica las celdas ocupadas
let listasDisponibles = []; //Son todos los campos en las celdas 
let restantes = []; //Los numeros restantes de las celdas disponibles y ocupadas

for (let index = 0; index < celdas.length; index++) { //Este for me va recorrer todas las celdas hasta la posicion 8//
    listasDisponibles.push(index); //agarra todos los valores de las celdas
    
        celdas[index].addEventListener("click", function () { 
            console.log(listasDisponibles);
            if (celdas[index].textContent != "") {  //Este if me sirve para validar los campos
                console.log("Posicion Ocupada"); 
            } else{
                if (juego == true) {

                    celdas[index].innerHTML = "🌼" //representa "X"
                    listaOcupados.push(index); //indica los valores ocupados que ya no se pueden usar
                    console.log(listaOcupados);
                    restantes = listasDisponibles.filter(el => !listaOcupados.includes(el)); //este filtro me sirve para que vaya restando los campos ocupados
                    console.log(restantes);
                    maquina() //se nombra "maquina" que es la funcion que se creara en la linea 27, la cual me ayudara a jugar contra la maquina
                    ganadores()
                }
            }
        })
}
function maquina() { //Mathfloor es un valor matematico en numero entero
    let valorAleatorio = restantes[Math.floor(Math.random()*restantes.length)] //Creamos un let que va determinar que vamos a jugar contra la maquina
    listaOcupados.push(valorAleatorio);
    console.log(valorAleatorio);
    celdas[valorAleatorio].innerHTML = "🧸"; //representa "O"
}


function ganadores() {
    let combinacionesGanadoras = [
        [0, 1 , 2], [3, 4 , 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4 , 8], [3, 4, 6], [2, 4, 6]];

    for (let comb of combinacionesGanadoras) {
        if (celdas[comb[0]].textContent == "🌼" && celdas[comb[1]].textContent == "🌼" && celdas[comb[2]].textContent == "🌼") {
            console.log("Gana X"); 
            /*Utilizamos un for para recorrer todas las combinaciones ganadoras, en la cual vamos a crear un let que va contener 
            las combinaciones ganadoras, luego hacemos un if que le voy a indicar las posiciones ganadoras*/
            const h1 = document.createElement ("h1");
            gane.appendChild (h1);
            h1.textContent = "¡Ganaste!";
            h1.setAttribute ("class", "ganes")
            juego = false;
        }
        if (celdas[comb[0]].textContent == "🧸" && celdas[comb[1]].textContent == "🧸" && celdas[comb[2]].textContent == "🧸") {
            console.log("Gana O");
            const tituloGane = document.createElement ("h1");
            ganaMaquina.appendChild (tituloGane);
            tituloGane.textContent = "¡Computadora ganó!";
            tituloGane.setAttribute ("class", "ganes")
            juego = false;
        }
    }
        /*for (let index = 0; index < celdas.length; index++) {
            if (celdas[index].textContent === "") {

            }
        }*/
}


boton.addEventListener("click", function () { //este evento de escucha es para el boton, el cual reinicia el juego
    //location.reload();
    for (let index = 0; index < celdas.length; index++){
        celdas[index].textContent = "";
    }
    juego = true;
    listaOcupados = [];
    restantes = [];
})



















