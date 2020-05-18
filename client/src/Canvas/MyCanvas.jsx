import React, { Component } from 'react';
// import * as fabric from "../public/vendor/fabric";

export default class MyCanvas extends Component {
    componentDidMount = () => {
        const canvas = new window.fabric.Canvas('c');
        const rect = new window.fabric.Rect({
          left: 100,
          top: 100,
          fill: 'red',
          width: 20,
          height: 20,
          angle: 45
        });
        
        canvas.add(rect);
        canvas.setBackgroundColor("#fff")
        canvas.renderAll();

    }
    render() {
        return (
            <div id="canvas">
                <canvas id="c" />
            </div>
        )
    }
}
