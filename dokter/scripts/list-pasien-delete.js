function addPatient() {
    var patientList = document.getElementById("patientList");

    var newPatientName = prompt("Enter the patient's name:");

    // Check if the patient with the same name already exists
    if (!isPatientExist(newPatientName)) {
        var newPatient = document.createElement("li");
        newPatient.textContent = newPatientName;
        patientList.appendChild(newPatient);
    } else {
        alert("Patient with the same name already exists!");
    }
}

function deletePatient() {
    var patientList = document.getElementById("patientList");
    var patientNameToDelete = prompt("Enter the name of the patient to delete:");

    // Check if the patient with the specified name exists
    var patientToDelete = findPatientByName(patientNameToDelete);

    if (patientToDelete) {
        patientList.removeChild(patientToDelete);
    } else {
        alert("Patient not found!");
    }
}

function isPatientExist(patientName) {
    var patientList = document.getElementById("patientList");
    var patients = patientList.getElementsByTagName("li");

    for (var i = 0; i < patients.length; i++) {
        if (patients[i].textContent === patientName) {
            return true;
        }
    }
    return false;
}

function findPatientByName(patientName) {
    var patientList = document.getElementById("patientList");
    var patients = patientList.getElementsByTagName("li");

    for (var i = 0; i < patients.length; i++) {
        if (patients[i].textContent === patientName) {
            return patients[i];
        }
    }
    return null;
}
