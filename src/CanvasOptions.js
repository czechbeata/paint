import React, { Component } from 'react';
import styled from 'styled-components';
import Option from './Option';
import stroke from './stroke.svg';

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

class CanvasOptions extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <StyledCanvasOptions className="shadow">
                <Option paint={this.props.paintingOn} img={stroke}></Option>
            </StyledCanvasOptions>
         );
    }
}
 
export default CanvasOptions;