import React, { Component } from 'react';
import styled from 'styled-components';

const StyledCanvas = styled.canvas`
  display:block;
  background:peachpuff;
  margin: 0 auto;
`;

class Canvas extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            lineWidth : 3,
            strokeStyle: "black",
            painting: false,
         }
         this.whiteboard = React.createRef();
         this.paint = this.paint.bind(this);
    }

    componentDidMount() {
        this.canvas.height = 500;
        this.canvas.width = 500;
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
    startPainting = (e) => {
        this.setState({
            painting: true
        }, () => {
            this.paint(e);
        })
    }
    finishPainting = () => {
        this.setState({
            painting: false
        }, () => {
            this.ctx.beginPath();
        })
    }

    getPosition (e) {
        var rect = this.canvas.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        return [x, y];
    }
        
    paint (e) {
        if(this.state.painting){
            var x,y;
            [x,y] = this.getPosition(e);
            this.ctx.lineWidth = this.state.lineWidth;
            this.ctx.strokeStyle = this.state.strokeStyle;
            this.ctx.lineTo(x,y);
            this.ctx.stroke();
            this.ctx.beginPath();
            this.ctx.moveTo(x,y);
        }   
    }

    screenshot = () => {
        let x = (JSON.stringify(this.canvas));
        console.log(x);
        console.log(x.length);
    }

    

    render() { 
        return ( 
            <div>
                <StyledCanvas  ref={(ref) => (this.canvas = ref)}></StyledCanvas>
                <button onClick={this.paintingOn}>paint</button>               
            </div>
         );
    }
}
 
export default Canvas;