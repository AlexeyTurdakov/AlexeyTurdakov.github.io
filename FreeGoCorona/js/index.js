"use strict";

let users = document.getElementById("users");
let experts = document.getElementById("experts");

let usersNum = +users.innerText;
let expertsNum = +experts.innerText;

function changeNumberUsers() {
  users.innerText = `${++usersNum}`;
}

function changeExpertsUsers() {
  experts.innerText = `${++expertsNum}`;
}

setInterval(changeNumberUsers, 300, usersNum);
setInterval(changeExpertsUsers, 1500, expertsNum);
