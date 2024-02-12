import React, { useContext } from 'react'
import Image from 'next/image'

import s from './collage.module.scss'
import { imgArray } from '@/data/images'
import { GameContext } from '@/context/gameContext'

export const Collage = () => {
  const { addAnswer } = useContext(GameContext)
  const generateImages = () => {
    const containerWidth = 1000
    const containerHeight = 200

    return imgArray.map((item, index) => {
      const randomTop = Math.random() * (containerHeight - 40)
      const randomLeft = Math.random() * (containerWidth - 40)

      return (
        <Image
          className={s.img}
          key={`${item.name} ${index}`}
          src={item.src}
          alt={`${item.name} photo`}
          style={{ top: `${randomTop}px`, left: `${randomLeft}px` }}
          onClick={() => addAnswer(item.name)}
        />
      )
    })
  }

  return <div className={s.collage}>{generateImages()}</div>
}
