const findWordFrequencies = string => {
  sentence = string
    .toLowerCase()
    .split(' ');
//   console.log(sentence);
  const wordObject = {};
  sentence.forEach(word) => {
      //if word is not a key in the object, add it to object
      if(wordObject[word]){
          wordObject[word] = 1
        }
        else {
            //else increment the value
        wordObject[word] += 1
      }
  } return wordObject
}
//   const dupes = [];
//   for (i = 0; i < sentence.length; i++) {
//     let currentWord = sentence[i];
//     let nextWord = sentence[i + 1];
//     if (currentWord === nextWord) {
//       dupes.push(currentWord);
//       //   let currentCount = 1;
//       //   currentCount++;
//       //   console.log(currentCount);
//       //   freq.currentWord = currentCount;
//     } else {
//       let currentCount = 1;
//       wordObject.thing = currentCount;
//       console.log(currentCount);
//     }
//     console.log(dupes);
//   }
//   return freq;
// };

// const frequency = findWordFrequencies(
//   'That that is is that that is not is not'
// );
// console.log(frequency);
