
function findHighestMarks(marks) {
    // Ensure the array is not empty
    if (marks.length === 0) {
        console.log("No student data available");
        return;
    }

    let highestMarks = marks[0]; // Initialize with the first student's marks

    // Iterate through the array to find the highest marks
    for (let i = 1; i < marks.length; i++) {
        highestMarks = marks[i] > highestMarks ? marks[i] : highestMarks;
    }

    console.log("Highest marks in the class: " + highestMarks);
}

const studentMarks = [74, 92, 87, 95, 89];
findHighestMarks(studentMarks);