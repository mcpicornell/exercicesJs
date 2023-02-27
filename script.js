function addRow()
{

    document.getElementById("tbody").insertRow(-1).innerHTML = '<tr>This is a row</tr>';
}

let mainListDiv = document.getElementById("mainListDiv");
let mediaButton = document.getElementById("mediaButton");

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
    constructor(nombre, apellido, nickname){
        this.nombre = nombre;
        this.apellido = apellido;
        this.nickname = nickname;
    }
};

const King = new Autor("Stephen", "King", "S.King");
const Martin = new Autor("George", "R. R. Martin", "Kingslayer");
const Rice = new Autor("Anne", "Rice", "Lestat");
let arrayAuthors = [King, Martin, Rice];



//Ejercicio 7
// Con esa estructura de objetos tenéis que hacer una llamada a esta API. DumyJson Para traeros los objetos de los POSTS. Esto es una Sencilla llamada GET que habéis visto de sobra y podéis hacer sin problema. Con la respuesta de esta llamada la idea es que utiliceis los objetos que habéis creado anteriormente para crear una lista de entradas para el blog con contenido.

// PD: La API devuelve un id (número entero) como usuario en lugar de un nombre. Os reto a que creeis una lista (pequeña 2 o 3 elementos) y que en el campo de autor seleccionemos uno simple.



// console.log(responseAPI());

const getPosts = async() => {
    try{
        const responseAPI = await fetch(`https://dummyjson.com/posts/`);

        if (responseAPI.ok) {
            const answer = await responseAPI.json();
            let arrayTitle = [];
            answer.posts.forEach(post => {
                arrayTitle.push([post.id, post.title, post.userId]);
            });
            console.log(arrayTitle);
      
          }
          else if (!responseAPI.ok) {
            console.log("The file does not exist");
          }
          else {
            console.log("Undefined error");
          }
        }
        catch (error) {//Mostramos el error
          console.log(error);
        };
      };


