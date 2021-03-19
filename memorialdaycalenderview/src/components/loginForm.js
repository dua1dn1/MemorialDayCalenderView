import React, { Component } from 'react';
import './LoginForm.css';

class LoginForm extends Component {

    constructor(props){
        super();
        this.setToggle = props.setToggle;
    }


    render(){
    return(
        <form className="form">
            <div>
                <p>Login</p>
            </div>
            <div>     
            <lable>
                ID : <input type= "text" name="id" placeholder  = "ID"/>           
            </lable> 
            <label>
                PW : <input type= "password" name="pw" placeholder  = "password"/>
            </label>
            <button className="Lbtn" onClick={()=>console.log("test")}>Login</button>
            <button className="Sbtn" onClick={() => this.setToggle("Signup")}>SignUp</button>
            </div>
        </form>
        );
    }
}

export default LoginForm;