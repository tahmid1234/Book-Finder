import React , {useState,useEffect} from 'react'
import {getBooksDetails} from '../api/googleBook'
import { usePromiseTracker } from "react-promise-tracker";
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner';
import ReactStars from "react-rating-stars-component";
const BookDetails = (props) =>{
    let src="https://picsum.photos/200/300"
    const [loadingDetails,setLoadingDetails]=useState("Okay")
    const [currentBook,setCurrentBook]=useState(null)
    const getDetails =async ()=>{
        
        await  getBooksDetails(props.location.book_id,setCurrentBook);
      
        console.log(loadingDetails,"Loadinggggg eta vitoreeeeeee")
        console.log(currentBook)
        setLoadingDetails("Not Okay")
    }
    useEffect(()=>{
         getDetails()
    },[])
    console.log("detailssssss")
    console.log(currentBook)
    
   if(currentBook==null){
    return(
        <div
             style={{
                width: "100%",
                height: "100",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
            </div>
    )}
    else {
        if(currentBook.volumeInfo.imageLinks!=null){
            src=currentBook.volumeInfo.imageLinks.thumbnail
        }
        console.log(loadingDetails,"hhhhhhLoadinggggg")
        console.log(currentBook)
        return(
            
        <div className="container" style={{height:1000,width:1000}}>
       
        <div className="card card--details">
        
<div style={{ display:'flex',
    flexDirection: 'row',justifyContent: "center",
    alignItems: "center",height:600,width:800}}>

<div className="row">
 
    <div className="card__cover">
        <img src={src} alt="" style={{height:400,width:250}}/>
    </div>
</div>

<div className="col">
    <div className="card__content">
        <div className="card__wrap">
            <span className="card__rate" style={{ display:'flex',
    flexDirection: 'row'}}><ReactStars
    count={1}
   
    size={18}
    active={true}
    
    color="#ffd700"
  />{currentBook.volumeInfo.averageRating}</span>

            <ul className="card__list">
                <li><span>Author:</span>{currentBook.volumeInfo.authors}</li>
              
            </ul>
        </div>

        <ul className="col">
             <li><span>Title:</span> {currentBook.volumeInfo.title}</li>
            <li><span>Published Date:</span> 25/Dec/2020</li>
            <li><span>Total Pages:</span> {currentBook.volumeInfo.pageCount}</li>                                        
        </ul>

        <div className="b-description_readmore_wrapper js-description_readmore_wrapper" style={{maxWidth: 400}}><div className="card__description card__description--details b-description_readmore_ellipsis" style={{minHeight: 200 , maxHeight: 200, overflow:"scroll"}}>Joe Gardner is a middle school teacher with a love for jazz music. After a successful gig at the Half Note Club, he suddenly gets into an accident that separates his soul from his body and is transported to the You Seminar, a center in which souls develop and gain passions before being transported to a newborn child. Joe must enlist help from the other souls-in-training, like 22, a soul who has spent eons in the You Seminar, in order to get back to Earth.</div><div class="b-description_readmore_button"></div></div>
    </div>
</div>

</div>
</div>
     
    </div>
    
    
    )
}
}

export default BookDetails;


