import React, { useState } from 'react'

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import "react-datepicker/dist/react-datepicker.css";
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
const getLocalStorage = () => {
    let list = localStorage.getItem('list');
    if (list) {
      return (list = JSON.parse(localStorage.getItem('list')));
    } else {
      return [];
    }
  };
const Home = () => {


    const [list, setList] = useState(getLocalStorage());

    var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  
  today = dd + '-' + mm + '-' + yyyy;

  return (
 
    <div >
<Sidebar/>



<br></br><br></br>

    
   
    
{list.filter(itm => itm.date ===today).map((itm)=>{
  return(
        <div class="m-4" >
        <Link to={`/todo/${itm.date}`}>

     
       
    <div class="row">
        <div class="col-6">
            <div class="card text-white bg-primary mb-4">
                <div class="card-body">
                    <h5 class="card-title">{itm.date}</h5>
                    <p class="card-text">some dummy text to make up the card's content. You can replace it anytime.</p>
                </div>
            </div>
        </div>
     
    </div>
    </Link>
</div>

   
    )
})}


</div>
    
  )
}

export default Home