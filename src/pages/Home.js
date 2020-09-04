import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar, Button } from '@material-ui/core';
import Search from '../components/Search';
import { auth, provider } from '../firebase';
import { useStateValue } from '../components/StateProvider';
import { actionTypes } from '../reducer';

function Home() {
    const [{ user }, dispatch] = useStateValue();

    const signIn = event => {
        auth.signInWithPopup(provider)
        .then(res => {
            dispatch({
                type: actionTypes.SET_USER,
                user: res.user
            })
        })
        .catch(err => alert(err.message))
    }

    const signOut = event => {
        auth.signOut()
    }

    return (
        <div className="home">
            <div className="home__header">
                <div className="home__headerLeft">
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>
                <div className="home__headerRight">
                    <a href="https://google.com/gmail">Gmail</a>
                    <a href="https://google.com/images">Images</a>
                    <AppsIcon />
                    {!user ? (
                        <Button onClick={() => signIn()}>Login</Button>
                    ) : (
                        <Button onClick={() => signOut()}><Avatar alt={user?.displayName} src={user?.photoURL} /></Button>
                        )}
                </div>
            </div>

            <div className="home__body">
                <img alt="logo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />

                <div className="home__inputContainer">
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Home
