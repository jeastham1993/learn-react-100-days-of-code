import React from 'react'
import classes from './CheckoutSummary.module.css';
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button';

export default function checkoutSummary(props) {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes good</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button clicked={props.checkoutCancelled}
                btnType="Failure">CANCEL</Button>
            <Button clicked={props.checkoutContinued}
                btnType="Success">CONTINUE</Button>
        </div>
    )
}
