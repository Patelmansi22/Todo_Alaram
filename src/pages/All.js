import React, { useState } from 'react'
import DataTable from 'react-data-table-component';
import Sidebar from './Sidebar';
import "../styles/Text.css"
const getLocalStorage = () => {
    let list = localStorage.getItem('list');
    if (list) {
      return (list = JSON.parse(localStorage.getItem('list')));
    } else {
      return [];
    }
  };
  
const All = () => {
    const [list, setList] = useState(getLocalStorage());
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    today = dd + '-' + mm + '-' + yyyy;
  
    // let data = list?.filter((itm)=>itm.checked!== true)
    const columns = [
        {
          name: 'No.',
          selector: (row,i) =>i+1,
        },
        {
          name: 'Task',
          selector: (row) => row.title,
        },
        {
          name: 'Description',
          selector: (row) => row.description,
        },
        {
          name: 'date ',
          selector: (row) => row.date,
        },
        {
            name: 'Status ',
            selector: (row) => row.checked,
          }
      ];
      const customStyles = {
        rows: {
            style: {
                minHeight: '72px', // override the row height
                width: '100%',
               
            },
        },
        headCells: {
            style: {
                // paddingLeft: '8px', // override the cell padding for head cells
                // paddingRight: '8px',
            },
        },
        cells: {
            style: {
                // paddingLeft: '8px', // override the cell padding for data cells
                // paddingRight: '8px',
            },
        },
    };
  return (
    <div>
<Sidebar/>
    <div  style={{marginLeft:"88px" ,width:"1200px",marginTop:"16px"}}>
  <h1>All_Task</h1>
     <DataTable
            pagination
            columns={columns} 
            data={list}
            customStyles={customStyles} 
            
        />
         </div>
    </div>
  )
}

export default All