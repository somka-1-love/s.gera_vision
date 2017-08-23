import React from "react";

import Paper from 'material-ui/Paper';

import { styles } from './styles';


export class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Paper style={styles.paperHome}>
                Hello world!
            </Paper>
    );
  }
}
