import React, { Component } from 'react';

class BankAccount extends Component{
    render(){
        let firstName = "Rey";
        let accountBalance = "1000";
       return (
           <h1>{firstName}, {accountBalance}</h1>

       )
    }
}
export default BankAccount