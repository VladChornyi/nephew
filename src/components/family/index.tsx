import React, { useContext } from 'react'
import Image from 'next/image'

import nina from '/public/game/nina.png'
import ivan from '/public/game/ivan.png'
import taja from '/public/game/taja.png'
import sasha from '/public/game/sasha.png'
import vlad from '/public/game/vlad.png'
import zhenya from '/public/game/zhenya.png'
import tonya from '/public/game/tonya.png'
import platon from '/public/game/platon.png'
import valya from '/public/game/valya.png'
import s from './family.module.scss'
import classNames from 'classnames'
import { GameContext } from '@/context/gameContext'

export const Family = () => {
  const { state } = useContext(GameContext)

  return (
    <div className={s.family}>
      <Image className={classNames(s.tonya, { [s.visible]: state.tonya })} src={tonya} alt='tonya' />
      <Image className={classNames(s.nina, { [s.visible]: state.nina })} src={nina} alt='nina' />
      <Image className={classNames(s.sasha, { [s.visible]: state.sasha })} src={sasha} alt='sasha' />
      <Image className={classNames(s.ivan, { [s.visible]: state.ivan })} src={ivan} alt='ivan' />
      <Image className={classNames(s.taja, { [s.visible]: state.taja })} src={taja} alt='taja' />
      <Image className={classNames(s.vlad, { [s.visible]: state.vlad })} src={vlad} alt='vlad' />
      <Image className={classNames(s.zhenya, { [s.visible]: state.zhenya })} src={zhenya} alt='zhenya' />
      <Image className={classNames(s.platon, { [s.visible]: state.platon })} src={platon} alt='platon' />
      <Image className={classNames(s.valya, { [s.visible]: state.valya })} src={valya} alt='valya' />
    </div>
  )
}
