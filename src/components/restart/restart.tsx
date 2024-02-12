import React, { useContext } from 'react'
import { GameContext } from '@/context/gameContext'
import s from './restart.module.scss'
import classNames from 'classnames'

export const Restart = () => {
  const { restart, level } = useContext(GameContext)
  
return (
    <div className={classNames(s.overlay, { [s.hide]: level != 10 })}>
      <button className={s.button} onClick={restart}>
        Давай зіграємо ще
      </button>
    </div>
  )
}
