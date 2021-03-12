import logo from './logo.svg';
import './App.css';
import  { BeforeLogin } from "./containers/BeforeLogin";
import { Component } from 'react';

class App extends Component {
  render(){
    return(
      <BeforeLogin/>
    );
  }
}

export default App;
