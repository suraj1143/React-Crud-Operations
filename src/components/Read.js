import React ,{useState , useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Read() {

    const [data, setdata] = useState([]);
    const [tableDark, settableDark] = useState(" ");
    const [inputText, setinputText] = useState(" ");

    function getData(){
        axios
        .get('https://63a2b069471b38b206f939f1.mockapi.io/crud-react')
        .then((res) => {
            // console.log(res.data);
            setdata(res.data);
        })
    };

    function handleDelete(id){
        axios.delete(`https://63a2b069471b38b206f939f1.mockapi.io/crud-react/${id}`).then(()=>{
            getData();
        })
    }
    const setToLocalStorage = (id,name,email) => {
        localStorage.setItem("id",id);
        localStorage.setItem("name" , name);
        localStorage.setItem("email" , email);
    }

    useEffect(() => {
        getData();
    }, []);

    const inputHandler = (e) =>{
        setinputText(e.target.value.toLowerCase());
        console.log(inputText);
    }
    
    return (
          <>
          
          <div>
            <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={()=>{
                if (tableDark === "table-dark") settableDark(" ");
                else settableDark("table-dark")
            }}/>
            <h4>Set Dark Mode</h4>
            </div>
        <div className='d-flex justify-content-between m-3 padding-3 '>
            <h2>Entries</h2>

            <div class="mb-3">
                <input type="search" className="form-control" placeholder='type here' onChange={inputHandler}/>
            </div>

        <Link to="/">
        <button className='btn btn-primary'>Create User</button>
        </Link>
        </div>
            <table className ={ ` table ${tableDark}`}>
                <thead>
                    <tr>
                    <th scope="col">id</th>
                    <th scope="col">Name</th>
                    <th scope="col">email</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                {data
                .filter((el)=>{
                    if(el === ''){
                        return el;
                    }
                    else{
                        return (el.name.toLowerCase().includes(inputText) ||
                                el.email.toLowerCase().includes(inputText));
                    }
                })
                    .map((eachData) => {
                        return(
                        <>
                        <tbody>
                            <tr>
                            <th scope="row">{eachData.id}</th>
                            <td>{eachData.name}</td>
                            <td>{eachData.email}</td>
                            <Link to="/update">
                            <td><button className="btn btn-success " onClick={()=> setToLocalStorage(eachData.id ,eachData.name,eachData.email)}>EDIT</button></td>
                            </Link>
                            <td><button className='btn btn-danger' onClick={() => handleDelete(eachData.id)}>DELETE</button></td>
                            </tr>
                        </tbody>
                        </>
                        )
                    })  
                }
            </table>
        </div>
          </>  
      
    )

}
