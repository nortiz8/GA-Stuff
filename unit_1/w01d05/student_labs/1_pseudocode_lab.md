[![General Assembly Logo](/ga_cog.png)](https://generalassemb.ly)

# Pseudocoding

Pseudocoding is a helpful process to begin with before you start writing actual code. It makes it easier for you to conceptualize and understand what you're actually aiming to do. So, let's get some practice!

#### Learning Objectives

- Pseudocoding

#### Prerequisites

- Javascript
- Critical thinking

---

## Getting Started

1. In today's `student_labs` folder, create a file called `pseudocode.js` and a file called `index.html`

## Making Waffles - Pseudocode

### The Waffle-Fi

You have been hired to work on a new product for IOT (Internet of Things). Your goal will be to write the software for a new waffle iron that will allow users to make waffles just by pressing a button on their smartphone! Your focus will be to add syrup to a cooked waffle.

1. In your `pseudocode.js` file, pseudo code the process for making waffles with syrup.
1. Start simply with broad commands (put syrup on the waffles)
1. As time permits, make each broad command more specific (pull syrup from refrigerator, warm the syrup before you use it, open the lid on the syrup, pour the syrup on top of waffle).
1. Once you've done that, take the time to think this over as if you were writing it as an application. Comment each step and determine what it would be in your code from the following:

    - Assertions
        - This is a statement that is expected to be true (Boolean-valued function, i.e. a true–false expression), or in this instance, what we want to get to a true point ("Take the waffles from the freezer" would be an assertion after we confirmed that we had waffles in the freezer that we could remove).
    - Conditionals
        - A question is asked.  This tells us a conditional is coming
        - Looks for words like "if, unless, otherwise"
        - Think of all the possible outcomes of the situation
            - Each outcome represents an `if`, `else if`, or `else` statement
    - Loops
        - Something is done multiple times
        - Look for words like "while, as long as, until"
    - Functions
        - We've oversimplified a step which could be broken out into multiple steps.

1. Identify data types
    - whenever you have a conditional, loop, or something you're keeping track of, identify its type
        - text (strings)
        - numbers (ints/floats)
        - true/false values (booleans)
        - collections of stuff (arrays)

1. (Optional) Try to convert each line into something that resembles code

## Making Waffles - Actual Code

1. In your `index.html`, connect your `pseudocode.js` file and test to make sure it's connected with a console log
1. Now, in your `pseudocode.js`, try and write a program that implements your pseudocoded waffles with syrup process.
    - As a bonus, try and make it an interactive application in your browser!

## Hungry for More?

1. Try connecting your prompt events to the DOM and adding some HTML/CSS to your page.
1. Waldo Hunter: Write a function that returns the exact position of Waldo

```js
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

const = findWaldo (searchArray) = > {
  // add your code here
}

findWaldo(whereIsWaldo); // [3][1]


const waldoWhereAreYou = ['Winifred', ['Wilma' , 'Whorton'], ['William', 'Wesley', ['Waylon', ['Wade', 'Warren', ['Walter']]],['Wyatt', 'Willa'], ['Willow', 'Wren', ['Waverly', ['Wendy', 'Waldo', 'Wynter']]], ['Wanda', 'Winona']]]

findWaldo(waldoWhereAreYou); // ???
```

---

*Copyright 2018, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
