import {unstable_renderSubtreeIntoContainer} from 'react-dom'
import {BrowserRouter,Link,Route} from 'react-router-dom'

const Movies=(props)=>{
    console.log("eta book dekhi")
    console.log(props.data.id)
    let src=""
    if(props.data.volumeInfo.imageLinks==null){
        src="https://picsum.photos/200/300"
    }
    else{
        src=props.data.volumeInfo.imageLinks.thumbnail
    }
   

    return(
        <Link
        to={{
          pathname:"/book/"+props.data.id,
          book_id:props.data.id
        }}
        >
        <div class="col s12 m3" style={{borderBottomColor:"#ff0000",borderWidth:2,backgroundColor:"blanchedalmond"}}>
        <div class="card"style={{height:400,width:200,borderBottomColor:"#ff0000",borderWidth:2}}>
          <div class="card-image" >
          
              <img
                src={src}
                alt=""
                style={{ width: 150, height: 280 }}
              />
           
  
           
          </div>
          <div className="row">
          <div class="card-content"  style={{ width: 20, height: 5,color:"orange" }}>{props.data.volumeInfo.publishedDate}</div>
          <div class="card-content"  style={{ width: 180, height: 50 ,color:"olive"}}>{props.data.volumeInfo.title}</div>
          </div>
    <div class="card-action">
          
           
          </div>
        </div>
      </div>
     
       
      </Link>        
                

    )
}
export default Movies;