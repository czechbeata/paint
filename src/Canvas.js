import React, { Component } from 'react';
import styled from 'styled-components';
import CanvasOptions from './CanvasOptions';
import eraser from './cross.svg';
import smallgrid from './smallgrid.svg'

const Box = styled.section`
  position: relative;
`;

const StyledCanvas = styled.canvas`
  display:block;
  /* background-image: url(${eraser}); */

`;

const Button = styled.button`
  
  &:hover{
      cursor:pointer;
  }
`;

const ClearButton = styled(Button)`
      position:absolute;
      right: 10px;
      top: 10px;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
`;

class Canvas extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            lineWidth : 5,
            strokeStyle: "black",
            mode: "painting",
            gridSize: 40,
            painting: false,
            highlighting: false,
            colors: [
                {name: "pink", color: "pink"},
                {name: "green", color: "green"},
                {name: "red", color: "red"},
                {name: "yellow", color: "yellow"},
                {name: "blue", color: "blue"},
                {name: "black", color: "black"},
                {name: "purple", color: "purple"},
            
            ],
         }
         this.whiteboard = React.createRef();
         this.paint = this.paint.bind(this);
    }

    componentDidMount() {
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.lineCap = "round";

        this.canvas.addEventListener("mousedown", this.startPainting);
        this.canvas.addEventListener("mouseup", this.finishPainting);
        this.canvas.addEventListener("mousemove", this.paint);

        this.canvas.addEventListener("mousedown", this.startHighlighting);
        this.canvas.addEventListener("mouseup", this.finishHighlighting);
        this.canvas.addEventListener("mousemove", this.highlight);
    }
    toggleMode = (mode) => {
        this.setState({
            mode: mode
        })
    }
    onChangeWidth = (e) => {
        console.log(e);
        this.setState({
            lineWidth: e.target.value
        })
    }
    onChangeColor = (color) => {
        this.setState({
            strokeStyle : color
        })
    }
    startPainting = (e) => {
        if(this.state.mode === "painting"){
            this.setState({
                painting: true,
            }, () => {
                this.ctx.lineWidth = this.state.lineWidth;
                this.ctx.strokeStyle = this.state.strokeStyle;
                this.paint(e);
            })
        }else return;
      
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
            console.log("painting");
            var x,y;
            [x,y] = this.getPosition(e);
            this.ctx.lineWidth = this.state.lineWidth;
            this.ctx.strokeStyle = this.state.strokeStyle;
            this.ctx.lineTo(x,y);
            this.ctx.stroke();
            this.ctx.beginPath();
            this.ctx.moveTo(x,y);
        }else return;
    }   
    startHighlighting = () => {
        if(this.state.mode === "highlighting"){
            this.setState({
                highlighting: true,
            }, () => {             
            })
        }      
    }
    finishHighlighting = () => {
        this.setState({
            highlighting: false
        }, () => {
            this.ctx.globalCompositeOperation = "source-over";
        })
    }
    highlight = (e) => {
        if(this.state.highlighting){
            console.log("highlighting");
            this.ctx.globalCompositeOperation = "multiply";
            var x,y;
            [x,y] = this.getPosition(e);
            this.ctx.fillStyle = "#ff0";
            this.ctx.fillRect(x-10, y-10, 20,20);
        }else return;
    }
    clear = () => {
       this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    drawGrid = () => {
        var w = this.canvas.width; 
        var h = this.canvas.height;

        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = "rgba(0,0,0,0.2)";
        var p = this.state.gridSize;
        for (var x = 0; x <= w; x += p) {
            this.ctx.moveTo(0.5 + x, 0);
            this.ctx.lineTo(0.5 + x, h );
        }
      
        for (var x = 0; x <= h; x += p) {
            this.ctx.moveTo(0, 0.5 + x );
            this.ctx.lineTo(w , 0.5 + x );
        }
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.lineWidth = this.state.lineWidth;
        this.ctx.strokeStyle = this.state.strokeStyle;
    }

    render() { 
        return ( 
            <Box>
                <CanvasOptions 
                toggleMode = {this.toggleMode} 
                drawGrid = {this.drawGrid}     
                onChangeWidth = {this.onChangeWidth} 
                onChangeColor = {this.onChangeColor} 
                lineWidth = {this.state.lineWidth} 
                colors = {this.state.colors} 
                >
                </CanvasOptions>
                <StyledCanvas  ref={(ref) => (this.canvas = ref)}></StyledCanvas>
                <ClearButton onClick={this.clear}>
                    <Icon src = {eraser}></Icon>
                </ClearButton>
            </Box>
         );
    }
}
 
export default Canvas;