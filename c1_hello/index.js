const btn = document.getElementById('button');

const rainbow = ['red', 'orange', 'yellow', 'green', 'blue','rebeccapurple', 'violet'];

alert("Welcome to Quiz!!!")

function change() {
    document.body.style.background = rainbow[Math.floor(7*Math.random())];
    const message = "My number... infinite of Hello World!!!";
    alert(message);
}

btn.addEventListener('click', change);