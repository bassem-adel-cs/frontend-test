import React, { useState } from 'react'
import { json } from 'react-router-dom'

function Productform() {
    function settitle(event){
 window.localStorage.setItem("title",event.target.value)
    }
    function setdescripe(event){
window.localStorage.setItem("des",event.target.value)
    }
function setoption(event){
window.localStorage.setItem("category",event.target.value)
}
function setprice(event){
    window.localStorage.setItem("price",event.target.value)
}
    
    return (
 <div className='formparent'>
<form>
<h1>sell an item</h1>
<label>upload photos</label>
<div className='photobox'>
    <button class="uploadphoto"><label for="file">upload photo</label> </button>
    <input id="file" type="file" style={{display:"none"}}/>
</div>
<label>Title</label>
<input type="text" className='title' onChange={settitle}/>
<label>Descripe your item</label>
<input type="text" className="des" onChange={setdescripe}/>
<label>category</label>
<select class="selectbox" onChange={setoption}>
<option>select</option>
<option>option two</option>
<option> option three</option>
</select>
<label>item price</label>
<input type="number" placeholder="$" className="itemprice" onChange={setprice}/>
<input type="submit"value="upload item" className='submit' />
     </form>
     </div>
    )
}

export default Productform
