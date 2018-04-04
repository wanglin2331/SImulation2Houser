import React, { Component } from 'react';
 import {Link} from 'react-router-dom';
 import {connect} from "react-redux";
 import {inputLoanAMT, inputMortgage, logout , cancel} from "../reducers/reducer";
 import HouserIMG from '../HouserSmall.png';

class Wizard4 extends Component {
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

            Loan Amount
            <input onChange={(e)=>this.props.inputLoanAMT(e.target.value)}/>
            
            Monthly Mortgage
            <input onChange={(e)=>this.props.inputMortgage(e.target.value)}/>

            <div>
                <Link to={"/wizard/3"} className="stepbutton">PREVIOUS</Link>
                <Link to={"/wizard/5"} className="stepbutton">NEXT</Link>
            </div>
        </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        addLoanamt: state.addLoanamt,
        addMonthlymortgageamt: state.addMonthlymortgageamt
    }
}

export default connect(mapStateToProps,{inputLoanAMT, inputMortgage, logout, cancel})(Wizard4);