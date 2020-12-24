import React, { Component } from 'react';
import { BrowserRouter,Route,  Switch} from 'react-router-dom';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Tourpage from './components/Tourpage';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path='/tour' component={Tourpage} />
                        <Route exact path='/' component={Homepage} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}


