import React from 'react';

import Fade from 'react-fade';

import '../styles/title.less';

export class Title extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Fade id="title">
                <h1 className="unselectable">photos by Solomia Gera</h1>
            </Fade>
    );
  }
}
