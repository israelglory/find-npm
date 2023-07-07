//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './views/home';
import { Route, Switch, Redirect } from 'react-router-dom';
import SearchList from './views/search_list';

function App() {
  
  return (
    
    <main>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/list" component={SearchList} />
                <Redirect to="/" />
                {/* <Route path="/shop" component={Shop} /> */}
            </Switch>
    </main>
  );
}

export default App;
