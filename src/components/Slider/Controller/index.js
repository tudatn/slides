import React, {useState} from 'react'
import './index.css'

function Controller({getNextImage, getPrevImage, toggleIsPlaying, isPlaying}) {

  function handlePrev() {
    getPrevImage();
  }

  function handleNext() {
    getNextImage();
  }

  function handlePlay() {
    toggleIsPlaying();
  }

  return (
    <div class='controller'>
      <button onClick={handlePrev}>Previous</button>
      <button onClick={handlePlay}>{isPlaying ? 'Pause' : 'Resume'}</button>
      <button onClick={handleNext}>Next</button>
    </div>
  )
}

export default Controller;
