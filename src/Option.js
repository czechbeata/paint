import React from 'react';
import styled from 'styled-components';

const StyledOption = styled.button`
  background:white;
  border-right: 1px solid rgba(0,0,0,0.1);
  height:50px;
  padding: 5px 10px;
`;

const OptionImage = styled.img`
  width:50px;
  height:40px;
`;

const Option = (props) => {
    return ( 
        <StyledOption onClick={props.paint}>
            <OptionImage src={props.img}></OptionImage>
        </StyledOption>
     );
}
 
export default Option;