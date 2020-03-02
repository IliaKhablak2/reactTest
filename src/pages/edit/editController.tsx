import React, { useState, useEffect } from 'react';
import { useStateValue } from '../../context';
import EditView from './editView';
import { useParams } from 'react-router-dom';
import axios from 'axios';


function EditControllerComponent() {
    const [one, setOne] = useState(null)
    // const { state, dispatch } = useStateValue();
    const { postId } = useParams();


    const getPost = (id: any) => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(j => j.data).then(j => { setOne(j) })
    }

    useEffect(() => {
        // console.log(bla)
        getPost(postId)
    }, []);

    return (
        <EditView one={one} />
    )
}

export default EditControllerComponent;