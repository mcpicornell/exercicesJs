function addRow()
{

    document.getElementById("tbody").insertRow(-1).innerHTML = '<tr>This is a row</tr>';
}

var mainListDiv = document.getElementById("mainListDiv"),
    mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function () {
    
    "use strict";
    
    mainListDiv.classList.toggle("show_list");
    mediaButton.classList.toggle("active");
}

//Dialog

const showButton = document.getElementById('openForm');
const dialogForm = document.getElementById('dialog-form');
const outputBox = document.querySelector('output');

// "Update details" button opens the <dialog> modally
showButton.addEventListener('click', () => {
    dialogForm.showModal();
});

// "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
dialogForm.addEventListener('close', () => {
  return outputBox.value = dialogForm.returnValue;
});

//Ejercicio 6

// Entrada : Objeto que representa cada una de las entradas ( fila de nuestra tabla del blog )
// Autor : Datos muy básicos del autor (que estará dentro de nuestra entrada: Nombre, Apellidos y Nickname (que será el que se muestre como autor)

let entrada = {};

class Autor{
    constructor(nombre, apellidos, nickname){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.nickname = nickname;
    }
};