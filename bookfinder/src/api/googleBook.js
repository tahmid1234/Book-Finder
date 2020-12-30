import axios from 'axios'
import { useState } from 'react';

const GoogleBookApi=axios.create({
    baseURL:"https://www.googleapis.com/books/"
});

const getBooks=(SearchTerm,setBooks,pageNo,setTotalItems,selectedItem)=>{
    let status=false
    console.log(selectedItem,"Newestttt")
    if(selectedItem==="oldest"){
        selectedItem="newest"
        status=true
    }
    GoogleBookApi.get("v1/volumes/",{
        params:{
            key:"AIzaSyB8aTDJK1adMZJG1byTgIzfkFc90KyJ2MQ",
            q:SearchTerm,
            startIndex: 40*pageNo,
            maxResults: 40,
            orderBy:selectedItem

        
          
          
        }
    }).then((response)=>{
        let i=0
        console.log("responsessssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss")
        console.log(response.data.items/+"0".kind)
        let list=response.data.items
        if(status===true){
            list=list.reverse()
        }
        setTotalItems(response.data.totalItems)
        console.log(selectedItem,"Newesttttttttttttttttttt")
        setBooks(list)
    })

}

const getBooksDetails=(bookId,setCurrentBook)=>{

    GoogleBookApi.get("v1/volumes/"+bookId,{
        params:{
            key:"AIzaSyB8aTDJK1adMZJG1byTgIzfkFc90KyJ2MQ",
  
        }
    }).then((response)=>{
        console.log("response book")
        console.log(response.data)
        
        setCurrentBook(response.data)
    })

}




export {getBooks,getBooksDetails};