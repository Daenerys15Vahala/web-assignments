const student1 = {
  id: 1,
  name: "Josh",
  grades: [85, 92, 78],
  attendance: 98,
};

const student2 = {
  id: 2,
  name: "Yazmin",
  grades: [90, 94, 92],
  attendance: 95,
};

const student3 = {
  id: 3,
  name: "Rachael",
  grades: [80, 75, 95],
  attendance: 92,
};

const students = [student1, student2, student3];

function calculateAverage(grades) {
  let total = 0;
  for (let grade of grades) {
    total += grade;
  }

  return total / grades.length;
}

//Bonus 2

function findStudent(id) {
  return students.find(function (student) {
    return student.id === id;
  });
}

//Bonus 3
function addStudent(student) {
  students.push(student);
}

addStudent({
  id: 4,
  name: "Diego",
  grades: [85, 90, 87],
  attendance: 85,
});

for (let student of students) {
  const average = calculateAverage(student.grades);
  const status = average >= 70 ? "PASS" : "FAIL";

  console.log("Student: " + student.name);
  console.log("Average Grade: " + average);
  console.log("Status: " + status);
  console.log("Attendance: " + student.attendance + "%");
  console.log("-------------------------");
}

const foundStudent = findStudent(2);
console.log("Found Student: ", foundStudent);
