import React from 'react';
import styled from 'styled-components';

const StyledUser = styled.div`
  background:white;
  padding: 0 0 10px 0;
`;

const UserImg = styled.img`
  background:grey;
  width:100%;
  height:180px;
`;

const UserName = styled.p`
  text-align: center;
`;

const SpeakingStatus = styled.div`
  height: 25px;
  width: 25px;
  background-color: ${props => props.speaking ? "green" : "red"};
  border-radius: 50%;
  display: block;
  margin: 0 auto;
`;

const User = (props) => {
    return ( 
        <StyledUser>
            <UserImg src={props.user.img}></UserImg>
            <UserName>{props.user.username}</UserName>
            <SpeakingStatus speaking = {props.user.speaking}></SpeakingStatus>
        </StyledUser>
     );
}
 
export default User;