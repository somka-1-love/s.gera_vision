import React from "react";

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import MainRoute from './route';


injectTapEventPlugin();

export default class Layout extends React.Component {

    render() {
        return (
           <MuiThemeProvider>
               <div>
                   <MainRoute />
               </div>
            </MuiThemeProvider>
        );
    }
}
