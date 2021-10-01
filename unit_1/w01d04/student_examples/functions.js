// const printBoo = () => {
//     console.log("=====");
//     console.log("BOO!");
//     console.log("=====");
// };

// printBoo();


// const printSum = () => {
//     console.log(10 + 10);
// };

// printSum();


// const printTriangle = () => {
//     console.log("#");
//     console.log("##");
//     console.log("###");
//     console.log("#####");
//     console.log("######");
    
// };

// printTriangle();

// const printTriangleFor = () => {
//     for (let i = 1; i <= a; i++) {
//         console.log(("#").repeat(i));
//     };
// };

// printTriangleFor(a = 15);


const minusOne = (num) => {
    console.log(num - 1);
}
minusOne(100);


const makeSentence = (word1, word2, word3) => {
    console.log(`Oh boy, do ${word1} ${word2} ${word3} or what?`);
}
makeSentence("I", "want", "chimichangas");
makeSentence("I", "love", "JavaScript");

const array = [3, 6, 13, 8]
const getLastElement = (arr) => {
    console.log(arr[arr.length-1]);
}
getLastElement([3, 4, 6, 23, [3, 54, 1]]);
getLastElement(array);

const divideThreeNums = (num1, num2, num3) => {
    console.log( (num2 / num1) / num3);
}

divideThreeNums(10, 5, 2);