 # Forms

 When creating forms, it is beneficial to generate the forms dynamically based on a config object.

 ``` js

state = {
    orderForm: {
        name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your Name'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false
        },
        street: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your Street'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false
        },
        postcode: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your Postcode'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false
        },
        email: {
            elementType: 'email',
            elementConfig: {
                type: 'text',
                placeholder: 'Your Email'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false
        },
        deliveryMethod: {
            elementType: 'select',
            elementConfig: {
                options: [
                    {
                        value: 'fastest', displayValue: 'Fastest'
                    },
                    {
                        value: 'cheapest', displayValue: 'Cheapest'
                    }
                ]
            },
            value: ''
        },                
    },
    loading: false
}

render() {
    let form = (
        <form onSubmit={this.orderHandler}>
            {
                formElementsArray.map(formElement => (
                    <Input key={formElement.key} 
                        elementType={formElement.config.elementType} 
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
                ))
            }
            <Button btnType="Success">ORDER</Button>
        </form>
    );
}

 ```

 The same applies for validations, they must be manually created as there is no built in validation library.

 ``` js

checkValidity(value, rules) {
    let isValid = true;

    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength){
        isValid = value.trim().length >= rules.minLength && isValid;
    }

    if (rules.maxLength){
        isValid = value.trim().length <= rules.maxLength && isValid;
    }

    return isValid;
}

inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {
        ...this.state.orderForm
    };

    const updatedFormElement = {
        ...updatedOrderForm[inputIdentifier]
    };

    updatedFormElement.value = event.target.value;
    updatedFormElement.touched = true;

    updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);

    updatedOrderForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;

    for (let inputIdentifier in updatedOrderForm) {
        formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }

    this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});
}

 ```