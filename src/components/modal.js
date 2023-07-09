import React from 'react'
import { useState, useEffect } from 'react'

function Modal({onClose, currentPackage}) {
const [downloads, editDownloads] = useState(0);
console.log(currentPackage);
const authorName = currentPackage.package.publisher.username.charAt(0).toUpperCase() + currentPackage.package.publisher.username.slice(1);
const description = currentPackage.package.description.charAt(0).toUpperCase() + currentPackage.package.description.slice(1);
const image = "https://www.zdnet.com/a/img/resize/d101e2906705d7a0320f654afc914fd1c3631443/2020/01/13/7b52414d-132a-4ef9-b050-0f16e37f433b/npm.png?auto=webp&width=1280"

    useEffect(() => {
        fetch(`https://api.npmjs.org/downloads/point/last-month/${currentPackage.package.name}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.downloads);
        editDownloads(data.downloads)
        })
        .catch(err => {
            console.log(err);
    })},[]);

  return (
    <div className='modal-background' onClick={onClose}>
    <div className='modal-container'>
    <button className='close-button' onClick={onClose}>X</button>
        <img src={image} alt="hello" className='list-img' />
            <div className='item-text'>Package Name: <span>{currentPackage.package.name}</span>  </div>
            <div className='item-text'>Version: <span>{currentPackage.package.version}</span>  </div>
            {currentPackage.package.description == null ?  null : <div className='item-text'>Description: <span>{description}</span>  </div>}
            <div className='item-text'>Author Name: <span>{authorName}</span>  </div>
            <div className='item-text'>Downloads: <span>{downloads.toLocaleString()}</span></div>
            <div style={
              {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                padding: '10px'
              }
            }>
            <a href={currentPackage.package.links.npm} target='_blank' rel="noreferrer" className='item-text'>Link to npm</a>
            <a href={currentPackage.package.links.repository} target='_blank' rel="noreferrer" className='item-text'>Link to repository</a>
            </div>
    </div>
    </div>
  )
}

export default Modal;