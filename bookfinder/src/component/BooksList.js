import React from 'react'
import Movies from './Books'
import Books from './Books'

const BooksList=(props)=>{
    console.log("props")
    console.log(props.books.kind)
    return(
        <div className="container"style={{borderBottomColor:"blue",borderWidth:2}}>
            <div className="row">
                <div className="col s12" style={{marginRight:2,marginBottom:5}}>
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