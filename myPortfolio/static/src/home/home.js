import React from 'react';

import Fade from 'react-fade';

import './background.less';


const firstSlide = 1;
const lastSlide = 3;
const changeTime = 5000;

export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: firstSlide
        }
    }

    timer() {
      this.setState({slideIndex: this.state.slideIndex + 1 });
      if(this.state.slideIndex > lastSlide) {
        this.setState({slideIndex: firstSlide})
      };
    }

    componentDidMount() {
        setInterval(this.timer.bind(this), changeTime);
    }

    render() {
        const img = "static/src/img/" + this.state.slideIndex + ".jpg";

        return (
            <Fade>
                <img className="bg" src={img} />
            </Fade>
    );
  }
}
