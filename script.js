// Get Hmtl Elements

let studentForm = document.getElementById("studentForm");

let studentList = document.getElementById("studentList");

let editingRow = null;

let searchInput = document.getElementById("searchInput");
//When from is submited

studentForm.addEventListener("submit", function(event){
    event.preventDefault();
    
    //Get input values
    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value
    let email = document.getElementById("email").value;
    let department = document.getElementById("department").value;
    let marks = document.getElementById("marks").value;

    


if(editingRow !== null) {
    //update existing student
    editingRow.cells[0].textContent = name;
    editingRow.cells[1].textContent = mobile;
    editingRow.cells[2].textContent = email;
    editingRow.cells[3].textContent = department;
    editingRow.cells[4].textContent = marks;

    editingRow = null;

} else {


    // Create a new row
    let row = document.createElement("tr");
     
    //Create table columns 

    let nameCell = document.createElement("td");
    let mobileCell = document.createElement("td");
    let emailCell = document.createElement("td");
    let departmentCell = document.createElement("td");
    let marksCell = document.createElement("td");
    let actionCell = document.createElement("td");

    //Add values 
    nameCell.textContent = name;
    mobileCell.textContent = mobile;
    emailCell.textContent = email;
    departmentCell.textContent = department;
    marksCell.textContent = marks;


    //create delete buttton

    let deletebtn = document.createElement("button");

    deletebtn.textContent = "Delete";
    deletebtn.style.backgroundColor = "red";


     //Delete Functionality 

    deletebtn.addEventListener("click", function(){
        row.remove();
    })

  //create edit button
  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.style.backgroundColor = "green"



// Edit button functionality

editBtn.addEventListener("click",function(){
    editingRow =row;
    document.getElementById("name").value = row.cells[0].textContent;
    document.getElementById("mobile").value = row.cells[1].textContent;
    document.getElementById("email").value = row.cells[2].textContent;
    document.getElementById("department").value = row.cells[3].textContent;
    document.getElementById("marks").value = row.cells[4].textContent;

});


//Add buttons to action cell

actionCell.appendChild(editBtn);
actionCell.appendChild(deletebtn);



    // Add cells to row

    row.appendChild(nameCell);
    row.appendChild(mobileCell);
    row.appendChild(emailCell);
    row.appendChild(departmentCell);
    row.appendChild(marksCell);
    row.appendChild(actionCell);
    

    //Add row to table 
    studentList.appendChild(row);
}
    //Clear Form
    studentForm.reset();
});

searchInput.addEventListener("input", function() {

    let searchValue = searchInput.value.toLowerCase();

    let rows = studentList.getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {

        let studentName = rows[i].cells[0].textContent.toLowerCase();

        if (studentName.includes(searchValue)) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }

    }

});

