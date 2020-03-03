import React, { useState, useEffect } from 'react';
import HomeView from './homeView';
import { useStateValue } from '../../context';
import { toaster } from 'evergreen-ui';
import axios from 'axios';

function HomeController() {
    const { state, dispatch } = useStateValue();

    const deletePost = (id: number) => {
        return axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`).then(j => {
            if (j.status == 200) {
                let arr = state.posts.filter((e: any) => { return e.id != id });
                dispatch({ type: 'setPosts', value: arr })
                toaster.success(
                    'You successfully deleted this post'
                )
                return true
            } else {
                toaster.danger(
                    'Something went wrong try again'
                )
                return false
            }
        })

    }

    return (
        <HomeView users={state.users} posts={state.posts} deletePost={deletePost} />
    )
}

export default HomeController;