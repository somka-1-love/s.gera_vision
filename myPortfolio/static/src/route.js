import React from "react";
import { Route, Switch } from 'react-router-dom';

import { Home } from "./components/home/mainComponent";
import { Gallery } from "./components/gallery/mainComponent";


export default class MainRoute extends React.Component {
    componentDidMount = () => {
        if (window.location.hash == '#_=_') {
            window.location.hash = '';
            history.pushState('', document.title, window.location.pathname);
        }
    }

    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/gallery' component={Gallery} />
                </Switch>
            </main>
        );
    }
}
