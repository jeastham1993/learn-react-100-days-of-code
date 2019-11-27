import React, { Component } from 'react';

import Aux from '../../hoc/Auxillary';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

import classes from './Layout.module.css';

class Layout extends Component{

	state = {
		showSideDrawer: true
	}

	sideDrawerClosedHandler = () => {
		this.setState({showSideDrawer: false});
	}

	render() {
		return <Aux>
			<Toolbar/>
			<SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
			<main className={classes.Content}>
				{this.props.children}
			</main>
		</Aux>
	}
	
};

export default Layout;