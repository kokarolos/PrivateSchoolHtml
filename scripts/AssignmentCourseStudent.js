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
    formData["assignmenttitle"] = document.getElementById("assignmenttitle").value;
    formData["coursetitle"] = document.getElementById("coursetitle").value;
    formData["studentname"] = document.getElementById("studentname").value;
    return formData;
}

//inserting data to table 
function insertNewRecord(data) {
    var table = document.getElementById("List").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.assignmenttitle;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.coursetitle;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.studentname;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                        <a onClick="onDelete(this)">Delete</a>`;
}

//clear userinput
function resetForm() {
    document.getElementById("coursetitle").value = "";
    document.getElementById("assignmenttitle").value = "";
    document.getElementById("studentname").value = "";
    selectedRow = null;
}

//edit userinput 
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("coursetitle").value = selectedRow.cells[0].innerHTML;
    document.getElementById("assignmenttitle").value = selectedRow.cells[1].innerHTML;
    document.getElementById("studentname").value = selectedRow.cells[2].innerHTML;
}

//store updated data to array
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.coursetitle;
    selectedRow.cells[1].innerHTML = formData.assignmenttitle;
    selectedRow.cells[2].innerHTML = formData.studentname;
}

//deleting data from a row
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("List").deleteRow(row.rowIndex);
        resetForm();
    }
}

