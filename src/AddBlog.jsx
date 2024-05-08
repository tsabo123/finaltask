import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import Navbar from './Navbar';

function AddBlog() {
    const [data, setData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get("https://apitest.reachstar.io/blog/get/" + id)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [id]);

    return (
        <React.Fragment>
            <Navbar />
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-12 '>
                        <div className='card'>
                            <div className='card-body'>
                                <h3 className='card-title'>{data.title}</h3>
                                <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
                            </div>
                            <div className='card-footer'>
                                {
                                    data.comments && data.comments.map(item => <p key={item.id}>{item.comment}</p>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default AddBlog;
