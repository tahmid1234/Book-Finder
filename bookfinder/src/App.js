import React ,{useState}from "react"
import Navbar from "./component/navBar"
import Searchbar from "./component/searchbar"
import {getBooks} from "./api/googleBook";
import BooksList from "./component/BooksList"
const App=()=>{
  const  [searchTerm,setSearchTerm]=useState("search+terms");
  const [books,setBooks]=useState([]);

  const initialState=()=>{
    console.log("hello")
  }
  initialState()

  const handleSubmit=async(event)=>{
    
    event.preventDefault()
    await getBooks(searchTerm,setBooks)
    console.log("books")
    console.log(books)


  }

  const handleChange=(event)=>{
    
    setSearchTerm(event.target.value)
    return
  }

  return <div><Navbar/>
    <Searchbar handleChange={handleChange} handleSubmit={handleSubmit}/>
    <BooksList books={books}/>
  </div>
}

export default App;