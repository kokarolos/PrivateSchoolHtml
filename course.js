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
    formData["stream"] = document.getElementById("stream").value;
    formData["type"] = document.getElementById("type").value;
    formData["startDate"] = document.getElementById("startDate").value;
    formData["endDate"] = document.getElementById("endDate").value;
    return formData;
}

//inserting data to table 
function insertNewRecord(data) {
    var table = document.getElementById("studentList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.title;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.stream;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.type;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.startDate;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.endDate;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                        <a onClick="onDelete(this)">Delete</a>`;
}

//clear userinput
function resetForm() {
    document.getElementById("title").value = "";
    document.getElementById("stream").value = "";
    document.getElementById("type").value = "";
    document.getElementById("startDate").value = "";
    document.getElementById("endDate").value = "";
    selectedRow = null;
}

//edit userinput 
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("title").value = selectedRow.cells[0].innerHTML;
    document.getElementById("stream").value = selectedRow.cells[1].innerHTML;
    document.getElementById("type").value = selectedRow.cells[2].innerHTML;
    document.getElementById("startDate").value = selectedRow.cells[3].innerHTML;
    document.getElementById("endDate").value = selectedRow.cells[4].innerHTML;
}

//store updated data to array
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.title;
    selectedRow.cells[1].innerHTML = formData.stream;
    selectedRow.cells[2].innerHTML = formData.type;
    selectedRow.cells[3].innerHTML = formData.startDate;
    selectedRow.cells[4].innerHTML = formData.endDate;
}

//deleting data from a row
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("List").deleteRow(row.rowIndex);
        resetForm();
    }
}




