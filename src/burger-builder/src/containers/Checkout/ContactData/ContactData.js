import React, { Component } from 'react'
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';

export default class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postcode: ''
        },
        loading: false
    }
    
    orderHandler = (event) => {
        this.setState({loading: true});
        event.preventDefault();

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: 'James Eastham',
                address: {
                    street: 'A street',
                    postCode: 'PL26 8AX'
                },
                email: 'me@jameseastham.com'
            },
            deliveryMethod: 'fast'
        };

        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false});

                this.props.history.push('/');
            })
            .catch(err => {
                
            });
    }

    render() {
        let form = (
            <form>
                    <input type="text" placeholder="Your Name" name="name"/>
                    <input type="email" placeholder="Your Email" name="email"/>
                    <input type="text" placeholder="Street" name="street"/>
                    <input type="text" placeholder="Postcode" name="postcode"/>
                    <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
                </form>
        );

        if (this.state.loading)
        {
            form = <Spinner/>
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                {form}
            </div>
        )
    }
}
