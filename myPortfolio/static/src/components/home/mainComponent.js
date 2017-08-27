import React from 'react';

import { Background } from './components/background';
import { Title } from './components/title';

export class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <Background />
                <Title />
            </div>
    );
  }
}
