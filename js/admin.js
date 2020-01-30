function settings() {
    
    document.querySelector(".settings-menu").classList.remove("d-none");
    document.querySelector(".settings-menu-updatepass").classList.add("d-none");
    document.querySelector(".settings-menu-updateauth").classList.add("d-none");
    document.querySelector("#viewApplicants").classList.add("d-none");
    document.querySelector("#viewApplicantsDetails").classList.add("d-none");
}

function back() {
    
    document.querySelector(".settings-menu").classList.add("d-none");
    document.querySelector(".settings-menu-updatepass").classList.add("d-none");
    document.querySelector(".settings-menu-updateauth").classList.add("d-none");
    document.querySelector("#viewApplicants").classList.remove("d-none");
    document.querySelector("#viewApplicantsDetails").classList.add("d-none");
}

function updatePass() {
    
    document.querySelector(".settings-menu").classList.add("d-none");
    document.querySelector(".settings-menu-updatepass").classList.remove("d-none");
    document.querySelector(".settings-menu-updateauth").classList.add("d-none");
    document.querySelector("#viewApplicants").classList.add("d-none");
    document.querySelector("#viewApplicantsDetails").classList.add("d-none");
}

function authPass() {
    
    document.querySelector(".settings-menu").classList.add("d-none");
    document.querySelector(".settings-menu-updatepass").classList.add("d-none");
    document.querySelector(".settings-menu-updateauth").classList.remove("d-none");
    document.querySelector("#viewApplicants").classList.add("d-none");
    document.querySelector("#viewApplicantsDetails").classList.add("d-none");
}

function setBack() {
    
    document.querySelector(".settings-menu").classList.remove("d-none");
    document.querySelector(".settings-menu-updatepass").classList.add("d-none");
    document.querySelector(".settings-menu-updateauth").classList.add("d-none");
    document.querySelector("#viewApplicants").classList.add("d-none");
    document.querySelector("#viewApplicantsDetails").classList.add("d-none");
}



