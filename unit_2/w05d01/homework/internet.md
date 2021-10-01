# INTERNET ANSWERS
What is the difference between a client and a server?

Client is a user computer. It sends requests to servers(websites, etc) for data to use.

What is the request-response cycle?

Client side computer makes a request to a server to load their website. The websites sends a respnse, the client then makes more requests while using the site and continues the cycle of doing an action and getting an answer

define html

Hyper Text Markup Language

define http

HyperTextTransferProtocol

Define Front End

Front end is the part of the web that a user can interact with.

According to the article, what are the three parts of the backend?

A server, an application, and a database

# BIG O NOTATION

#### #1

```javascript
function wordOccurrence(word, phrase) {
  let result = 0;
  const array = phrase.split(' ');
  for (let i = 0; i < array.length; i++) {
    if (word.toLowerCase() === array[i].toLowerCase()) {
      result++;
    }
  }
  return result;
}
```

O(N)

#### #2

```javascript
function bubble_sort(list) {
  for (let i = 0; i < list.length - 1; i++) {
    for (let j = 0; j < list.length - 2; j++) {
      if (list[j + 1] < list[j]) {
        const temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }
    }
  }
  return list;
}
```

O(n^2)

#### #3

```javascript
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
```

O(N!)

#### #4

```javascript
function bobIsFirst(people) {
  return people[0] == 'bob';
}
```

O(1)

#### #5

```javascript
function isPalindrome(input) {
  const stack = [];
  let output = '';
  for (let i = 0; i < input.length; i++) {
    stack.push(input[i]);
  }
  while (stack.length) {
    output += stack.pop();
  }
  return output == input;
}
```

O(N)

#### #6

```javascript
function sumOfDivisors(n) {
  let result = 0;
  let i = 1;
  while (i < n) {
    if (n % i == 0) {
      result += i;
    }
    i++;
  }
  return result;
}
```

O(N)

#### #7

```javascript
function printAllNumbersThenSumPairs(numArray) {
  numArray.forEach(num => {
    console.log(num);
  });
  numArray.forEach((num, index) => {
    if (index < numArray.length - 1) {
      console.log(num + numArray[index + 1]);
    }
  });
}
```

O(N^2)

#### #8

```javascript
function isPrime(num) {
  if (num == 1 || num == 2) {
    return false;
  }
  for (let i = 2; i < num - 1; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
```

O(N)
