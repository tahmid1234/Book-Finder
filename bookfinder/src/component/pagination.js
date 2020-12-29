import React from 'react'

const Pagination = (props) =>{
    console.log("pagesss")
    console.log(props.totalPages)
const page_links=[]
for (let i=0; i<props.totalPages;i++){
    let isActive=""
    if(props.currentPage==i){
        isActive="active";
    }
    else{
        isActive=""
    }
    let classes="wave-effect "+isActive;
    page_links.push(
        <button
         className={classes}
         key={i}
         onClick = {() =>{
             props.nextPage(i);
         }

         }>{i+1}</button>
         
        )
}
console.log("pageLinks")
console.log(page_links)

    return(
        <div className="container" style={{marginTop:20}}  >
          <div className="row">
              {page_links}
          </div>
        </div>
    )
}

export default Pagination