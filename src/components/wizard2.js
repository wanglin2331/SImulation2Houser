import React, { Component } from 'react';
 import {Link} from 'react-router-dom';
 import {connect} from "react-redux";
 import {inputAddress, inputCity, inputState, inputZip, logout, cancel } from "../reducers/reducer";
 import HouserIMG from '../HouserSmall.png';

class Wizard2 extends Component {
    render() {
        return (
        <div>
        <nav>
            <img src = {HouserIMG} alt="Houser"/>
            House Dashboard
            <Link to={"/"}><button onClick={()=>this.props.logout()}>Logout</button></Link>
        </nav>
        
        <div>
            <h1>Add New Listing</h1>
            <Link to={"/dashboard"}><button onClick={()=>this.props.cancel()}>Cancel</button></Link>
        </div>

        Address
        <input onChange={(e)=>this.props.inputAddress(e.target.value)}/>
        City
        <input onChange={(e)=>this.props.inputCity(e.target.value)}/>
        State
        <input onChange={(e)=>this.props.inputState(e.target.value)}/>
        Zip
        <input onChange={(e)=>this.props.inputZip(e.target.value)}/>

        <div>
            <Link to={"/wizard/1"} className="stepbutton">PREVIOUS</Link>
            <Link to={"/wizard/3"} className="stepbutton">NEXT</Link>
        </div>

        </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        addAddress: state.addPropertynm,
        addCity: state.addCity,
        addState: state.addState,
        addZip: state.addZip,
    }
}

export default connect(mapStateToProps,{inputAddress, inputCity, inputState, inputZip, logout, cancel})(Wizard2);