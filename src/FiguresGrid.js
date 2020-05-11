import React from 'react';
import styled from 'styled-components';
import triangle from './triangle.svg';
import rightTriangle from './rightTriangle.svg';
import square from './square.svg';
import rectangle from './rectangle.svg';
import circle from './circle.svg';


const StyledFiguresGrid = styled.div`
  min-width:10px;
  min-height:10px;
  display:grid;
  grid-template-columns: repeat(4,1fr);
  grid-auto-rows: 40px;
  grid-gap:5px;
`;

const Figure = styled.img`
  height:40px;
  width:40px;
  &:hover{
    cursor:pointer;
  }
`;

const ColorPalette = (props) => {
    return ( 
        <StyledFiguresGrid>
            {/* <Figure style={{background: `url(${props.background}) no-repeat top center`}}></Figure> */}
            <Figure src={triangle} onClick={() => props.changeMode("triangle")}></Figure>
            <Figure src={rightTriangle} onClick={() => props.changeMode("rightTriangle")}></Figure>
            <Figure src={square} onClick={() => props.changeMode("square")}></Figure>
            <Figure src={rectangle} onClick={() => props.changeMode("rectangle")}></Figure>
            <Figure src={circle} onClick={() => props.changeMode("circle")}></Figure>
        </StyledFiguresGrid>
     );
}
 
export default ColorPalette;