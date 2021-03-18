import React, { Component } from 'react'

class SignUp extends Component {
    render(){
    return(
        <form>
            <label>
                ID : <input type = "text" placeholder = "아이디를 입력하세요."/>
            </label>
            <label>
                password : <input type = "password" placeholder = "비밀번호를 입력하세요."/>
            </label>
            <button className="Sbtn">SignUp</button>
            <button calssName="Cbtn">back</button>
        </form>
        );
    }
}

export default SignUp;