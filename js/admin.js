function settings() {
    document.querySelector("#intro").classList.add("d-none");
    document.querySelector(".settings-menu").classList.remove("d-none");
    document.querySelector(".settings-menu-updatepass").classList.add("d-none");
    document.querySelector(".settings-menu-updateauth").classList.add("d-none");
}

function back() {
    document.querySelector("#intro").classList.remove("d-none");
    document.querySelector(".settings-menu").classList.add("d-none");
    document.querySelector(".settings-menu-updatepass").classList.add("d-none");
    document.querySelector(".settings-menu-updateauth").classList.add("d-none");
}

function updatePass() {
    document.querySelector("#intro").classList.add("d-none");
    document.querySelector(".settings-menu").classList.add("d-none");
    document.querySelector(".settings-menu-updatepass").classList.remove("d-none");
    document.querySelector(".settings-menu-updateauth").classList.add("d-none");
}

function authPass() {
    document.querySelector("#intro").classList.add("d-none");
    document.querySelector(".settings-menu").classList.add("d-none");
    document.querySelector(".settings-menu-updatepass").classList.add("d-none");
    document.querySelector(".settings-menu-updateauth").classList.remove("d-none");
}

function setBack() {
    document.querySelector("#intro").classList.add("d-none");
    document.querySelector(".settings-menu").classList.remove("d-none");
    document.querySelector(".settings-menu-updatepass").classList.add("d-none");
    document.querySelector(".settings-menu-updateauth").classList.add("d-none");
}



