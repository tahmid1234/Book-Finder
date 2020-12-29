import React ,{useState}from "react"
import Navbar from "./component/navBar"
import Searchbar from "./component/searchbar"
import {getBooks} from "./api/googleBook";
import BooksList from "./component/BooksList"
import {BrowserRouter,Link,Route} from 'react-router-dom'
import Pagination from './component/pagination'
const App=()=>{
  const  [searchTerm,setSearchTerm]=useState("search+terms");
  const [books,setBooks]=useState([]);
  const [currentPage,setCurrentPage]=useState(0)
  const [totalItem,setTotalItems]=useState(0)
  const [totalPages,setTotalPAge]=useState(0)

  const initialState=()=>{
    console.log("hello")
  }
  initialState()

  const handleSubmit=async(event)=>{
    
    event.preventDefault()
    await getBooks(searchTerm,setBooks,currentPage,setTotalItems)
    setTotalPAge(Math.round(totalItem/40))
    console.log("books")
    console.log(books)


  }

  const handleChange=(event)=>{
    
    setSearchTerm(event.target.value)
    return
  }

  const nextPage = async(page_number) =>{
    setCurrentPage(page_number)
    await getBooks(searchTerm,setBooks,currentPage,setTotalItems)

  } 

  return <div><Navbar/>
    <Searchbar handleChange={handleChange} handleSubmit={handleSubmit}/>
    <BooksList books={books}/>
    <div style={{marginTop:20,marginBottom:20}}></div>
  
    {
      totalItem>39
      ?<Pagination
        nextPage={nextPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
      :  "hello"
    }
  </div>
}

export default App;