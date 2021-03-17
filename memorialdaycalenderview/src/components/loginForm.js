import React from 'react'

class loginForm extends React.Component {
    render(){
    return(
        <form>
            <lable>
                ID : <input type= "text" name="id" />           
            </lable> 
            <label>
                PW : <input type= "passwd" name="pw"/>
            </label>
            <button className="login">Login</button>
            <button className="sign_up">SignUp</button>
        </form>
        );
    }
}

export default loginForm;