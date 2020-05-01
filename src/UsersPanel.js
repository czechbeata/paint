import React, { Component } from 'react';
import styled from 'styled-components';
import imgg from './tmpuserimg.jpg';
import User from './User';

const StyledUsersPanel = styled.section`
    background : #8BC26B;
    grid-area: usersPanel;
    display:grid;
    grid-gap: 20px;
    padding:20px;
    overflow: auto;
`;

class UsersPanel extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            users:[
                {username: "Jane", img: imgg, speaking: true},
                {username: "George", img: imgg, speaking: false},
                {username: "Alice", img: imgg, speaking: false},
            ]
         }
    }
    render() { 
        return ( 
            <StyledUsersPanel>
                {this.state.users.map(user =>
                    <User user={user}></User>)}
            </StyledUsersPanel>
         );
    }
}
 
export default UsersPanel;