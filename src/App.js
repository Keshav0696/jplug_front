import React, { Component } from 'react';
import { BrowserRouter,Route,  Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Tourpage from './components/Tourpage';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import JoinUs from './components/Signup/JoinUs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path='/join' component={JoinUs} />
                        <Route exact path='/signup' component={Signup} />
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/tour' component={Tourpage} />
                        <Route exact path='/profile' component={Profile} />
                        <Route exact path='/' component={Homepage} />
                    </Switch>
                    <ToastContainer />
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}


