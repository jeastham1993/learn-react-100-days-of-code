import React, {
    Component
} from 'react';
import Aux from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
} 

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseable: false,
        purchasing: false
    }

    updatePurchaseState(ingredients) {
        const totalIngredientCount = Object.keys(ingredients).map(ingKey => {
            return ingredients[ingKey];
        }).reduce((sum, el) => {
            return sum + el;
        }, 0);

        this.setState({
            purchaseable: totalIngredientCount > 0
        });
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];

        const updatedCount = oldCount + 1;

        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;

        const newPrice = oldPrice + priceAddition;

        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        });

        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];

        const updatedCount = oldCount - 1;
        
        if (updatedCount >= 0)
        {
            const priceDeduction = INGREDIENT_PRICES[type];
            const oldPrice = this.state.totalPrice;

            const newPrice = oldPrice + priceDeduction;

            const updatedIngredients = {
                ...this.state.ingredients
            };
    
            updatedIngredients[type] = updatedCount;

            this.setState({
                totalPrice: newPrice,
                ingredients: updatedIngredients
            });

            this.updatePurchaseState(updatedIngredients);
        }
    } 

    purchaseHandler = () => {
        this.setState({purchasing: true});
    };

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    completeOrderHandler = () => {
        alert('You bought a burger, WAHOOOOO!');
    }

    render() {
        return (
            <Aux>
                <Modal modalClosed={this.purchaseCancelHandler} show={this.state.purchasing}>
                    <OrderSummary cancelOrder={this.purchaseCancelHandler} 
                        completeOrder={this.completeOrderHandler}
                        ingredients={this.state.ingredients}    
                        price={this.state.totalPrice}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    price={this.state.totalPrice}
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    purchaseable={this.state.purchaseable}
                    ordered={this.purchaseHandler}
                />

            </Aux>
        );
    }
}

export default BurgerBuilder;