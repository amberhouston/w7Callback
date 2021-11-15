

function loading() {
    document.getElementById("Welcome").innerHTML = "Loading message..."
    console.log("Loading message");


    setTimeout(greet, 5000, 'user', sayName)
}



function greet(name, userName) {
    document.getElementById("Welcome").innerHTML = "Welcome" + ' ' + name + " to our page!"
    console.log("Welcome" + ' ' + name + " to our page!");

    userName(name);
}

function sayName(name) {
    document.getElementById("User").innerHTML = "Homework by Dat, Ken, and Amber!"
    console.log('Homework by Dat, Ken, and Amber!');
}

let callbackBtn = document.querySelector('#callbackBtn');
callbackBtn.addEventListener("click", loading);