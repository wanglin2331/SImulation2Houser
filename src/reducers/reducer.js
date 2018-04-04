import axios from 'axios';
const loginURL= 'http://localhost:3001/api/login';
const registerURL= 'http://localhost:3001/api/register';
const logoutURL= 'http://localhost:3001/api/logout';

const propertyURL= 'http://localhost:3001/api/property';


const initialState = {
    username: '',
    password: '',
    loginStatus: '',
    property: [],

    addPropertynm:'',
    addPropertydsc:'', 
    addAddress:'',
    addCity:'',
    addState:'',
    addZip:'',
    addImageurl:'',
    addLoanamt:0,
    addMonthlymortgageamt:0,
    addDesiredrent:0
};


export default function reducer(state = initialState, action){
    switch (action.type){
    case 'LOGIN_FULFILLED':
    // console.log('this is LOGIN payload',action.payload);
        return Object.assign({},state,{username: action.payload.username, password: action.payload.password, property: action.payload.property, loginStatus: 'Success'});
    
    case 'LOGIN_PENDING':
            return Object.assign({},state,{loginStatus: 'Pending'});

    case 'LOGIN_REJECTED':
        // console.log('this is LOGIN payload',action.payload);
            return Object.assign({},state,{loginStatus: ''});

    case 'REGISTER_FULFILLED':
        // console.log('this is REGISTER payload',action.payload);
            return Object.assign({},state,{username: action.payload.username, password: action.payload.password, loginStatus: 'Success'});
    
    case 'REGISTER_PENDING':
            return Object.assign({},state,{loginStatus: 'Pending'});

    case 'LOGOUT_FULFILLED':
        // console.log('this is LOGOUT payload',action.payload);
            return Object.assign({},state,{ username: '',
                                            password: '',
                                            property: [],
                                            loginStatus: '',
                                        
                                            addPropertynm:'',
                                            addPropertydsc:'', 
                                            addAddress:'',
                                            addCity:'',
                                            addState:'',
                                            addZip:'',
                                            addImageurl:'',
                                            addLoanamt:0,
                                            addMonthlymortgageamt:0,
                                            addDesiredrent:0}
                                );
    
    case 'GETPROPERTY_FULFILLED':
        return Object.assign({},state,{property: action.payload});
        // console.log('this is payload',action.payload);

    case 'ADDPROPERTYNM':
        return Object.assign({},state,{addPropertynm: action.payload});

    case 'ADDPROPERTYDSC':
        return Object.assign({},state,{addPropertydsc: action.payload});
    
    case 'ADDADDRESS':
        return Object.assign({},state,{addAddress: action.payload});

    case 'ADDCITY':
        return Object.assign({},state,{addCity: action.payload});

    case 'ADDSTATE':
        return Object.assign({},state,{addState: action.payload});

    case 'ADDZIP':
        return Object.assign({},state,{addZip: action.payload});
    
    case 'ADDIMAGE':
        return Object.assign({},state,{addImageurl: action.payload});

    case 'ADDLOAN':
        return Object.assign({},state,{addLoanamt: action.payload});
    
    case 'ADDMORTGAGE':
        return Object.assign({},state,{addMonthlymortgageamt: action.payload});

    case 'ADDRENT':
        return Object.assign({},state,{addDesiredrent: action.payload});

    case 'CANCEL':
        return Object.assign({},state,action.payload);
    
    case 'ADDPROPERTY_FULFILLED':
        return Object.assign({},state,{property: action.payload});
    
    case 'REMOVEPROPERTY_FULFILLED':
        return Object.assign({},state,{property: action.payload});

        default:
        return state;
    }
};

export function login (obj){
    return {
        type: 'LOGIN',
        payload: axios.post(loginURL, obj)          //{data: obj, withCredentials: true})
            .then( response => {
                // console.log(response.data);
            return response.data;
          })
    }
};

export function getProperty(){
    return {
        type: 'GETPROPERTY',
        payload: axios.get(propertyURL)
        .then(response=> {
            // console.log('getproperty11111',response.data);
            return response.data;
        })
    }
};

export function register (obj){
    return {
        type: 'REGISTER',
        payload: axios.post(registerURL, obj)
            .then( response => {
                // console.log(response.data);
            return response.data;
          })
    }
};

export function logout (){
    return {
        type: 'LOGOUT',
        payload: axios.post(logoutURL)
            .then( response => {
                // console.log(response.data);
            return response.data;
          })
    }
};


export function inputPropertyNM(addPropertynm){
    return {
        type: 'ADDPROPERTYNM',
        payload: addPropertynm
        }
};

export function inputPropertyDSC(addPropertydsc){
    return {
        type: 'ADDPROPERTYDSC',
        payload: addPropertydsc
        }
};

export function inputAddress(addAddress){
    return {
        type: 'ADDADDRESS',
        payload: addAddress
        }
};

export function inputCity(addCity){
    return {
        type: 'ADDCITY',
        payload: addCity
        }
};

export function inputState(addState){
    return {
        type: 'ADDSTATE',
        payload: addState
        }
};

export function inputZip(addZip){
    return {
        type: 'ADDZIP',
        payload: addZip
        }
};

export function inputImage(addImageurl){
    return {
        type: 'ADDIMAGE',
        payload: addImageurl
        }
};

export function inputLoanAMT(addLoanamt){
    return {
        type: 'ADDLOAN',
        payload: addLoanamt
        }
};

export function inputMortgage(addMonthlymortgageamt){
    return {
        type: 'ADDMORTGAGE',
        payload: addMonthlymortgageamt
        }
};

export function inputRent(addDesiredrent){
    return {
        type: 'ADDRENT',
        payload: addDesiredrent
        }
};

export function cancel(){
    return {
        type: 'CANCEL',
        payload:  { addPropertynm:'',
                    addPropertydsc:'', 
                    addAddress:'',
                    addCity:'',
                    addState:'',
                    addZip:'',
                    addImageurl:'',
                    addLoanamt:0,
                    addMonthlymortgageamt:0,
                    addDesiredrent:0
                    }
    }
};

export function addProperty(obj){
    return {
        type: 'ADDPROPERTY',
        payload: axios.post(propertyURL, obj)
        .then( response => {
             console.log(response.data);
        return response.data;
        })
    }
};

export function removeProperty(obj){
    return {
        type: 'REMOVEPROPERTY',
        payload: axios.delete(propertyURL, {data: obj})
        .then( response => {
             console.log(response.data);
        return response.data;
        })
    }
};

