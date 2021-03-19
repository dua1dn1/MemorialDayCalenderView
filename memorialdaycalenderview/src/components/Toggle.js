import { Component } from 'react';
import LoginForm from './LoginForm';
import SignUp from './SignUp';

class Toggle extends Component {
    constructor(){
        super();
        this.state={
            toggle: "LoginForm"
        }
    }

    setToggle = (toggle) =>{
        this.setState({
            toggle: toggle
        })
    }

    render(){
        if (this.state.toggle === "LoginForm") return (<LoginForm setToggle = {this.setToggle}/>);
        if (this.state.toggle === "Signup") return (<SignUp setToggle = {this.setToggle}/>);
    }
}

export default Toggle;