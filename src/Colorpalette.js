import React from 'react';
import styled from 'styled-components';


const StyledColorPalette = styled.div`
  min-width:10px;
  min-height:10px;
  display:grid;
  grid-template-columns: repeat(4,1fr);
  grid-auto-rows: 40px;
  grid-gap:5px;
`;

const Color = styled.button`
  height:40px;
  width:40px;
  &:hover{
    cursor:pointer;
  }
`;

const ColorPalette = (props) => {
    return ( 
        <StyledColorPalette>
            {props.colors.map(color => 
              <Color style={{backgroundColor: color.color}} onClick={() => props.onChangeColor(color.color)}></Color>
              )}
        </StyledColorPalette>
     );
}
 
export default ColorPalette;