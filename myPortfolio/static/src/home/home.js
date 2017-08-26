import React from 'react';

import Fade from 'react-fade';

import './background.less';

export class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let current = 0,
            slides = document.getElementsByTagName("img");

        setInterval(function() {
          for (let i = 0; i < slides.length; i++) {
            slides[i].style.opacity = 0;
          }
          current = (current != slides.length - 1) ? current + 1 : 0;
          slides[current].style.opacity = 1;
        }, 5000);

        return (
            <Fade>
                <img className="bg" src="static/src/img/1.jpg" />
                <img className="bg" src="static/src/img/2.jpg" />
                <img className="bg" src="static/src/img/3.jpg" />
            </Fade>
    );
  }
}
