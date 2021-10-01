// alert('oh hai')

// const yourAnswer = prompt('Do you like apples?', 'yes/no')
// // console.log(yourAnswer)

// if (yourAnswer === 'yes') {
//     console.log('Excellent!')
// } else if (yourAnswer === 'no') {
//     console.log('What?!?! How can you not like apples?')
// } else {
//     console.log('Does not compute')
// }

const greet = () => {
    alert('hi')
}

const sayBye = () => {
    alert('Bye!')
}

// const answer = prompt('Are you arriving or leaving?', 'arriving or leaving')

// if (answer === 'arriving') {
//     greet()
// } else if (answer === 'leaving') {
//     sayBye()
// }  else {
//     console.log('I do not understand')
// }

// let action = null

// while(action !== 'stop') {
//     action = prompt('What do you want to do', 'Your action')
// }




// const conversation = () => {
//     greet()
//     sayBye()
// }

// conversation()

const func1 = () => {
    console.log(1);
    func2(); //why can I call this now, even though the definition is below?
    func3();
    console.log('Finished!');
}
const func2 = () => {
    console.log(2);
    func4();
    func6();
}
const func3 = () => {
    console.log(3);
    func5();
}
const func4 = () => {
    console.log(4);
}
const func5 = () => {
    console.log(5);
}
const func6 = () => {
    console.log(6);
}
// func1();

let apples = 0
let money = 20

const start = () => {
    apples = 0
    money = 20
    askForAction()
}

const askForAction = () => {
    showStatus()
    const choice = prompt("What do you want to do?", "(b)uy apple or (e)at apple or (r)estart")
    if (choice === 'b') {
        buyApple()
    } else if ( choice === 'e') {
        eatApple()
    } else if ( choice === 'r') {
        start()
    } else {
        alert('that is not a valid option')
    }
}

const showStatus = () => {
    alert("You have " + apples + " apples and $" + money)
}

const buyApple = () => {
    apples++
    money -=1
    askForAction()
}

const eatApple = () => {
    apples--
    askForAction()
}

start()
// buyApple()
// eatApple()









