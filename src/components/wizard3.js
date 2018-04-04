import React, { Component } from 'react';
 import {Link} from 'react-router-dom';
 import {connect} from "react-redux";
 import {inputImage, logout, cancel } from "../reducers/reducer";
 import HouserIMG from '../HouserSmall.png';

class Wizard3 extends Component {
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

                <img className="HouseImage" src={this.props.addImageurl} alt='preview'/>
                Image URL
                <input onChange={(e)=>this.props.inputImage(e.target.value)}/>

                <div>
                    <Link to={"/wizard/2"} className="stepbutton">PREVIOUS</Link>
                    <Link to={"/wizard/4"} className="stepbutton">NEXT</Link>
                </div>

        </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        addImageurl: state.addImageurl
    }
}

export default connect(mapStateToProps,{inputImage, logout, cancel})(Wizard3);