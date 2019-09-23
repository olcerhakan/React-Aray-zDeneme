import React, { Component } from 'react';
import './App.css';
import Side from "./components/Side";
import Users from "./components/Users";
import Content1 from "./components/Content1";
import RightSide from "./components/RightSide";

class App extends Component {
    //<Users users = {this.state.users}/>
  render() {
    const test="hakan";
    const isAuth=true;
    return (
      <div className="container">
        <Side/>
        <RightSide/>
        <Users />
        <Content1/> 
      </div>
    );
  }
}

export default App;
