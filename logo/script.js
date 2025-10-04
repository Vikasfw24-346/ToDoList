const inputBox = document.getElementById("inputBox");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const submitBtn = document.getElementById("submitBtn");
const resultsDiv = document.getElementById("results");
const overallTotal = document.getElementById("overallTotal");
const dateInput = document.getElementById("attendanceDate");
const viewBtn = document.getElementById("viewBtn");


let students = [];
let attendanceRecords = JSON.parse(localStorage.getItem("attendance")) || {};
let editIndex = null; // to track which student is being edited

// Render the list of students
function renderList() {
  todoList.innerHTML = "";
  students.forEach((student, index) => {
    let li = document.createElement("li");
    li.innerHTML = `
      ${student}
      <span>
        <button class="edit" onclick="editStudent(${index})">Edit</button>
        <button class="delete" onclick="removeStudent(${index})">Remove</button>
      </span>
    `;
    todoList.appendChild(li);
  });
}

// Add or update student
function addStudent() {
  const name = inputBox.value.trim();
  if (name === "") return;

  if (editIndex !== null) {
    // Update student if editing
    students[editIndex] = name;
    editIndex = null;
    addBtn.value = "Add"; // Change button text back
  } else {
    // Add new student
    students.push(name);
  }

  inputBox.value = "";
  renderList();
}

// Edit student in the list
function editStudent(index) {
  inputBox.value = students[index];  // Put the name back into input
  editIndex = index;                 // Store index being edited
  addBtn.value = "Update";           // Change button text
}

// Remove student from the list
function removeStudent(index) {
  students.splice(index, 1);
  renderList();
}

// Submit attendance for the selected date
function submitAttendance() {
  const date = dateInput.value;
  if (!date) {
    alert("Please select a date!");
    return;
  }
  if (students.length === 0) {
    alert("Please add at least one student!");
    return;
  }
// Save to localStorage
  attendanceRecords[date] = [...students];
  localStorage.setItem("attendance", JSON.stringify(attendanceRecords));

  students = [];
  editIndex = null;
  addBtn.value = "Add"; // Reset button
  dateInput.value = "";
  renderList();
  showResults();
}

viewBtn.addEventListener("click", () => {
  if (resultsDiv.style.display === "none" || resultsDiv.style.display === "") {
    resultsDiv.style.display = "block";
    viewBtn.value = "Close Results";
  } else {
    resultsDiv.style.display = "none";
    viewBtn.value = "View Results";
  }
});



// Display attendance records

function showResults() {

  resultsDiv.innerHTML = "";
  let totalOverall = 0;

  for (let date in attendanceRecords) {
    let recordDiv = document.createElement("div");
    recordDiv.className = "record";

    // Create student list with edit and delete buttons
    let studentList = attendanceRecords[date].map((s, i) => `
      <li>
        ${s}
        <span>
          <button class="edit" onclick="editRecord('${date}', ${i})">Edit</button>
          <button class="delete" onclick="deleteRecord('${date}', ${i})">Remove</button>
        </span>
      </li>
    `).join("");

    recordDiv.innerHTML = `
      <h3>Date: ${date} - Total Students: ${attendanceRecords[date].length}</h3>
      <ul>${studentList}</ul>
    `;

    resultsDiv.appendChild(recordDiv);
    totalOverall += attendanceRecords[date].length;
  }
  resultsDiv.style.display = "none";

  overallTotal.textContent = `Overall Total Students: ${totalOverall}`;
}

// Edit a specific record
function editRecord(date, index) {
  inputBox.value = attendanceRecords[date][index]; // show in input
  dateInput.value = date; // select same date
  students = [...attendanceRecords[date]];
  renderList();

  editIndex = index;
  addBtn.value = "Update";
}
// Delete a specific record
function deleteRecord(date, index) {
  attendanceRecords[date].splice(index, 1);
  if (attendanceRecords[date].length === 0) {
    delete attendanceRecords[date];
  }
  localStorage.setItem("attendance", JSON.stringify(attendanceRecords));
  showResults();
}

addBtn.addEventListener("click", addStudent);
submitBtn.addEventListener("click", submitAttendance);

showResults();
