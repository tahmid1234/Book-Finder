import React ,{useState}from "react"
import DropDown from './component/DropDOwnList'
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
  const [selectedItem,setSelectedItem]=useState("relevance")

  const initialState=()=>{
    console.log("hello")
  }
  initialState()

  const handleSubmit=async(event)=>{
    
    event.preventDefault()
    await getBooks(searchTerm,setBooks,currentPage,setTotalItems,selectedItem)
    setTotalPAge(Math.round(totalItem/40))
    console.log("books")
   
    
    //console.log(books.kind)


  }

  const handleChange=(event)=>{
    
    setSearchTerm(event.target.value)
    return
  }

  const onSelect = async (item)=>{
    console.log("Item",item)
    setSelectedItem(item)
    if(searchTerm!="search+terms"){
      await getBooks(searchTerm,setBooks,currentPage,setTotalItems,selectedItem)
    }

  }

  const nextPage = async(page_number) =>{
    setCurrentPage(page_number)
    await getBooks(searchTerm,setBooks,currentPage,setTotalItems,selectedItem)

  } 

  return <div>
    <div className="col">
    <DropDown onSelect={onSelect}></DropDown>
   
    <Searchbar handleChange={handleChange} handleSubmit={handleSubmit}/>
   
    </div>
    <BooksList books={books}/>
    {
      console.log(totalItem,"  ki holo hello ")
    }
  
    {
      
      totalItem>39
      ?<Pagination
        nextPage={nextPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
      :  ""
    }
  </div>
}

export default App;