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
    formData["firstname"] = document.getElementById("firstname").value;
    formData["lastname"] = document.getElementById("lastname").value;
    formData["dateOfBirth"] = document.getElementById("dateOfBirth").value;
    formData["fees"] = document.getElementById("fees").value;
    formData["gender"] = document.getElementById("gender").value;
    return formData;
}

//inserting data to table 
function insertNewRecord(data) {
    var table = document.getElementById("List").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.firstname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lastname;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.dateOfBirth;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.fees;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.gender;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                        <a onClick="onDelete(this)">Delete</a>`;
}

//clear userinput
function resetForm() {
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("dateOfBirth").value = "";
    document.getElementById("fees").value = "";
    document.getElementById("gender").value = "";
    selectedRow = null;
}

//edit userinput 
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("firstname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lastname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("dateOfBirth").value = selectedRow.cells[2].innerHTML;
    document.getElementById("fees").value = selectedRow.cells[3].innerHTML;
    document.getElementById("gender").value = selectedRow.cells[4].innerHTML;
}

//store updated data to array
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.firstname;
    selectedRow.cells[1].innerHTML = formData.lastname;
    selectedRow.cells[2].innerHTML = formData.dateOfBirth;
    selectedRow.cells[3].innerHTML = formData.fees;
    selectedRow.cells[4].innerHTML = formData.gender;
}

//deleting data from a row
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("List").deleteRow(row.rowIndex);
        resetForm();
    }
}




