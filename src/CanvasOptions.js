import React, { Component } from 'react';
import styled from 'styled-components';
import stroke from './stroke.svg';
import palette from './palette.svg';
import grid from './grid.svg';
import highlighter from './highlighter.svg';
import ColorPalette from './Colorpalette';

const StyledCanvasOptions = styled.ul`
  width:500px;
  height:50px;
  position: absolute;
  background:white;
  top: 50px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  z-index: 999;
`;
const OptionDetails = styled.div`
  display:none;
  background: white;
  position:absolute;
  padding:15px;
  top: 50px;
  left: -50%;
`;
const StyledOption = styled.button`
  background:white;
  border-right: 1px solid rgba(0,0,0,0.1);
  height:50px;
  padding: 5px 10px;
  position:relative;
  &:hover{
      cursor:pointer;
  }

  &:hover ${OptionDetails}{
    display:block;
  }
`;

const OptionImage = styled.img`
  width:50px;
  height:40px;
`;
const WidthInput = styled.input`
 
`;

class CanvasOptions extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <StyledCanvasOptions className="shadow">

                <StyledOption onClick={() => this.props.toggleMode("painting")}>
                    <OptionImage src={stroke} alt="stroke"></OptionImage>
                    <OptionDetails className="shadow">
                      <WidthInput 
                        onChange={this.props.onChangeWidth} 
                        type="range"  
                        value={this.props.lineWidth} 
                        min="1" 
                        max="10"></WidthInput>
                      </OptionDetails>
                </StyledOption>
                <StyledOption>
                    <OptionImage src={palette} alt="palette"></OptionImage>
                    <OptionDetails className="shadow">
                       <ColorPalette 
                       colors={this.props.colors}
                       onChangeColor = {this.props.onChangeColor}
                       ></ColorPalette>
                    </OptionDetails>
                </StyledOption>
                <StyledOption onClick={() => this.props.toggleMode("highlighting")}>              
                    <OptionImage src={highlighter} alt="highlighter"></OptionImage>
                </StyledOption>
                <StyledOption onClick={this.props.drawGrid}>
                    <OptionImage src={grid} alt="grid"></OptionImage>
                </StyledOption>
            </StyledCanvasOptions>
         );
    }
}

export default CanvasOptions;