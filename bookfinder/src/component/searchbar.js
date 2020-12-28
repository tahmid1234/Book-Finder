import React from 'react'

const Searchbar=(props)=>{
    return (
        <div class="row">
        <div class="col s6 offset-s4">
          <div class="row">
          <form action="" onSubmit={props.handleSubmit}>
                <div class="input-field col s12" >
                <i class="material-icons prefix"></i>
                <input type="text" id="autocomplete-input" class="autocomplete" placeholder="Search for books" onChange={props.handleChange}/>
                <label for="autocomplete-input"></label>
                </div>
            </form>
          </div>
        </div>
      </div>
    )
}

export default Searchbar;