import {unstable_renderSubtreeIntoContainer} from 'react-dom'
import {BrowserRouter,Link,Route} from 'react-router-dom'
import BookDetails from './booksDetails'
const Movies=(props)=>{
    console.log("eta book dekhi")
    console.log(props.data)
    let src=""
    if(props.data.volumeInfo.imageLinks==null){
        src="http://books.google.com/…edge=curl&source=gbs_api"
    }
    else{
        src=props.data.volumeInfo.imageLinks.thumbnail
    }
   

    return(
        
        <div class="col s12 m3" style={{borderColor:"red",borderWidth:10}}>
        <div class="card"style={{height:350,width:200,borderColor:"red",borderBlockColor:"red",borderBlockWidth:10}}>
          <div class="card-image" >
          
              <img
                src={src}
                alt=""
                style={{ width: 200, height: 180 }}
              />
           
  
           
          </div>
        
          <div class="card-content"  style={{ width: 180, height: 170 }}>{props.data.volumeInfo.authors}</div>
          <div class="card-action">
           
          </div>
        </div>
      </div>
     
       
                
                

    )
}
export default Movies;