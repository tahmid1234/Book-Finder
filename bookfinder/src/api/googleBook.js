import axios from 'axios'

const GoogleBookApi=axios.create({
    baseURL:"https://www.googleapis.com/books/"
});

const getBooks=(SearchTerm,setBooks,pageNo,setTotalItems)=>{

    GoogleBookApi.get("v1/volumes/",{
        params:{
            key:"AIzaSyB8aTDJK1adMZJG1byTgIzfkFc90KyJ2MQ",
            q:SearchTerm,
            startIndex: 40*pageNo,
            maxResults: 40,

        
          
          
        }
    }).then((response)=>{
        console.log("response")
        console.log(response)
        setTotalItems(response.data.totalItems)
        setBooks(response.data.items)
    })

}

export {getBooks};