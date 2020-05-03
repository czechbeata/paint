import React from 'react';
import styled from 'styled-components';

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


const Option = (props) => {
    return ( 
        <StyledOption onClick={props.paint}>
            
        </StyledOption>
     );
}
 
export default Option;