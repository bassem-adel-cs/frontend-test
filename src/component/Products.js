import React from 'react'
import { useState } from 'react'
import "./products.css"
import icon from "./search.jpg"
import imgone from "./1.PNG"
import imgtwo from "./2.PNG"
import imgthree from "./3.PNG"
import imgfour from "./4.PNG"
import heart from"./HEART.PNG"
import arrowone from "./arrow.PNG"
import arrowtwo from "./arrowtwo.PNG"
import pages from "./pages.PNG"
import Productform from './Productform'
function Productlist() {
//    let product=[
// {img:imgone,name:"a",price:500,heart:heart},
// {img:imgtwo,name:"b",price:300,heart:heart},
// {img:imgthree,name:"c",price:400,heart:heart},
// {img:imgfour,name:"f",price:50,heart:heart},
//    ]
    let[product,setproduct]=useState([
        {img:imgone,name:"pants",price:100,heart:heart ,id:1},
        {img:imgtwo,name:"jacket",price:500,heart:heart,id:2},
        {img:imgthree,name:"hoddi",price:40,heart:heart,id:3},
        {img:imgfour,name:"shortjacket",price:1000,heart:heart,id:4},
    ])
    const handleSearch = (event) => {
        const value = event.target.value;
        const filter2 = product.filter((element) => element.name.includes(value));
        if(value!==""){
            setproduct(filter2)
        }
        else{
            setproduct([
                {img:imgone,name:"pants",price:500,heart:heart ,id:1},
                {img:imgtwo,name:"jacket",price:300,heart:heart,id:2},
                {img:imgthree,name:"hoddi",price:100,heart:heart,id:3},
                {img:imgfour,name:"short jacket",price:50,heart:heart,id:4},
            ])
        }
 
    }
function sorting(option){
let sortproduct=[...product].sort(function(a,b){
    if(option.target.value==="high"){
        return a.price - b.price
        }
        if (option.target.value==="low") {
            return b.price - a.price
        } 
        if (option.target.value==="AtoZ"){

    
           return a.name.localeCompare(b.name)
   

        } 
    if(option.target.value==="ZtoA"){
        return b.name.localeCompare(a.name)



    }
        
    })

setproduct(sortproduct)

}
    return (
<>
        <div class="parent">
<div class="searchbox">
<input onChange={ handleSearch}
type="text" placeholder="search"/>
<div class="sortbox">
    <label for="sort">sort by</label>
    <select onChange={sorting} id="sort" >
<option value="AtoZ">A-Z </option>
<option value="ZtoA">Z-A</option>
<option value="low">price:low to high</option>
<option value="high">price:high to low</option>
</select>

<button>+ sell item</button>
</div>
</div>
<div class="productbox">
{product.map(function(product){
    return(
        <>
<div class="product" key={product.id}>
<img src={product.img}/>
<div class="info">
<div class="info2">
<p>{product.name}</p>
<p>{product.price}$</p>
<div class="simplephoto">
<img src={imgone}/>
 <p>sara samir</p>
</div>
</div>
<div class="heartphoto"><img src={heart}/></div>
</div>

</div>
</>
)
})}




</div>


<div className="pagesbox">
    <div className='prev'>
        <img src={arrowone} className='arrowone'/>
        <p>previus</p>
    </div>
    <img src={pages} className='pagesphoto'/>
    <div className='next'>
 
    <p>next</p>
    <img src={arrowtwo} className='arrowtwo'/>
    </div>
</div>
        </div>
        <Productform/>
        </>
    )
}

export default Productlist
