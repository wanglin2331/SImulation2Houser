import React, { Component } from 'react';
 import {Link} from 'react-router-dom';
 import {connect} from "react-redux";
 import {inputPropertyNM, inputPropertyDSC, logout, cancel } from "../reducers/reducer";
 import HouserIMG from '../HouserSmall.png';

class Wizard1 extends Component {
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

        Property Name
        <input onChange={(e)=>this.props.inputPropertyNM(e.target.value)}/>
        Propert Description
        <input onChange={(e)=>this.props.inputPropertyDSC(e.target.value)}/>
        
        <div>
            <Link to={"/wizard/2"} className="stepbutton">NEXT</Link>
        </div>

        </div>

        
        )
    }
};

const mapStateToProps = state => {
    return {
        addPropertynm: state.addPropertynm,
        addPropertydsc: state.addPropertydsc
    }
}

export default connect(mapStateToProps,{inputPropertyNM, inputPropertyDSC, logout, cancel})(Wizard1);