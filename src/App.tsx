import React from 'react';
import './App.css';

import useGetPhotos from './hooks/useGetPhotos';

import Gallery from './components/Gallery' 

function App() {


  return (
    <React.Fragment>
      <div className="container">
        <h1>Flickr Gallery</h1>
        <Gallery />
      </div>
    </React.Fragment>
  );
}

export default App;
