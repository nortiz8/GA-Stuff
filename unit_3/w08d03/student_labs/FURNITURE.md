# Set up

Use Create React App (and don't forget to remove the .git)

## Inside App.js

Remove the App function and replace it with the App class

```js
class App extends React.Component {
  render () {
    return (
      <div className='container'>
        <h1 className='shop-name'>Heirloom Furniture Restoration</h1>
      </div>
    )
  }
}
```
<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"First Component Created".
<hr>

## Add State to the App Component

[State should be set in the constructor](https://reactjs.org/docs/state-and-lifecycle.html)

```js
constructor () {
  super()
  this.state = {chair: "Grandma's Favorite Chair"}
}
```
<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"State Added"
<hr>

## Create a Furniture Component and Pass Props

1. Create a `Furniture` component
1. have the render function return a `ul` with one `li`
element inside of it. This `li` element should render {this.props.chair} as `Grandma's Favorite Chair`

![rendered html](https://i.imgur.com/ZiWWkw4.png)


Check your react dev tools too

Expected Appearance


![](https://camo.githubusercontent.com/3ea69eb7b5c08bbbaf14cdeca4f993e1d28855f0/68747470733a2f2f692e696d6775722e636f6d2f4e356e743145412e706e67)

<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Furniture Componenet and Props".
<hr>

## Write a Function that is Called by a Click Event

1. inside the App class

```js

restore () {
  console.log('clicked it and the value of the App state is:', this.state)
}
```
1. Add a click event to the `li` in the Furniture component
1. Not working? Make sure you pass it from App to Furniture
1. `this.state` is undefined/null? Make sure you add the function to the constructor and bind `this`

Once the function is called on and the state has the expected value:
1. Let's give that `restore` function some more functionality. This app is going to help people figure out how best to restore their heirloom pieces
1. Obviously, in 2018, the best way to restore furniture is to paint it white. Let's add the code to do that

```js
restore () {
  this.setState({
    chair: `Paint ${this.state.chair} white`
  })
}
```

On click of the `li` it should now update to read
![white](https://i.imgur.com/sDBr6Bh.png)

1. It isn't obvious that we have to click the li element to get the recommendation:
in the furniture component, inside the li, let's add a button that says Recommendation, and let's move the click event to the button

1. Nice but we can click the button many times, which makes the advice come out a bit, weird

![weird](https://i.imgur.com/Ica0RDg.png)


1. let's fix this by only allowing the button to show up if `recommendationMade` is false
1. Let's update our state to have a key `recommendationMade` with a property of false to start
1. Render the recommendation button *only* if the `recommendationMade` value is false. (Hint: Look into short-circuiting or the ternary operator on MDN)
1. Use the react dev tools to toggle true false
![react dev tools toggle true false](https://i.imgur.com/eFdOzK9.png)
1. not working? did you pass this property down from App?

<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Function on Click"
<hr>

## Add More Items To restore

Expand state to:
```js
this.state = {
  furniture: [
    {
      piece: "Grandma's Favorite Chair",
      recommendationMade: false,
      id: 1
    },
    {
      piece: 'Grand Armoire',
      recommendationMade: false,
      id: 2
    },
    {
      piece: 'Fainting Couch',
      recommendationMade: false,
      id: 3
    },
    {
      piece: 'Fabergé Egg',
      recommendationMade: false,
      id: 4
    }
  ]
}
```

1. Render a `Furniture` component for each object in your furniture state
1. Refactor your code in the `Furniture` component so that you are able to render all the list items based on the data. The data should just render the data for `piece` right now
1. don't forget to assign `key` to the map elements. You should use the `id` from the data since most of the time you'll be getting data from a database and that data will have an id

Once you are rendering the list without errors it is time to think about restoring the functionality we had

<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Rendering List Items"
<hr>

1. Return the recommendation button
1. Add a `console.log` to the `restore` function to make sure that it still runs
1. Make sure that you're still passing the `restore` as a prop to `Furniture`

1. then try to get the right `recommendationMade` to toggle - this will be a multi-step process:

1. We probably want to pass the value of the furnitureItem that we want to get updated so that our code will know which one is getting updated. We can't pass it through `this.props.restore` directly because we can't add an argument this way (remember, it will try to call it autmoatically). But we can define an anonymous function and call our desired function with our arguments that way.
[Handling Events in React](https://reactjs.org/docs/handling-events.html)

1. don't forget to add a parameter to the restore function

So what we want right now is to click the button and see the item
![click item and see](https://i.imgur.com/9Z7jyZh.png)

<details><summary>Hints and Major Spoilers: ListItem Class</summary>


```
class Furniture extends Component {
    render() {
        return(
           <li>
              {this.props.furnitureItem.piece}
              {
                this.props.furnitureItem.recommendationMade === false
                && 
                <button onClick={() => this.props.restore(this.props.furnitureItem)}>
                 Recommendation
                </button>
              }
           </li>
        )
    }
}
```

</details>

1. It should be quite easy to update the item...something like:
```
item.recommendationMade = !item.recommendationMade
```

1. We have to call` this.setState({})` at the end of our `restore` function to update our state and thus update our data and view

  ![updated view](https://i.imgur.com/WNnWqqT.png)

  <hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Restored Restore Function Functionality"
<hr>

# Hungry for More

## Add More Furniture Through a Form

1. Should we make a new component just for a single input form? Nah, having one massive and complex component isn't the react way, but over-normalizing and making every html element a component isn't useful either
1. In our App component let's set up a form - two inputs, one text, one submit, right below the `h1`
1. write two functions, one for handling the item input change and another for the item input submit
1. add a new property to `this.state` in the app component called `newItem` and set it to an empty string
1. the text input will have an onChange event listener that will call the corresponding function
1. the form will have an on submit that will call the corresponding function, remember to prevent the default behavior for submit, see if you can empty the input after submit as well
1. on submit be sure to create an object that matches our other data and try shifting it into our furniture array

<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Able To Add More Items"
<hr>

## Delete an Item

It's hungry for more! Figure it out! You can do it!

<hr>
&#x1F534;

**Commit your work**

<br>
The commit message should read:

<br>
"I did it. HFM. YAY ME"


<hr>

## Practice CSS

Style your app
