import { Paper } from "@mui/material";
import { border, width } from "@mui/system";
import React, { useEffect, useState } from "react";
import edit from "../icons/edit.svg";
import cut from "../icons/cut.svg";

function Todo() {
  const [todoData, settodoData] = useState([{}]);
  const [handleData, sethandleData] = useState({
    heading:"",
    Comment:""

  })

 
useEffect(() => {
    try{
        // settodoData( JSON.parse( localStorage.getItem("userdata")))
    }
    catch(err){
        console.log(err);
    }
    
 
  
}, [])


  const delFun=(id)=>{
    let arr=[...todoData]
  

    arr.splice(id,1)
   
    window.location.reload(); 
  







  }
  const editFun=()=>{

  }




  const onsubmitfun=(e)=>{
    e.preventDefault()

   
    settodoData([...todoData,handleData])
   

  }
  const handleChange=(e)=>{
   
    sethandleData({...handleData,[e.target.name]:e.target.value})


  }
  
  const commentbox = (Heading, comment, id) => {
    return(
    <>
    <p>{id}</p>
      <Paper elevation={1} className="chcard" key={id}>
      {/* <img src="../icons/edit.svg" alt="" style={{textAlign:"center",border:"1px solid gray", width:"5%" ,borderRadius:"100%"}}/> */}
      <div style={{textAlign:"right"}} >
     <img src={edit} style={{padding:'1%'}} alt="" onClick={()=>editFun(id)}/>
     <img src={cut}  style={{padding:'1%'}} alt="" onClick={()=>{delFun(id)}}/>
     </div>
     
      <div className="mb-3  ">
       

        <input
         
          style={{border:"none", background:"none",fontWeight:"700" }}
          
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder={Heading}
          
          disabled
        />
      </div>
      <div className="mb-3">
        <textarea
         style={{border:"none", background:"none"}}
        
          className="form-control"
          id="exampleInputPassword1"
          placeholder={comment}
          disabled
        />
      </div>
      </Paper>
    </>);
   
  };
  return (
    <>
      <form className="container" onSubmit={onsubmitfun}>
        <h1 className="title">Blog Todo</h1>
       {todoData.map((val,i)=>{
       return (<>
       <div key={i}>
       {val.heading&&val.Comment?commentbox(val.heading,val.Comment,i):""}
       </div>
       
       
       
       </>)
      

       })}
       <h5>Total Comment:{todoData.length!==1?todoData.length-1:""}</h5>
        <div className="mb-3">
          <label className ="form-label">
            Headding
          </label>
          <input
          name="heading"
          value={handleData.heading}
          
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Comment
          </label>
          <textarea
           name="Comment"
           value={handleData.Comment}
           
            className="form-control"
            id="exampleInputPassword1"
            onChange={handleChange} 
          />
        </div>

        <button type="submit" className="btn btn-primary" >
          Submit
        </button>
      </form>
    </>
  );
}

export default Todo;
