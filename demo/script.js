const inputAttendance = document.querySelectorAll(".attendance");
const inputDate = document.getElementById("attendanceDate");
const resultBox = document.getElementById("resultBox");
const overallTotalBox = document.getElementById("overallTotal");
const submitBtn = document.getElementById("submitBtn");

// Load saved attendance on page load
document.addEventListener("DOMContentLoaded", getLocalAttendance);

submitBtn.addEventListener("click", () => {
    let presentStudents = [];
    inputAttendance.forEach(e => {
        if (e.checked) presentStudents.push(e.value);
    });

    if (!inputDate.value) {
        alert("Please select a date.");
        return;
    }
    if (presentStudents.length === 0) {
        alert("Please select at least one student.");
        return;
    }

    // Save attendance record
    const attendanceRecord = {
        date: inputDate.value,
        students: presentStudents
    };

    saveLocalAttendance(attendanceRecord);

    // Clear inputs
    inputAttendance.forEach(e => e.checked = false);
    inputDate.value = "";

    // Refresh records
    displayAttendance();
});

// Save to localStorage
function saveLocalAttendance(record) {
    let attendances = JSON.parse(localStorage.getItem("attendances")) || [];

    // Prevent duplicate date entry (overwrite instead)
    const existingIndex = attendances.findIndex(a => a.date === record.date);
    if (existingIndex !== -1) {
        attendances[existingIndex] = record;
    } else {
        attendances.push(record);
    }

    localStorage.setItem("attendances", JSON.stringify(attendances));
}

// Get from localStorage
function getLocalAttendance() {
    displayAttendance();
}

// Display attendance records
function displayAttendance() {
    resultBox.innerHTML = "";
    let attendances = JSON.parse(localStorage.getItem("attendances")) || [];
    let overallTotal = 0;

    attendances.forEach(record => {
        const div = document.createElement("div");
        div.classList.add("record");
        div.innerHTML = `
          <strong>Date:</strong> ${record.date}<br>
          <strong>Present Students:</strong> ${record.students.join(", ")}<br>
          <strong>Total Present:</strong> ${record.students.length}
        `;
        resultBox.appendChild(div);

        overallTotal += record.students.length;
    });

    overallTotalBox.innerText = `Overall Total Present: ${overallTotal}`;
}