import React from "react";
import { useState,  } from 'react';
import Loader from '../components/loader';
import { useDispatch, useSelector } from "react-redux";
import { search, searchData } from "../actions/action";
import { useHistory } from "react-router-dom";
import Toast from "../components/toast";

function Home() {
    const [loading, setLoading] = useState(false); //Button loading state
    const [text, setText] = useState(""); //The search text state
    const dispatch = useDispatch(); //To execute the redux action and save the state
    const items = useSelector(state => state.search); //Get the items which will be empty initially
    const history = useHistory(); //The history to pussh to another route
    const [showToast, setShowToast] = useState(false); //Toast state 
    const [error, setError] = useState('Text Cannot be Empty'); ///Error message to displasy

  const handleCloseToast = () => {
    setShowToast(false);
  };
    

  const fetchUserData = () => {
    if(text.length != 0){
      setLoading(true);
      fetch("https://registry.npmjs.org/-/v1/search?text=" + text)
        .then(response => {
          return response.json()
        })
        .then(data => {
          //Console the data gotten
          console.log(data['objects']);
          //Save it to state
          dispatch(searchData(data['objects']));
          //Let the route know that they can access the route
          dispatch(search());
          ///Set the loading to false
          setLoading(false);
          //Push to the list page
          history.push("/list");
        }).catch(err => {
          //Set Error text
          setError(err.message + ' Check Internet Connection');
          //Dsplay toast
          setShowToast(true);
          //Console the error
          console.log(err.message);
          //Stop loading
          setLoading(false);
  })
    }else{
      ///Runs only if the text field is Empty
      setError('Text Cannot be Empty');
      setShowToast(true);
      setLoading(false);
    }
  }

  return (
    <>
    <div className='container'>
    {/* The Title */}
      <h1 className='title'>Find npm</h1>
      <p className='sub-title'>Find every details about a npm package and get comprehensive details about it</p>

      {/* The Search Container with the button */}
      <div className='search-container'>
        <input type="text" placeholder="Search..."  className='search-input' onChange={(e) => setText(e.target.value)}/>
        <button onClick={fetchUserData} className='search-button'>
        {loading ? 
        <Loader />
         : 'Search'}
        </button>
      </div>

      {/* The Toast Component */}
      {showToast && (
        <Toast message= {error} onClose={handleCloseToast} />
      )}
    </div>

    </>
  );
}

export default Home;