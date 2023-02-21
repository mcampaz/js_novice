const btn = document.getElementById('button');

const rainbow = ['red', 'orange', 'yellow', 'green', 'blue','rebeccapurple', 'violet'];

function change() {
    document.body.style.background = rainbow[Math.floor(7*Math.random())];   

    const ask = (question, answer) => {
        const answered = prompt(`${question}`);
        check(answer, answered);
    }
    
    const check = (answer, answered) => {
        const result = (answered === answer);
        if (result) {
            score++;
        }
        alert(`Your answer is: ${result} and Your score is: ${score}`);
    }
    
    const gameOver = () => {
        alert(`Game Over!!! Your score is: ${score}`);
    }
    
    const quiz = [
        ["What is Superman's real name?","Clark Kent"],
        ["What is Wonder Woman's real name?","Diana Prince"],
        ["What is Batman's real name?","Bruce Wayne"]
    ];
    
    let score = 0;

    quiz.forEach((value) => 
        ask(value[0], value[1]));

    gameOver();

    
    
}

btn.addEventListener('click', change);

function testMean() {
    
    // function mean(array) {
    //     const total = array.reduce((a, b) => a + b);
    //     return total/array.length;
    // }

    function mean(array, callback) {
        if (callback) {
            array.map( callback );
        }
        const total = array.reduce((a, b) => a + b);
        return total/array.length;
    }

    function double(number){
        return 2 * number;
    }

    let myNumbers = [1, 2, 3, 4, 5];

    console.log("Doubled; Mean: " + mean(myNumbers, x => 2 * x));

}
testMean();