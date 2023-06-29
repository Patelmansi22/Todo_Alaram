import React, { useState, useEffect, useRef } from 'react';
import '../styles/Todo.scss';
import moment from "moment";

// import Table from 'react-bootstrap/Table';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FaEdit } from 'react-icons/fa';
import Modal from 'react-bootstrap/Modal';
// import List from './List';
import addNotification from 'react-push-notification';
import Sidebar from './Sidebar';
import {BiArrowFromRight} from "react-icons/bi";
// import { Table } from 'react-bootstrap';

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return (list = JSON.parse(localStorage.getItem('list')));
  } else {
    return [];
  }
};

// const getLocalStorage1 = () => {
//   let list1 = localStorage.getItem('delete');
//   if (list1) {
//     return (list1 = JSON.parse(localStorage.getItem('delete')));
//   } else {
//     return [];
//   }
// };
const getLocalStorage2= () => {
    let list1 = localStorage.getItem('date');
    if (list1) {
      return (list1 = JSON.parse(localStorage.getItem('date')));
    } else {
      return [];
    }
  };
  const getLocalStorage3= () => {
    let list1 = localStorage.getItem('date1');
    if (list1) {
      return (list1 = JSON.parse(localStorage.getItem('date1')));
    } else {
      return [];
    }
  };
const Todo = () => {
// const location = useLocation();
// const {data}=location.state
let { id } = useParams();
  const [name, setName] = useState('');
  const [checked, setChecked] = React.useState(false);
  const [description, setDescription] = useState('');
  const [isediting, setIsediting] = useState(null);
  const [deleteItm, setDeleteItm] = useState([]);
//   let { id } = useParams();
  const [date,setDate]=useState(getLocalStorage2())
  const [date1,setDate1]=useState(getLocalStorage3())
  const [lastname, setLastName] = useState('');
  const [show, setShow] = useState(false);
  //   const [editfname, setEditFname] = useState(getName());
  //   const [editlname, setEditLname] = useState(getEdit3());
  const [list, setList] = useState(getLocalStorage());
  const [del, setDel] = useState();
  const [del1, setDel1] = useState([]);
  const [editId, setEditId] = useState(null);

  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });
  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };
//  const datas =data.date

  useEffect(() => {

    localStorage.setItem('list', JSON.stringify(list));
    // localStorage.setItem("delete", JSON.stringify(del));
    // localStorage.setItem("date", JSON.stringify(data));

// localStorage.setItem("date1",JSON.stringify(data.date))
    setDate(moment(date).utc().format('DD-MM-YYYY'))
    // localStorage.setItem("prevfname", JSON.stringify(editfname));
    // localStorage.setItem("prevlname", JSON.stringify(editlname));
  }, [list,  del1]);
  let status = checked==true ?"completed" :"incomplete"
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, 'danger', 'please enter value');
    } else if (name && isediting) {
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return {
              ...item,
              title: name,
              description: description,
              loginid: id,
              checked:status,
            };
          }
          return item;
        })
      );
      setName('');
      setDescription('');
      // setLoginId(time);
      setEditId(null);
      setIsediting(false);
      showAlert(true, 'success', 'valueChanges');
    } else {
      showAlert(true, 'success', 'item added to list items');
      const newItems = {
        id: new Date().getTime().toString(),
        title: name,
        description: description,
        date:id,
        checked:status,
      };
      setList([...list, newItems]);
      setName('');
      setDescription('');
    }
  };
  const editItem = (id) => {
    const editItem = list.find((item) => item.id === id);
    console.log(editItem, 'edit');
    setIsediting(true);
    setName(editItem.title);
    setDescription(editItem.description);
    setEditId(editItem.id);
  };
  const removeItem = (id) => {
    showAlert(true, 'danger', 'item removed ');
    console.log(id,"id")
    setList(list.filter((item) => item.id !== id.id));
    console.log('list', list);
    let list2 = list.filter((item) => item.id == id.id);

    setDel(list2);

    setShow(false);
  };
//   console.log('dateee', data.date); 
  const handleClose = () => setShow(false);
  const handleShow = (val) => {
    //   console.log("valll",val);
    setShow(true);
    setDeleteItm(val);
  };
const finalList = list.filter((item)=>item.date==id)
console.log(finalList,"final")
// const handle =()=>{
// localStorage.removeItem("date")
// // localStorage.removeItem("date1")
// }
 
function handleChange(e) {
  
   setChecked(e.target.checked);

}
// setTimeout(()=>{
//     setChecked(true)
 
//     addNotification({ 
//         title: 'Warning',
//         subtitle: 'This is a subtitle',
//         message: 'This is a very long message',
//         theme: 'darkblue',
//         native: true 
//     });
//    },25000)
console.log(checked,">>")
  return (
    <div style={{marginLeft:"250px" ,width:"1200px",marginTop:"16px"}}>
    <Sidebar/>
    {/* <Link type="btn"  to= "/" onClick={handle} style={{fontSize:"30px"}}><BiArrowFromRight/></Link> */}

    
    <h1>{id}</h1>
 
 
    

      <div class='app-container' id='taskList'>
        <h1 class='app-header'>TO DO LIST</h1>
        <div class='add-task'>
          <input
            type='text'
            autocomplete='off'
            placeholder='Add New Task'
            v-model='tasks.name'
            class='task-input'
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
          <input
            type='text'
            autocomplete='off'
            placeholder='Add Description'
            v-model='tasks.name'
            class='task-input'
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            required
          />
          <input
            type='submit'
            value=''
            class='submit-task'
            title='Add Task'
            onClick={handleSubmit}
          />
        </div>
        {finalList &&
        finalList.map((itm) => {
          return (
            <>
              <ul class='task-list'>
                <li class='task-list-item' v-for='task in tasks'>
                  <label class='task-list-item-label'>
                    <input type='checkbox' value={checked} onChange={handleChange}/>
                    {/* {checked == true  &&
                    <span style={{textDecoration:"line-through",color: "rgba(255, 255, 255, 0.5)"}}>{itm.title}</span>} */}
                    {/* {checked ==false &&  */}
                        <span >{itm.title}</span>
                        {/* } */}
                    
                    {/* <span style={{marginLeft:"10px"}}>{itm.description}</span> */}
                  </label>

                  <span
                    class='delete-btn'
                    title='Delete Task'
                    type='button'
                    style={{ color: '#4154f1' }}
                    data-toggle='modal'
                    data-target='#exampleModal'
                    onClick={() => handleShow(itm)}></span>

                  <span
                    class='edit-btn'
                    title='Edit Task'
                    type='button'
                    style={{ color: '#4154f1', marginLeft: '10px' }}
                    data-toggle='modal'
                    data-target='#exampleModal'
                    onClick={() => editItem(itm.id)}>
                    {' '}
                    <FaEdit />
                  </span>

                  {show && (
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                      </Modal.Header>
                      <Modal.Body>Are you sure you want to Delete?</Modal.Body>
                      <Modal.Footer>
                        <Button variant='secondary' onClick={handleClose}>
                          Close
                        </Button>
                        <Button
                          variant='primary'
                          onClick={() => removeItem(itm)}>
                          delete
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  )}
                </li>
              </ul>
            </>
          );
        })
       }

    
      
              
     
      </div>
    </div>
  );
};

export default Todo;
