import React, { useState } from 'react'
import {  Link, useNavigate } from 'react-router-dom';
import { BiTask,BiPlusMedical,BiMessageAltX ,BiNote,BiNotepad} from "react-icons/bi";
import "../styles/Sidebar.css";
import moment from "moment";
import DatePicker from "react-datepicker";
const Sidebar = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [text, setText] = useState(false);
    const navigate =useNavigate();
    const onDateChange = (date) => {
       setStartDate(date)
        setTimeout(()=>{
           //  console.log(date);
           //   localStorage.setItem("date", JSON.stringify(date));
           const date1 =  moment(date).utc().format('DD-MM-YYYY')
       navigate(`/todo/${date1}`)
   },1000)
       }
       const handlenote = () => {
           setText(true)
        navigate("/")

    }
 let data= moment(startDate).utc().format('DD-MM-YYYY')
  return (
    <div className="sidebar__side">
{/* <Animation/> */}


    <div class="mainContent">
      <div class="sidebar-icons">
      
   <a   onClick={handlenote} data-bs-toggle="tooltip" data-bs-html="true" title="Add" class="active">
<BiPlusMedical/>
</a>
   
   
   

        <Link to="/all" data-bs-toggle="tooltip" data-bs-html="true" title="All task">
          <i class=""><BiNotepad/></i>
        </Link>
        <Link to="/completed" data-bs-toggle="tooltip" data-bs-html="true" title="completed task">
          <i class=""><BiTask/></i>
        </Link>
       
        <Link to="/incomplete_todo" data-bs-toggle="tooltip" data-bs-html="true" title="incomplete task">
          <i class=""><BiMessageAltX/></i>
        </Link>
        <Link to={`/todo/${data}`} data-bs-toggle="tooltip" data-bs-html="true" title="today task">
          <i class=""><BiNote/></i>
        </Link>
       
      </div>
     
      </div>
      
      {text && ( <div style={{marginLeft:"90px",position:'fixed',display:"block"}}>
<DatePicker selected={startDate} onChange={onDateChange}  />
</div> )
 }
    </div>
  )
}

export default Sidebar