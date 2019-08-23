import React from 'react';
import logo from './logo.svg';
import './App.css';
import Slider from './components/Slider'

const images = ['https://images.pexels.com/photos/2064357/pexels-photo-2064357.jpeg?cs=srgb&dl=fruit-milk-splash-2064357.jpg&fm=jpg',
                'https://images.pexels.com/photos/2356071/pexels-photo-2356071.jpeg?cs=srgb&dl=bright-car-colors-2356071.jpg&fm=jpg',
                'https://images.pexels.com/photos/1702343/pexels-photo-1702343.jpeg?cs=srgb&dl=bright-close-up-colors-1702343.jpg&fm=jpg',
];

function App() {
  return (
    <div className="App">
      <Slider images={images}/>
    </div>
  );
}

export default App;
