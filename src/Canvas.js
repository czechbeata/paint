import React, { Component } from 'react';
import styled from 'styled-components';

const StyledCanvas = styled.canvas`
  display:block;
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
        // this.canvas.height = window.innerHeight;
        // this.canvas.width = window.innerWidth;
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
            this.ctx.beginPath();
            this.ctx.arc(x,y, 5, 0, Math.PI*2);
            this.ctx.fill();

            

        }   
    }

    

    render() { 
        return ( 
            <div>
                <StyledCanvas  ref={(ref) => (this.canvas = ref)}></StyledCanvas>
                {/* <button onClick={this.onChangeWidth}>change</button> */}
                <button onClick={this.paintingOn}>paint</button>
                {/* <button onClick={this.onChangeColor}>yellow</button> */}
            </div>
         );
    }
}
 
export default Canvas;