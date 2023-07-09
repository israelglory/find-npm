import React from "react";
import { useSelector } from "react-redux";
import { useState } from 'react';
import Modal from "../components/modal";

function SearchList() {
  const items = useSelector(state => state.search); //Get the items which will not be empty
  const [currentPackage, setCurrentPackage] = useState(null); //The current package that was clicked. This will now be passed to the modal
  const [modalSheet, setModal] = useState(false); ///The modal state
  console.log(items);
  const image = "https://www.zdnet.com/a/img/resize/d101e2906705d7a0320f654afc914fd1c3631443/2020/01/13/7b52414d-132a-4ef9-b050-0f16e37f433b/npm.png?auto=webp&width=1280"
  
    {/* The Open Modal function */}
  function openModal(item) {
      setCurrentPackage(item);
      setModal(true);
    }
    
  return (
    <div>
    
    {modalSheet ? <Modal onClose={() => setModal(false)} currentPackage={currentPackage} /> :
    <div>
    {/* The Title */}
    <h1 style={{
      color: 'black',
      padding: '16px',
      margin: '0px',
    }}>Packages</h1>

    {/* The Grid */}
    <div className='grid-container'>
    {items.map((item)  => {

      {/* The Authur name */}
      const authorName = item.package.publisher.username.charAt(0).toUpperCase() + item.package.publisher.username.slice(1);
      return(

        <div className='grid-item' key={item.package.name} onClick={() => {openModal(item)}}>
        <div className="item-container" >
        <img src={image} alt="hello" className='list-img' />
            <div className='item-text'>Package Name: <span>{item.package.name}</span>  </div>
            <div className='item-text'>Version: <span>{item.package.version}</span>  </div>
            <div className='item-text '>Author Name: <span>{authorName}</span>  </div>
        </div>
      </div>

      )
    })}
    </div>
     </div>
    }
    </div>
  );
}

export default SearchList;