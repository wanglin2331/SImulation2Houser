import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import axios from 'axios';
import loginIMG from '../login.png';
import { connect } from "react-redux";
import {login, getProperty, register} from "../reducers/reducer";


class Login extends Component {
    constructor() {
        super();
    
        this.state = {
          username: '',
          password: ''
        };

        this.handleChangeUsername = this.handleChangeUsername.bind( this );
        this.handleChangePassword = this.handleChangePassword.bind( this );
    }

    handleChangeUsername( val ) {
    this.setState({username: val });
    };

    handleChangePassword( val ) {
    this.setState({password: val });
    };
    
    login() {
        const { username, password } = this.state;
        this.props.login({ username, password });
    };

    register() {
        const { username, password } = this.state;
        this.props.register({ username, password })
    };


    render() {
        return (
            <div className="landingPage">
                <div className="login">
                
                    <img src = {loginIMG} alt="Houser"/>
                    
                    Username
                    <input onChange={ (e) => this.handleChangeUsername(e.target.value) }></input>
                    Password
                    <input onChange={ (e) => this.handleChangePassword(e.target.value) }></input>
                    
                    

                    <div>
  
                    <Link to={"/dashboard"}><button onClick={()=>this.login()}>Login</button></Link> 
                    {/* <button onClick={()=>this.login()}>Login</button>
                    <Link to={"/dashboard"}>Go To Dashboard</Link>  */}
                    <Link to={"/dashboard"}><button onClick={()=>this.register()}>Register</button></Link>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
       username : state.username,
       password : state.password,
       loginStatus: state.loginStatus
    }
}

export default connect( mapStateToProps, {login: login, getProperty:getProperty, register: register})(Login);