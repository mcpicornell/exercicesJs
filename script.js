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