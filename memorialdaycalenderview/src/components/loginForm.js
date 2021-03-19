import React, { Component } from 'react';

class LoginForm extends Component {

    constructor(props){
        super();
        this.setToggle = props.setToggle;
    }


    render(){
    return(
        <form>
            signin
            <lable>
                ID : <input type= "text" name="id" placeholder  = "ID"/>           
            </lable> 
            <label>
                PW : <input type= "password" name="pw" placeholder  = "password"/>
            </label>
            <button className="Lbtn" onClick={()=>console.log("test")}>Login</button>
            <button className="Sbtn" onClick={() => this.setToggle("Signup")}>SignUp</button>
        </form>
        );
    }
}

export default LoginForm;