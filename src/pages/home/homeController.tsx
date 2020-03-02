import React, { useState, useEffect } from 'react';
import HomeView from './homeView';
import { useStateValue } from '../../context';

function HomeController() {
    const { state, dispatch } = useStateValue();

    const deletePost = (id: number) => {
        let arr = state.posts.filter((e: any) => { return e.id != id });
        dispatch({ type: 'setPosts', value: arr })
        console.log(id)
    }

    return (
        <HomeView users={state.users} posts={state.posts} deletePost={deletePost} />
    )
}

export default HomeController;