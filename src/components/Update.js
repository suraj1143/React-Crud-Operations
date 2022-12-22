import axios from 'axios';
import React ,{useEffect,useState}from 'react'
import { Link, useNavigate } from 'react-router-dom';
// import Read from './Read';

const Update = () => {
const [id, setId] = useState("0");   
const [name, setName] = useState(" ");
const [email, setEmail] = useState(" ")

const navigate = useNavigate();
useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));

}, []);

const handleUpdate = (e) =>{
  e.preventDefault();
  axios.put(`https://63a2b069471b38b206f939f1.mockapi.io/crud-react/${id}`,
  {
    name:name ,
    email:email,
   }).then(() =>{
    navigate('/read');
   })
}


  return (
    <>
    <form>
    <div className="mb-3">
        <label  className="form-label">Name</label>
        <input type="text"   
        onChange={(e)=>setName(e.target.value)} 
        value={name}
        className="form-control" id="exampleInputPassword1"/>
    </div>
    <div className="mb-3">
        <label  className="form-label">Email address</label>
        <input type="email" 
        onChange={(e)=>setEmail(e.target.value)} 
        value={email}
        className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>
    <button type="submit" className="btn btn-primary" 
    onClick={(handleUpdate)}
    >Submit</button>
    <Link to="/read">
    <button className='btn btn-danger'>Back</button>
    </Link>
    </form>
    </>
  )
}

export default Update