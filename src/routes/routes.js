import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Cart from '../pages/cart/Cart';
import Detail from '../pages/detail/Detail';
import Store from '../pages/store/Store';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Store}/>
                <Route path="/product/:productId" exact component={Detail} />
                <Route path="/cart" exact component={Cart} />
            </Switch>
        </Router>
    );
}

export default Routes;
