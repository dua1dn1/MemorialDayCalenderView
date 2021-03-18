import React, { Component } from 'react';
import SignUp  from './SignUp';

class LoginForm extends Component {

    render(){
    return(
        <form>
            <lable>
                ID : <input type= "text" name="id" placeholder  = "ID"/>           
            </lable> 
            <label>
                PW : <input type= "password" name="pw" placeholder  = "password"/>
            </label>
            <button className="Lbtn">Login</button>
            <button className="Sbtn" onClick={() => }>SignUp</button>
        </form>
        );
    }
}

export default LoginForm;