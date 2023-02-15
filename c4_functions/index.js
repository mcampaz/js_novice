const btn = document.getElementById('button');

const rainbow = ['red', 'orange', 'yellow', 'green', 'blue','rebeccapurple', 'violet'];

function change() {
    document.body.style.background = rainbow[Math.floor(7*Math.random())];   

    const quiz = [
        ["What is Superman's real name?","Clark Kent"],
        ["What is Wonder Woman's real name?","Diana Prince"],
        ["What is Batman's real name?","Bruce Wayne"]
    ];
    
    let score = 0;
    for(const [question, answer] of quiz) {
        const answered = prompt(`${question}`);
        const result = (answered === answer);
        if (result) {
            score++;
        }
        alert(`Your answer is: ${result}`);
    }
    alert(`Your score is: ${score}`);
}

btn.addEventListener('click', change);