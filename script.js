function addRow()
{

    document.getElementById("table").insertRow(-1).innerHTML = '<tr></tr>';
}

function removeRow() {
    var table = document.getElementById("table");
    var rowCount = table.rows.length;
    //console.log(rowCount);

    if (rowCount <= 1)
        alert('No se puede eliminar el encabezado');
    else
        table.deleteRow(rowCount - 1);
}