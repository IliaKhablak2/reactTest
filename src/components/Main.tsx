import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useRouteMatch } from 'react-router-dom';
import { useStateValue } from '../context';
import axios from 'axios';
import HomeController from '../pages/home/homeController';
import EditControllerComponent from '../pages/edit/editController';
import NavComponent from './Nav';

function MainComponent() {
    // const [posts, setPosts] = useState([]);
    // const [users, setUsers] = useState([]);
    const { state, dispatch } = useStateValue();

    const getAll = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then(j => j.data).then(j => { dispatch({ type: 'setPosts', value: j }) })
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(j => j.data).then(j => { dispatch({ type: 'setUsers', value: j }) })
    }

    useEffect(() => {
        getAll();
    }, []);


    return (
        <Router>
            <NavComponent />
            <Switch>
                <Route exact path="/"
                    render={() => (
                        <HomeController />
                    )}
                />
                <Route path="/edit/:postId"
                    render={() => (
                        <EditControllerComponent />
                    )}
                />
            </Switch>
        </Router>
    )
}

export default MainComponent;