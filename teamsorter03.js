// Type a new student's name in an open text box and assign them to a team. 
// Button to show all teams after, organized into the teams.

let teamNames = ["Team A", "Team B"]
let teamMembers = [ [], [] ]

function addToTeam() {
    let team = document.getElementById("teamNameAb").value
    let studentOptions = document.getElementById("studentNames")
    let student = document.getElementById("studentNames").value
    let teamIndex = teamNames.indexOf(team)
    teamMembers[teamIndex].push(student)
    console.log(teamMembers);

    for (let i=0; i<studentOptions.length; i++) {
    if (studentOptions[i].value == student) {
        studentOptions.remove(i)
        }
    }     
}

function addStudent(){
    let newFirstName = document.getElementById("firstNameInput").value
    let newLastName = document.getElementById("lastNameInput").value
    var option = document.createElement("option")
    option.innerHTML = newFirstName+" "+newLastName
    option.value = newLastName+', '+newFirstName
    studentNames.options.add(option)
}

// .innerHTML SHOW TEAMS AFTER IN ALERT BOX
function showTeams() {
    let student = document.getElementById("studentNames").value
    let studentNameOrder = student.innerHTML
    console.log(window.alert(`Team A: ${teamMembers[0]} \nTeam B: ${teamMembers[1]}`));
}