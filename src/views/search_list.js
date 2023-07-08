import React from "react";
import { useSelector } from "react-redux";

function SearchList() {
  const items = useSelector(state => state.search);
  console.log(items);
    const image = "https://www.zdnet.com/a/img/resize/d101e2906705d7a0320f654afc914fd1c3631443/2020/01/13/7b52414d-132a-4ef9-b050-0f16e37f433b/npm.png?auto=webp&width=1280"
  
  return (
    <>
    <h1 className='title'>Packages</h1>
    <div className='grid-container'>
    {items.map((item)  => {
      return(
        <div className='grid-item' key={item.package.name}>
        <div className="item-container">
        <img src={image} alt="hello" className='list-img' />
            <div className='item-text'>Package Name: <span>{item.package.name}</span>  </div>
            <div className='item-text'>Version: <span>{item.package.version}</span>  </div>
            <div className='item-text'>Author Name: <span>{item.package.publisher.username}</span>  </div>
        </div>
      </div>
      )
    })}
    </div>
    </>
  );
}

export default SearchList;