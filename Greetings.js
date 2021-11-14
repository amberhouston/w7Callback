function greet(name, userName) {
    console.log('Homework by Dat, Ken, and Amber!');

    userName(name);
}

function sayName(name) {
    console.log('Welcome' + ' ' + name + " to our page!");
}

setTimeout(greet, 3000, 'User', sayName)

document.getElementById("demo").innerHTML = userName;