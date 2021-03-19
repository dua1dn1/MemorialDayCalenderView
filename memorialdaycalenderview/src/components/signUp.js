import React, { Component } from 'react';

class SignUp extends Component {

    constructor(props){
        super();
        this.setToggle = props.setToggle;
    }

    render(){
    return(
        <form>
            signup
            <label>
                ID : <input type = "text" placeholder = "아이디를 입력하세요."/>
            </label>
            <label>
                password : <input type = "password" placeholder = "비밀번호를 입력하세요."/>
            </label>
            <button className="Sbtn">SignUp</button>
            <button calssName="Cbtn" onClick={() => this.setToggle("LoginForm")}>Login</button>
        </form>
        );
    }
}

export default SignUp;