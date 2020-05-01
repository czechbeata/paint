import React, { Component } from 'react';
import './App.css';
import Canvas from './Canvas';
import Navigation from './Navigation';
import UsersPanel from './UsersPanel';
import Main from './Main';
import styled from 'styled-components';

const StyledApp = styled.div`
    display:grid;
    height:100vh;
    width:100vw;
    display:grid;
    grid-template-rows: 10vh 90vh;
    grid-template-columns: 20vw 80vw;
    grid-template-areas: 
    "navigation main"
    "usersPanel main";
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      height: props.height
     }
  }

  componentWillMount(){
    this.setState({height: window.innerHeight + 'px'});
    console.log(this.state.height)
  }

  render() { 
    return ( 
      <StyledApp>     
        <Navigation></Navigation>
        <UsersPanel></UsersPanel>
        <Main></Main>
      </StyledApp>
     );
  }
}
 
export default App;
 

