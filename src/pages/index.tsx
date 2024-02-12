//@ts-nocheck
import { Status } from '@/components/status'
import { Family } from '@/components/family'
import { Collage } from '@/components/collage'
import { useContext } from 'react'
import { GameContext, game } from '@/context/gameContext'

import s from './home.module.scss'
import { Restart } from '@/components/restart/restart'

export default function Home() {
  const { level } = useContext(GameContext)

  return (
    <main>
      <div>
        <h2 className={s.title}>{game[level].question}</h2>
        <Status />
        <Collage />
        <Family />
      </div>
      <Restart />
    </main>
  )
}
