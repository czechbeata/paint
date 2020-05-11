import React, { Component } from 'react';
import styled from 'styled-components';
import CanvasOptions from './CanvasOptions';
import eraser from './cross.svg';
import ReactDOM from 'react-dom';

const Box = styled.section`
  position: relative;
`;

const StyledCanvas = styled.canvas`
  display: block;
  position: relative;
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

const Textarea = styled.textarea`
  background:green;
  position: absolute;
  top: 0;
  left: 0;
  width:200px;
  height:100px;
`;

class Canvas extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            mode : "painting",
            lineWidth : 5,
            strokeStyle: "black",
            mode: "painting",
            gridSize: 40,
            painting: false,
            highlighting: false,
            triangle: false,
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
        //  this.paint = this.paint.bind(this);
    }

    componentDidMount() {
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.lineCap = "round";      

        this.canvas.addEventListener("mousedown", this.onMouseDown);
        this.canvas.addEventListener("mouseup", this.onMouseUp);
        this.canvas.addEventListener("mousemove", this.onMouseMove);
    }

    onChangeWidth = (e) => {
      console.log(e);
      this.setState({
          lineWidth: e.target.value
      })
  }

    changeMode = (mode) => {
        this.setState({ mode });
    }

    getPosition (e) {
      var rect = this.canvas.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      return [x, y];
    }   

    // PAINTING
    startPainting = (e) => {    
          this.setState({
              painting: true,
          }, () => {
              this.ctx.lineWidth = this.state.lineWidth;
              this.ctx.strokeStyle = this.state.strokeStyle;
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

    paint = (e) => {
      if(this.state.painting){
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

    // HIGHLIGHTING

    startHighlighting = (e) => {     
          this.setState({
            highlighting: true,
          }, () => {
            this.highlight(e);    
          })     
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
            this.ctx.globalCompositeOperation = "multiply";
            var x,y;
            [x,y] = this.getPosition(e);
            this.ctx.fillStyle = "#ff0";
            this.ctx.fillRect(x-10, y-10, 20,20);
        }else return;
    }

    // FIGURES
    drawRightTriangle = (e) => {
 
      if(this.state.mode === "rightTriangle"){
          var x,y;
          [x,y] = this.getPosition(e);
  
          this.ctx.lineWidth = 3;
          this.ctx.strokeStyle = '#666666';
  
          this.ctx.beginPath();
          this.ctx.moveTo(x, y);
          this.ctx.lineTo(x, y + 100);
          this.ctx.lineTo(x + 100, y + 100);
          this.ctx.closePath();
          this.ctx.stroke();
          this.ctx.beginPath();

          this.setState({
            mode: "painting"
          })
      }   
      
   }
   drawSquare = (e) => {
     if(this.state.mode === "square"){
      var x,y;
      [x,y] = this.getPosition(e);
      this.ctx.lineWidth = 3;
      this.ctx.strokeStyle = '#666666';

      this.ctx.beginPath();
      this.ctx.moveTo(x, y);
      this.ctx.lineTo(x, y + 100);
      this.ctx.lineTo(x + 100, y + 100);
      this.ctx.lineTo(x + 100, y);
      this.ctx.closePath();
      this.ctx.stroke();
      this.ctx.beginPath();

      this.setState({
        mode: "painting"
      })

     }
   }
   drawRectangle = (e) => {
    if(this.state.mode === "rectangle"){
      var x,y;
      [x,y] = this.getPosition(e);
      this.ctx.lineWidth = 3;
      this.ctx.strokeStyle = '#666666';

      this.ctx.beginPath();
      this.ctx.moveTo(x, y);
      this.ctx.lineTo(x, y + 100);
      this.ctx.lineTo(x + 150, y + 100);
      this.ctx.lineTo(x + 150, y);
      this.ctx.closePath();
      this.ctx.stroke();
      this.ctx.beginPath();

      this.setState({
        mode: "painting"
      })
    }
  }
   drawCircle = (e) => {
     if(this.state.mode === "circle"){
      var x,y;
      [x,y] = this.getPosition(e);
      this.ctx.lineWidth = 3;
      this.ctx.strokeStyle = '#666666';
      this.ctx.beginPath();
      this.ctx.arc(x, y, 50, 0, 2 * Math.PI);
      this.ctx.stroke();
      this.ctx.beginPath();

      this.setState({
        mode: "painting"
      })
     }
   }
   drawTriangle = (e) => {
    if(this.state.mode === "triangle"){
      var x,y;
      [x,y] = this.getPosition(e);
      this.ctx.lineWidth = 3;
      this.ctx.strokeStyle = '#666666';

      this.ctx.beginPath();
      this.ctx.moveTo(x, y);
      this.ctx.lineTo(x + 100, y);
      this.ctx.lineTo(x + 50, y - 86);
      this.ctx.closePath();
      this.ctx.stroke();
      this.ctx.beginPath();

      this.setState({
        mode: "painting"
      })
    }
  }

  // TEXT

  addTextArea = (e) => {
    var x,y;
    [x,y] = this.getPosition(e);

    // standard DOM manipulation
    var textarea = document.createElement('textarea');
    textarea.className = 'info';
    textarea.style.top = e.clientY + 'px';
    textarea.style.left = e.clientX + 'px';
    // textarea.style.border = 'none';
    document.body.appendChild(textarea);

    //react DOM manipulation
    // ReactDOM.render(<Textarea />, document.body);
    
    this.setState({
      mode: "painting"
    })
  }
 


    onMouseDown = (e) => {
      switch(this.state.mode) {
        case 'painting':
          this.startPainting(e);
          break;
        case 'highlighting':
          this.startHighlighting(e);
          break;
        case 'rightTriangle':
          this.drawRightTriangle(e);
          break;
        case 'triangle':
          this.drawTriangle(e);
        case 'circle':
          this.drawCircle(e);
          break;
        case 'square':
          this.drawSquare(e);
          break;
        case 'rectangle':
          this.drawRectangle(e);
          break;
        case 'textarea':
          this.addTextArea(e);
          break;
        default:
          this.startPainting(e);
      }
    }

    onMouseMove = (e) => {
      switch(this.state.mode) {
        case 'painting':
          this.paint(e);
          break;
        case 'highlighting':
          this.highlight(e);
          break;
        case 'triangle':
          break;
        default:
          this.paint(e);
      }
    }
    onMouseUp = () => {
      switch(this.state.mode) {
        case 'painting':
          this.finishPainting();
          break;
        case 'highlighting':
          this.finishHighlighting();
          break;
        case 'triangle':
          break;
        default:
          this.finishPainting();
      }
    }
    onChangeColor = (color) => {
      this.setState({
          strokeStyle : color
      })
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
                  changeMode = {this.changeMode}
                  colors = {this.state.colors} 
                  drawGrid = {this.drawGrid}  
                  onChangeColor = {this.onChangeColor} 
                  onChangeWidth = {this.onChangeWidth} 
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