import React ,{useState,component}from 'react'



const DropDown= (props)=>{
    let [visible,setVisible]=useState(false)
    let [newActive,setNewActive]=useState("black")
    let [oldActive,setOldActive]=useState("black")
    let [relevenceActive,setRelevenceActive]=useState("black")
    const dataType=[{option:"newest",key:1},
            {option:"oldest",key:2}
                        
]
    return(
        <div className="row ">
       <div className=" col s14 offset-s10" style={{marginTop:10}} >
       <div class="row">
          <button style={{borderWidth:1,backgroundColor:"#000",width:100,color:"white",height:30}} onClick={function() {
              if (visible==true){
                  setVisible(false)
                 
                 
              }
              else{
                console.log(newActive)
                setVisible(true)
                setNewActive("black")
                setOldActive("black")
                setRelevenceActive("black")
              }
              console.log(visible)

              
          }}>
              Sort
          </button>
          {
              visible
              ?(
          <div className="menu">
              <li  onClick={function () 
              {props.onSelect("newest")
              setNewActive("#787878")
              setOldActive("black")
              setRelevenceActive("black")
             console.log("pressed",newActive)
            
            }}
             style={{borderWidth:1,backgroundColor:newActive,width:80,marginBottom:1,color:"white",height:25,marginLeft:10,paddingLeft:14}}> {"           "}Newest</li>
              <li 
               onClick=
               {function () 
               {
                    props.onSelect("oldest")
                    setOldActive("#787878")
                    setNewActive("black")
                    setRelevenceActive("black")
                   } }
                   style={{borderWidth:1,backgroundColor:oldActive,width:80,color:"white",height:25,marginLeft:10,paddingLeft:14,marginBottom:1}}> {" "} Oldest</li>
              <li 
              onClick=
              {function () 
              {
                  props.onSelect("relevance")
                  setRelevenceActive("#787878")
                  setOldActive("black")
                  setNewActive("black")
                  
                  } }style={{borderWidth:1,backgroundColor:relevenceActive,width:80,color:"white",height:25,marginLeft:10,paddingLeft:7}}> {" "} Relevance</li>
         
          </div>
              )
              :(null)
}
</div>
       </div>
       </div>

    )
}
export default DropDown