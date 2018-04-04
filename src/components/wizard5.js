import React, { Component } from 'react';
 import {Link} from 'react-router-dom';
 import {connect} from "react-redux";
 import {inputRent, logout, addProperty, getProperty, cancel} from "../reducers/reducer";
 import HouserIMG from '../HouserSmall.png';

class Wizard5 extends Component {

    addProperty() {
        const {username, addPropertynm, addPropertydsc, addAddress, addCity, addState,
            addZip, addImageurl, addLoanamt, addMonthlymortgageamt, addDesiredrent} = this.props;
       
        this.props.addProperty({"username": username,
                                "propertynm" :addPropertynm,
                                "propertydsc": addPropertydsc,
                                "address": addAddress,
                                "city": addCity,
                                "state": addState,
                                "zip": addZip,
                                "imageurl": addImageurl,
                                "loanamt": addLoanamt,
                                "monthlymortgageamt": addMonthlymortgageamt,
                                "desiredrent": addDesiredrent})
            .then (this.props.getProperty())
    };

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

            Recommended Rent ${Number(this.props.addMonthlymortgageamt*1.25)}
            Desired Rent
            <input onChange={(e)=>this.props.inputRent(e.target.value)}/>

            <div>
                <Link to={"/wizard/4"} className="stepbutton">PREVIOUS</Link>

                <Link to={"/dashboard"} className="AddCompleteButton" onClick={()=>this.addProperty()}>
                        Complete
                </Link>
            </div>
        </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        username: state.username,
        addPropertynm: state.addPropertynm,
        addPropertydsc: state.addPropertydsc, 
        addAddress: state.addAddress,
        addCity:  state.addCity,
        addState:   state.addState,
        addZip: state.addZip,
        addImageurl: state.addImageurl,
        addLoanamt: state.addLoanamt,

        addDesiredrent: state.addDesiredrent,
        addMonthlymortgageamt: state.addMonthlymortgageamt,

        property: state.property
    }
}

export default connect(mapStateToProps,{inputRent, logout, addProperty, getProperty, cancel})(Wizard5);