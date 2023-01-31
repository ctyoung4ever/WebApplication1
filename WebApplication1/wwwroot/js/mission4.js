//js file Collin Young

//call the function
$("#btnSend").click(function () {

    //initiate the variables
    let assignments = parseFloat($("#assignments").val());
    let groupProject = parseFloat($("#groupProject").val());
    let quizzes = parseFloat($("#quizzes").val());
    let midtermExam = parseFloat($("#midtermExam").val());
    let finalExam = parseFloat($("#finalExam").val());
    let intex = parseFloat($("#intex").val());
    let lettergrade = "";

    //calculate the final grade percentage
    let gradeFinal = ((assignments * 0.5) + (groupProject * 0.1) + (quizzes * 0.1) + (midtermExam * 0.1) + (finalExam * 0.1) + (intex * 0.1));

    //if else statements to handle the return of the letter grade
    if (gradeFinal >= 94) {
        lettergrade = "A";
    }

    else if (gradeFinal >= 90) {
        lettergrade = "A-";
    }

    else if (gradeFinal >= 87) {
        lettergrade = "B+";
    }

    else if (gradeFinal >= 84) {
        lettergrade = "B";
    }

    else if (gradeFinal >= 80) {
        lettergrade = "B-";
    }

    else if (gradeFinal >= 77) {
        lettergrade = "C+";
    }

    else if (gradeFinal >= 74) {
        lettergrade = "C";
    }

    else if (gradeFinal >= 70) {
        lettergrade = "C-";
    }

    else if (gradeFinal >= 67) {
        lettergrade = "D+";
    }

    else if (gradeFinal >= 64) {
        lettergrade = "D";
    }

    else if (gradeFinal >= 60) {
        lettergrade = "D-";
    }

    else {
        lettergrade = "E";
    }

    //return the elements back to the form of the final grade and the letter grade
    document.getElementById("message").innerHTML = gradeFinal.toFixed(2);
    document.getElementById("letterGrade").innerHTML = lettergrade;
    
});