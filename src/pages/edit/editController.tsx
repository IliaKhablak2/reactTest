import React, { useState, useEffect } from 'react';
import { useStateValue } from '../../context';
import EditView from './editView';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import { toaster } from 'evergreen-ui';


function EditControllerComponent() {
    const [one, setOne] = useState(null)
    const { state, dispatch } = useStateValue();
    const { postId } = useParams();
    const history = useHistory();

    const saveOne = async (mode: boolean) => {
        const newOne: any = state.post
        axios({
            url: `https://jsonplaceholder.typicode.com/posts/${newOne.id}`,
            method: 'PUT',
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
            data: JSON.stringify(newOne)
        }).then(j => {
            if (j.status == 200) {
                toaster.success(
                    'You successfully deleted this post'
                )
                setOne(newOne)
                let arr: any = [...state.posts];
                let index = arr.map((el: any) => { return el.id }).indexOf(newOne.id);
                arr[index] = newOne;
                dispatch({ type: 'setPosts', value: arr })
                if (mode) history.push("/");
            } else {
                toaster.danger(
                    'Something went wrong try again'
                )
            }
        })
    }

    const getPost = (id: any) => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(j => j.data).then(j => {
            setOne(j);
            dispatch({ type: 'setPost', value: j })
        })
    }

    useEffect(() => {
        getPost(postId)
    }, []);

    return (
        <EditView one={one} saveOne={saveOne} />
    )
}

export default EditControllerComponent;