import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Navbar from './Navbar';
import Carousel from './Carousel';




function Home () {

    const [data,setData]=useState([]);
    useEffect(function (){
        axios.get("https://apitest.reachstar.io/blog/list")
        .then(function(response){
            setData(response.data);
        }).catch(function(error){
            console.log(error)
        });

    })




  return (
   <React.Fragment>
    <Navbar></Navbar>
    <Carousel></Carousel>
   
    <div className='container'>
     <div className='row justify-content-center'>
        <div className='col-12'>
            {
                data.map((item, index)=> <div className='card mb-5'>
                    <div className='card-header'>
                        
                        <h3 className='card-title'>{item.title} </h3>  
                     </div>
                    <div className='card-body'>
                    <p dangerouslySetInnerHTML={{__html: item.description}}></p>

                    </div>    
                    <div className='card-footer'>
                    <Link className=" btn btn-primary ms-2" to={"/Detail/"+ item.id}>დეტალურად ნახვა</Link>
                     
                    

                    </div>  




                </div>)
            }

        </div>

     </div>

    </div>
   </React.Fragment>
    
  );
};

export default Home;
