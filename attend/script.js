// const inputBox = document.getElementById("inputBox");
// const addBtn = document.getElementById("addBtn");
// const todoList = document.getElementById("todoList");
// const submitBtn = document.getElementById("submitBtn");
// const recordsDiv = document.getElementById("records");
// const overallTotal = document.getElementById("overallTotal");
// const dateInput = document.getElementById("attendanceDate");

// let currentStudents = [];
// let attendanceData = JSON.parse(localStorage.getItem("attendanceData")) || {};

// // ✅ Add student
// addBtn.addEventListener("click", () => {
//   const name = inputBox.value.trim();
//   if (name === "") return alert("Please enter a student name");
//   currentStudents.push(name);
//   renderStudentList();
//   inputBox.value = "";
// });

// // ✅ Render current student list
// function renderStudentList() {
//   todoList.innerHTML = "";
//   currentStudents.forEach((student, index) => {
//     const li = document.createElement("li");
//     li.innerHTML = `
//       ${student}
//       <div class="actions">
//         <button onclick="editStudent(${index})">Edit</button>
//         <button class="delete" onclick="deleteStudent(${index})">Delete</button>
//       </div>
//     `;
//     todoList.appendChild(li);
//   });
// }

// // ✅ Edit student
// function editStudent(index) {
//   const newName = prompt("Edit name:", currentStudents[index]);
//   if (newName) {
//     currentStudents[index] = newName.trim();
//     renderStudentList();
//   }
// }

// // ✅ Delete student
// function deleteStudent(index) {
//   currentStudents.splice(index, 1);
//   renderStudentList();
// }

// // ✅ Submit Attendance
// submitBtn.addEventListener("click", () => {
//   const date = dateInput.value;
//   if (!date) return alert("Please select a date");
//   if (currentStudents.length === 0) return alert("Please add students");

//   // Save in attendanceData
//   if (!attendanceData[date]) attendanceData[date] = [];
//   attendanceData[date] = [...attendanceData[date], ...currentStudents];

//   // Save to localStorage
//   localStorage.setItem("attendanceData", JSON.stringify(attendanceData));

//   // Reset for next entry
//   currentStudents = [];
//   renderStudentList();
//   showRecords();
// });

// // ✅ Show records
// function showRecords() {
//   recordsDiv.innerHTML = "";
//   let totalOverall = 0;

//   for (let date in attendanceData) {
//     const students = attendanceData[date];
//     totalOverall += students.length;

//     const record = document.createElement("div");
//     record.innerHTML = `
//       <h3>${date}</h3>
//       <p>Students: ${students.join(", ")}</p>
//       <p>Total: ${students.length}</p>
//       <hr>
//     `;
//     recordsDiv.appendChild(record);
//   }

//   overallTotal.textContent = `Overall Total Students: ${totalOverall}`;
// }

// // ✅ Show saved records on load
// showRecords();







