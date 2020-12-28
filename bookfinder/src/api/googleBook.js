import axios from 'axios'

const GoogleBookApi=axios.create({
    baseURL:"https://www.googleapis.com/books/"
});

const getBooks=(SearchTerm,setBooks)=>{

    GoogleBookApi.get("v1/volumes/",{
        params:{
            key:"AIzaSyB8aTDJK1adMZJG1byTgIzfkFc90KyJ2MQ",
            q:SearchTerm,
            maxResults:40
          
        }
    }).then((response)=>{
        console.log("response")
        console.log(response.data)
        setBooks(response.data.items)
    })

}

export {getBooks};