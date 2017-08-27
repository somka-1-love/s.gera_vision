import React from 'react';

import { Link } from 'react-router-dom';

import Paper from 'material-ui/Paper';

import '../styles/title.less';

export class Title extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div id="title">
                <h1 className="unselectable">Solomia Gera photography</h1>
                <h3><Link id="Link" to='/gallery'>Gallery</Link></h3>
            </div>
    );
  }
}
