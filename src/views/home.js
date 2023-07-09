import React from "react";
import { useState,  } from 'react';
import Loader from '../components/loader';
import { useDispatch, useSelector } from "react-redux";
import { search, searchData } from "../actions/action";
import { useHistory } from "react-router-dom";
import Toast from "../components/toast";

function Home() {
    const [loading, setLoading] = useState(false);
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    const items = useSelector(state => state.search);
    const history = useHistory();
    const [showToast, setShowToast] = useState(false);
    const [error, setError] = useState('Text Cannot be Empty');

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
          console.log(data['objects']);
          //setUsers(data)
          dispatch(searchData(data['objects']));
          dispatch(search());
          setLoading(false);
          console.log(items);
          history.push("/list");
        }).catch(err => {
          setError(err.message + ' Check Internet Connection');
          setShowToast(true);
          console.log(err);
          setLoading(false);
  })
    }else{
      setError('Text Cannot be Empty');
      setShowToast(true);
      setLoading(false);
    }
  }

  return (
    <>
    <div className='container'>
      <h1 className='title'>Find npm</h1>
      <p className='sub-title'>Find every details about a npm package and get comprehensive details about it</p>
      <div className='search-container'>
        <input type="text" placeholder="Search..."  className='search-input' onChange={(e) => setText(e.target.value)}/>
        <button onClick={fetchUserData} className='search-button'>
        {loading ? 
        <Loader />
         : 'Search'}
        </button>

      </div>
      {showToast && (
        <Toast message= {error} onClose={handleCloseToast} />
      )}
    </div>

    </>
  );
}

export default Home;