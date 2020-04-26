import React, { Component } from 'react';
import styled from 'styled-components';

const StyledCanvas = styled.canvas`

  background:peachpuff;
`;

class Canvas extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            lineWidth : 1,
            painting: false,
         }
         this.whiteboard = React.createRef();
         this.paint = this.paint.bind(this);
    }

    componentDidMount() {
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.lineWidth = 5;
        this.ctx.lineCap = "round";
    }

    onChangeWidth = () => {
        this.ctx.lineWidth = 10;
        console.log(this.ctx);
    }
    onChangeColor = () => {
        this.ctx.fillStyle = "yellow";
    }

    paintingOn = () => {
        this.canvas.addEventListener("mousedown", this.startPainting);
        this.canvas.addEventListener("mouseup", this.finishPainting);
        this.canvas.addEventListener("mousemove", this.paint);
    }
    startPainting = () => {
        this.setState({
            painting: true
        })
    }
    finishPainting = () => {
        this.setState({
            painting: false
        })
        this.ctx.beginPath();
    }
    paint (e) {
        if (this.state.painting) {
            this.ctx.lineTo(e.clientX, e.clientY);
            this.ctx.stroke();
            this.ctx.beginPath();
            this.ctx.moveTo(e.clientX, e.clientY);
   
        } else return;      
    }
    render() { 
        return ( 
            <div>
                <StyledCanvas  ref={(ref) => (this.canvas = ref)}></StyledCanvas>
                <button onClick={this.onChangeWidth}>change</button>
                <button onClick={this.paintingOn}>paint</button>
                <button onClick={this.onChangeColor}>yellow</button>
            </div>
         );
    }
}
 
export default Canvas;