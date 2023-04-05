const button = document.body;
let studentsArray = []
function buttonHandling(event){
    if(event.target.textContent === "Change Background Color"){
        document.body.classList.toggle("blue")
    }
    else if(event.target.textContent === "Submit"){
        const firstname = document.querySelector("#firstname");
        const lastname = document.querySelector("#lastname");
        const progname = document.querySelector("#progname");
        let student = {
            firstName: firstname.value,
            lastName: lastname.value,
            progName: progname.value
        };
        studentsArray.push(student);
        addStudentToList(student)
        
    }
}

button.addEventListener("click", buttonHandling)

function addStudentToList(student){
    const citList = document.querySelector("#CIT");
    const cstList = document.querySelector("#CST");
    const newLi = document.createElement("li");
    newLi.textContent = `${student.firstName} ${student.lastName}`;
    //newStudent will have whatever is passed to this function when it's
    //{firstName:, lastName:,progName:}
    // if newStudent.progName === CIT --> add a new li to the <ul id = "CIT"
    if (student.progName === "CIT") {
        citList.appendChild(newLi)
    }
    else if (student.progName === "CST") {
        cstList.appendChild(newLi)
    }

}

