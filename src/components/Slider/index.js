import React, {useState, useEffect} from 'react'
import './index.css'
import Controller from './Controller'

function Slider({images}) {
  const [count, setCount] = useState(5);
  const [isPlaying, setIsPlaying] = useState(true);
  const [imgIndex, setImgIndex] = useState(0);

  const noOfImgs = images.length;

  // variable to keep track of setInterval for clearInterval
  let t;

  function countDown() {
    t = setInterval(() => {
      if (isPlaying) {
        setCount(c => {
          if (c === 0) {
            setImgIndex((imgIndex + 1) % noOfImgs);
            return 5;
          }
          return c - 1;
        });
      }
    }, 1000);
  }

  function getPrevImage() {
    setImgIndex((id) => (id - 1) < 0 ? noOfImgs - 1 : id - 1);
    setCount(5);
  }

  function getNextImage() {
    setImgIndex((imgIndex + 1) % noOfImgs);
    setCount(5);
  }

  function toggleIsPlaying() {
    setIsPlaying((status) => !status);
  }

  useEffect(() => {
    countDown();
    return () => { clearInterval(t); }
  }, [isPlaying, count])

  return (
    <div className='slider'>
      <p className='count-down'>{count}</p>
      <img src={images[imgIndex]} alt='images' className='slide' />
      <Controller isPlaying={isPlaying} getPrevImage={getPrevImage} getNextImage={getNextImage} toggleIsPlaying={toggleIsPlaying}/>
    </div>
  )
}

export default Slider;
