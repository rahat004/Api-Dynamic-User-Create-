import React,{useState, useEffect} from 'react';
import './api.scss';
import Loder from './Loder';
const axios = require('axios');


const Api = () => {
    const [first, setfirst] = useState({});
    const [isload, setisload] = useState(true);

    useEffect(
            function loadUser(){
                    axios.get('https://randomuser.me/api/')
                 .then((res)=>res.data)
                 .then((data)=>setfirst({
                     pic: data.results[0].picture.large,
                     tname: data.results[0].name.title,
                     fname: data.results[0].name.first,
                     lname: data.results[0].name.last,
                     gender:data.results[0].gender,
                     dob: data.results[0].dob.age,
                     phone: data.results[0].phone,
                     cell: data.results[0].cell,
                     email: data.results[0].email,
                 }),
                 setisload(false)
                 )
                 .catch(
                     err=> 
                    console.log(err)
                    )
                    
                },[]
             );
        
    return (
           <div>
               {isload===true? <Loder /> :
                <div className="card">
                    <img className="card-img-top" src={first.pic} alt="profile" />
                    <div className="card-body">
                        <div className="card-title">
                        <h2> Hi I'm </h2> <h1>
                         {first.tname } {first.fname} {first.lname} </h1> </div>
                        <p className="card-text">Gender: {first.gender} </p>
                        <p className="card-text">Age: {first.dob} year</p>
                        <p className="card-text">Phone: {first.cell} </p>
                        <p className="card-text">Telephone: {first.phone} </p>
                        <p className="card-text">Email: {first.email} </p>
                        <a href='http://localhost:3000/'  className="btn btn-primary">Next</a>
                    </div>
                </div>
                }   
            </div>
    );
};

export default Api;