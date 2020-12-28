import React from 'react'
import Movies from './Books'
import Books from './Books'

const BooksList=(props)=>{
    console.log("props")
    console.log(props)
    return(
        <div className="container">
            <div className="row">
                <div className="col s12">
                {props.books.map((book,i)=>{
                        console.log(book)
                        return (
                            <Books data={book} key={i}/>
                           )
                    })}

                    
                   
                </div>
            </div>
        </div>
    )
}

export default BooksList