import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {  useParams } from "react-router-dom";
import Navbar from './Navbar';


function Detail () {

    const [data,setData]=useState([]);
    const {id}=useParams();
    useEffect(function (){
        axios.get("https://apitest.reachstar.io/blog/get/" + id)
        .then(function(response){
            setData(response.data);
        }).catch(function(error){
            console.log(error)
        });

    },[])




  return (
   <React.Fragment>
    <Navbar></Navbar>
    <div className='container'>
     <div className='row justify-content-center'>
        <div className='col-12'>
            
               
                    <div className='card-header'>
                        
                        <h3 className='card-title'dangerouslySetInnerHTML={{__html: data.description}}>{data.title} </h3>  
                     </div>
                    <div className='card-body'>
                    <p dangerouslySetInnerHTML={{__html: data.description}}></p>

                    </div>    
                    <div className='card-footer'>
                        
                            {data.comments && data.comments.map(item => (
                                <p key={item.id}>{item.comment}</p>
                              ))}
                    
                   
                     
                    

                    </div>  




            

        </div>

     </div>

    </div>
   </React.Fragment>
    
  );
};

export default Detail;
