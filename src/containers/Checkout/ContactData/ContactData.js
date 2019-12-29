import React, { Component } from 'react';
import axios from '../../../axios-orders';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Fabio Zeratul',
                address: {
                    street: 'street 1',
                    zipCode: 33011,
                    country: 'Mexico'
                },
                email: 'test@test.tt'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false});
            })
            .catch(error => {
                this.setState({ loading: false});
            });
    }

    render() {
        return (
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Data</h4>
                <form>
                    <input className={classes.Input} type="text" name="name" placeholder="Your Name"></input>
                    <input className={classes.Input} type="email" name="email" placeholder="Your Email"></input>
                    <input className={classes.Input} type="text" name="street" placeholder="Street"></input>
                    <input className={classes.Input} type="text" name="postal" placeholder="Postal Code"></input>
                    <Button
                        btnType="Success"
                        clicked={this.orderHandler}>ORDER</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;