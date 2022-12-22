import React , {useState} from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const Create = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const header = {"Access-Control-Allow-Origin" : "*"};
    const navigate = useNavigate();

    const handleSubmit = (e) => {

        console.log("clicked");
        e.preventDefault();
        axios.post('https://63a2b069471b38b206f939f1.mockapi.io/crud-react',
            {name:name ,
             email:email,
            header
            }).then(() =>{
                navigate("/read");
            })
    }



  return (
    <>
    <div className="bg-info ">
    <div className='d-flex justify-content-between m-3 padding-3 '>
    <h2>Create User</h2>
    <Link to="/read">
    <button className='btn btn-primary'>Show Data</button>
    </Link>
    </div>
   <div className="md-3">
   <form>
    <div className="mb-3">
        <label  className="form-label">Name</label>
        <input type="text"   onChange={(e)=>setName(e.target.value)} className="form-control" id="exampleInputPassword1"/>
    </div>
    <div className="mb-3">
        <label  className="form-label">Email address</label>
        <input type="email" onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>
    <button type="submit" className="btn btn-primary" onClick={(handleSubmit)}>Submit</button>
    <Link to="/read">
    <button className='btn btn-danger'>Back</button>
    </Link>
    </form>
   </div>
    </div>
    </>
  )
}

export default Create