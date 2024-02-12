import React, { useContext } from 'react'
import type { StaticImageData } from 'next/image'
import Image from 'next/image'

import { StatusEnum } from '@/types'

import veryhappy from '/public/veryhappy.png'
import happy from '/public/happy.png'
import normal from '/public/normal.png'
import sad from '/public/sad.png'
import cry from '/public/cry.png'

import s from './status.module.scss'
import { GameContext } from '@/context/gameContext'

export const Status = () => {
  const { status } = useContext(GameContext)
  const image = statusMapper(status)
  
return (
    <div className={s.tile}>
      <Image className={s.img} src={image} alt='Ivan' />
    </div>
  )
}

function statusMapper(status: StatusEnum): StaticImageData {
  switch (status) {
    case StatusEnum.Cry:
      return cry
    case StatusEnum.Happy:
      return happy
    case StatusEnum.Normal:
      return normal
    case StatusEnum.VeryHappy:
      return veryhappy
    case StatusEnum.Sad:
      return sad
    default:
      throw new Error('Unexpected satus got')
  }
}
