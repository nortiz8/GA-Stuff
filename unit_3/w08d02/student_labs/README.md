# Lab: Make Your Own Biography Cards!!

* Components refer to the actually components we are creating. The Bio component is created inside the `Bio.js` file.
* JSX Elements refer to the element itself, that we have created. `<Bio />`

**First create a components folder within our src folder**

1. In your components folder create 4 new components
    1. MyImage
    2. BioFacts
    3. Bio
    4. Facts
**Remember** to export it with: `export default Component_Name;`
**Remember to import `import React, { Component } from 'react';` in each component**

2. Inside your `app.js` file under `<div className="bio-container">`, use your new MyImage element
    * **Remember** to import your MyImage component first in the app.js file
3. MyImage has 1 data attribute (prop) called imageSrc. This will be equal to an image url of yourself. `<MyImage imageSrc="somerandomlink.com"/>` (Or you can use the myspace placeholder image `https://myspace.com/common/images/user.png`)
4. Then go inside of your MyImage component and add an `img` element whose src is equal to the imageSrc prop we just passed down. Now check it out!!!
5. Next, lets go back to our `app.js` file and add our new `<BioFacts />` element below the MyImage element. BioFacts takes 6 different different Props
    1. name
        * A string equal to your name
    2. age
        * A number equal to your age
    3. hometown
        * A string equal to your hometown
    4. style
        * an object with your favorite color and font-family.
        * Example: `{color: 'red', font-family:'Arial'}`
    5. shortBio
        * A string which equals your biography
    6. onClick
       * A function, equal to my sayHello function (`this.sayHello`)

**Notice that props can be any datatype**

6. Now, lets jump into our BioFacts.js file and add a style tag to our containing div element and set it equal to the style object from our props. (This will set the style for the entire component)
    * `<div style={style} >`
    * **Note it's not exactly that :arrow_up:, remember how we get data from our props**
7. Below the containing div element add a the Bio element and pass it 3 props (That we got from the App file).
    1. name
    2. age
    3. hometown
8. Now lets go into the `Bio.js` file and display a h1 inside our containing div tags that looks liek so:
    * `<h2>YourName | Hometown | YourAge</h2>`, use the props that you got from BioFacts!
9. Now let's go back to the BioFacts.js file and below the Bio element, add our Facts element
10. Facts takes 2 props:
    1. shortBio
    2. onClick
11. Finally, lets jump into our `Facts.js` file
12. Display a paragraph `<p>` with our bio inside of it.
13. Below the `<p>`, add a button whose onClick attribute is equal to the onClick function (in our props) passed down from our BioFacts component. `<button onClick={someFunctionHere}>`

## Nice Work!!

