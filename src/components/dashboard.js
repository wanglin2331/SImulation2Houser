import React, { Component } from 'react';
 import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { getProperty, logout, removeProperty } from "../reducers/reducer";
import HouserIMG from '../HouserSmall.png';
import DeleteIMG from '../delete_button.png';

class Dashboard extends Component {
    
    // componentDidMount() {
    //     this.props.getProperty() 
    // }


    logout() {
        this.props.logout();
        this.setState({username: '', password:''});
    };



    render() {
        return (
        
        <div>
                {this.props.loginStatus=='Success'
                ?
                <div>
                        <nav>
                            <img src = {HouserIMG} alt="Houser"/>
                            House Dashboard
                            <Link to={"/"}><button onClick={()=>this.logout()}>Logout</button></Link>
                        </nav>
                        
                        <div className='DashboardPage'>
                            <div className="dashboard">
                            <Link to={"/wizard/1"} className="AddCompleteButton"> Add new property </Link>

                            <h2>Home Listings</h2>
                            {this.props.property.map((property) => {

                            return (
                                <div key={property.id} className="singleProperty">
                                        <img className="HouseImage" src={property.imageurl} alt='property' />
                                        <div>
                                            Property Name: {property.propertyNM}
                                            Property Description: {property.propertyDSC}
                                        </div>
                                        <div>
                                            Loan Amount: {property.loanamt}
                                            Monthly Mortgage: {property.monthlymortgageamt}
                                            Recommended Rent: {property.monthlymortgageamt*1.25}
                                            Desired Rent: {property.desiredrent}
                                            Address: {property.address}
                                            City: {property.city}
                                            State: {property.State}
                                            Zip: {property.zip}
                                        </div>
                                        <button onClick={()=>this.props.removeProperty({"id": property.id})}><img src={DeleteIMG} alt="delete"/></button>
                                </div>
                            )
                            })}

                            </div>
                        </div>
                </div>
                :
                <div>
                    {this.props.loginStatus=='Pending'
                        ?
                        <h2>Loading...</h2>
                        :
                        <div>
                        <h2>Wrong Credential!!</h2>
                        <Link to={"/"}><button>Login Again</button></Link>
                        </div>
                    }
                </div>
                }
        </div>
        )
    }
};


const mapStateToProps = state => {
    return {
        username: state.username,
        password: state.password,
        property: state.property,
        loginStatus: state.loginStatus
    }
}

export default connect( mapStateToProps, {getProperty: getProperty, logout: logout, removeProperty: removeProperty} )(Dashboard);
