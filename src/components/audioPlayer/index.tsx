//@ts-nocheck

import React, { useState, useRef } from 'react'
import s from './audio.module.scss'
import classNames from 'classnames'

export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef()

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div className={classNames(s.overlay, { [s.hide]: isPlaying })}>
      <audio ref={audioRef} autoPlay loop>
        <source src='./bcgaudio.mp3' type='audio/mpeg' />
        Your browser does not support the audio element.
      </audio>
      <button className={s.button} onClick={togglePlay}></button>
    </div>
  )
}
