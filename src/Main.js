import React, { Component } from 'react';
import styled from 'styled-components';
import WorkspaceHeader from './WorkspaceHeader';
import Canvas from './Canvas';

const StyledMain = styled.div`
    grid-area: main;
`;

const Main = () => {
    return ( 
        <StyledMain>
            <WorkspaceHeader className="shadow"></WorkspaceHeader>
            <Canvas></Canvas>
        </StyledMain>
        
     );
}
 
export default Main;