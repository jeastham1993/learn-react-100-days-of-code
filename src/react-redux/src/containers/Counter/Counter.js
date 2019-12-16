import React, { Component } from 'react';
import { connect } from 'react-redux'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.props.onIncrementCounter();
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
            default:

        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={(    ) => this.props.onAdd( 5 )}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubtract( 5 )}  />
                <hr />
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {
                        this.props.storedResults.map((strResult) => {
                            return <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storedResults: state.results
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAdd: (value) => dispatch({type: 'ADD', value: value}),
        onSubtract: (value) => dispatch({type: 'SUBTRACT', value: value}),
        onStoreResult: () => dispatch({type: 'STORE_RESULT'}),
        onDeleteResult: (value) => dispatch({type: 'REMOVE_RESULT', key: value})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);