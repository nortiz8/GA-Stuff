import React from 'react'

const Book = (props) => {
    console.log(props)
    return(
        <div>
            <p>{props.title}</p>
            <p>{props.author}</p>
        </div>
    )
}

export default Book