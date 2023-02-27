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