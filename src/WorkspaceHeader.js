import React from 'react';
import styled from 'styled-components';

const StyledWorkspaceHeader = styled.header`
    border-bottom: 1px solid black;
    background:white;
    height:10vh;
    line-height: 10vh;
    text-align: center;
`;

const WorkspaceHeader = () => {
    return ( 
        <StyledWorkspaceHeader>Owner's workspace</StyledWorkspaceHeader>
     );
}
 
export default WorkspaceHeader;