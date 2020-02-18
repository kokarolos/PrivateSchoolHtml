var selectedRow = null;

function onFormSubmit() {
    var formData = readFormData();
    if (selectedRow == null)
        insertNewRecord(formData);
    else
        updateRecord(formData);
    resetForm();
}

//get values from userInput and store them in array
function readFormData() {
    var formData = {};
    formData["title"] = document.getElementById("title").value;
    formData["description"] = document.getElementById("description").value;
    formData["subDateTime"] = document.getElementById("subDateTime").value;
    formData["totalmark"] = document.getElementById("totalmark").value;
    return formData;
}

//inserting data to table 
function insertNewRecord(data) {
    var table = document.getElementById("List").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.title;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.description;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.subDateTime;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.totalmark;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                        <a onClick="onDelete(this)">Delete</a>`;
}

//clear userinput
function resetForm() {
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("subDateTime").value = "";
    document.getElementById("totalmark").value = "";
    selectedRow = null;
}

//edit userinput 
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("title").value = selectedRow.cells[0].innerHTML;
    document.getElementById("description").value = selectedRow.cells[1].innerHTML;
    document.getElementById("subDateTime").value = selectedRow.cells[2].innerHTML;
    document.getElementById("totalmark").value = selectedRow.cells[3].innerHTML;
}

//store updated data to array
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.title;
    selectedRow.cells[1].innerHTML = formData.description;
    selectedRow.cells[2].innerHTML = formData.subDateTime;
    selectedRow.cells[3].innerHTML = formData.totalmark;
}

//deleting data from a row
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("List").deleteRow(row.rowIndex);
        resetForm();
    }
}




