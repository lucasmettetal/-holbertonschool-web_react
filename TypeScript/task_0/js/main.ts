interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Alice",
  lastName: "Smith",
  age: 20,
  location: "Paris",
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Johnson",
  age: 22,
  location: "London",
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
const thead = document.createElement("thead");
const headerRow = document.createElement("tr");
const th1 = document.createElement("th");
th1.textContent = "First Name";
const th2 = document.createElement("th");
th2.textContent = "Location";
headerRow.appendChild(th1);
headerRow.appendChild(th2);
thead.appendChild(headerRow);
table.appendChild(thead);

const tbody = document.createElement("tbody");
studentsList.forEach((student: Student) => {
  const row = document.createElement("tr");
  const td1 = document.createElement("td");
  td1.textContent = student.firstName;
  const td2 = document.createElement("td");
  td2.textContent = student.location;
  row.appendChild(td1);
  row.appendChild(td2);
  tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);
