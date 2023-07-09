//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './views/home';
import { Route, Switch, Redirect } from 'react-router-dom';
import SearchList from './views/search_list';
import {  useSelector } from "react-redux";

function App() {
  const isSearch = useSelector(state => state.isSearch);
  console.log(isSearch);
  return (
    <main>
            <Switch>
                <Route path="/" component={Home} exact />
                {isSearch ? <Route path="/list" component={SearchList} /> :  <Redirect to="/" />}
                <Redirect to="/" />
            </Switch>
    </main>
  );
}

export default App;
