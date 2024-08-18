/*4. Assignment: Building a Student Management System
Description:
You are tasked with building a student management system using JavaScript. The system should allow you to
perform various operations on a list of students, including adding, updating, deleting, and "ispla>ing stu"ent
information.
Requirements:
Here is an initial array of students. Each student is represented as an object with the following properties: id,
firstName, lastName, age, and grade.

const students=[
{id: 1, firstName: "John", lastName: "Doe", age: 20, grade: "A"},
{id: 2, firstName: "Jane", lastName: "Smith", age: 22, grade: "B"},
{id: 3, firstName: "Bob", lastName: "Johnson", age: 19, grade: "A"},
//Add more students as needed
];

Implement the following functions using pure JavaScript (without any external libraries or frameworks):
a. Add a Student: Create a function to add a new student to the array.
b. Update Student Information: Create a function to update a student's information based on their id.
c. Delete a Student: Create a function to delete a student based on their id.
d. List All Students: Create a function to display a list of all students.
e. Find Students by Grade: Create a function to find all students who have a specific grade.
f. Calculate Average Age: Create a function to calculate the average age of all students using array method.*/

const students = [
    { id: 1, firstName: "John", lastName: "Doe", age: 20, grade: "A" },
    { id: 2, firstName: "Jane", lastName: "Smith", age: 22, grade: "B" },
    { id: 3, firstName: "Bob", lastName: "Johnson", age: 19, grade: "A" },
    // Add more students as needed
];

// a. Add a Student
function addStudent(id, firstName, lastName, age, grade) {
    const newStudent = { id, firstName, lastName, age, grade };
    students.push(newStudent);
}

// b. Update Student Information
function updateStudent(id, newInfo) {
    const student = students.find(student => student.id === id);
    if (student) {
        Object.assign(student, newInfo);
    } else {
        console.log(`Student with id ${id} not found.`);
    }
}

// c. Delete a Student
function deleteStudent(id) {
    const index = students.findIndex(student => student.id === id);
    if (index !== -1) {
        students.splice(index, 1);
    } else {
        console.log(`Student with id ${id} not found.`);
    }
}

// d. List All Students
function listAllStudents() {
    console.log("List of All Students:");
    students.forEach(student => {
        console.log(`${student.id}: ${student.firstName} ${student.lastName}, Age: ${student.age}, Grade: ${student.grade}`);
    });
}

// e. Find Students by Grade
function findStudentsByGrade(grade) {
    const studentsByGrade = students.filter(student => student.grade === grade);
    return studentsByGrade;
}

// f. Calculate Average Age
function calculateAverageAge() {
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    return totalAge / students.length;
}

// Example usage:

// Adding a new student
addStudent(4, "Alice", "Brown", 21, "B");

// Updating a student's information
updateStudent(2, { firstName: "Janet", lastName: "Smith", age: 23, grade: "A" });

// Deleting a student
deleteStudent(3);

// Listing all students
listAllStudents();

// Finding students by grade
const gradeAStudents = findStudentsByGrade("A");
console.log("Students with grade A:", gradeAStudents);

// Calculating the average age
const averageAge = calculateAverageAge();
console.log("Average Age of Students:", averageAge);