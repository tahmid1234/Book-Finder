import {unstable_renderSubtreeIntoContainer} from 'react-dom'

const Movies=(props)=>{
    console.log("eta book dekhi")
    console.log(props.data)
    let src=""
    if(props.data.volumeInfo.imageLinks.thumbnail==null){
        src="http://books.google.com/…edge=curl&source=gbs_api"
    }
    else{
        src=props.data.volumeInfo.imageLinks.thumbnail
    }
   

    return(
        
        <div class="col s12 m3">
        <div class="card">
          <div class="card-image">
          
              <img
                src={src}
                alt=""
                style={{ width: "10", height: "50" }}
              />
           
  
            <span class="card-title">{props.data.volumeInfo.title}</span>
          </div>
          <div class="card-content">{props.data.volumeInfo.authors}</div>
          <div class="card-action">
           
          </div>
        </div>
      </div>
     
       
                
                

    )
}
export default Movies;