import { StatusEnum } from '@/types'
import type { FC, ReactNode } from 'react'
import { createContext, useState } from 'react'

export const game = {
  1: {
    question: 'Знайди Ваню',
    answer: 'ivan',
  },
  2: {
    question: 'Знайди Маму',
    answer: 'taja',
  },
  3: {
    question: 'Знайди Тата',
    answer: 'sasha',
  },
  4: {
    question: 'Знайди Платошку',
    answer: 'platon',
  },
  5: {
    question: 'Знайди бабусю Ніну',
    answer: 'nina',
  },
  6: {
    question: 'Знайди Женю',
    answer: 'zhenya',
  },
  7: {
    question: 'Знайди бабусю Тоню',
    answer: 'tonya',
  },
  8: {
    question: 'Знайди Владіка',
    answer: 'vlad',
  },
  9: {
    question: 'Знайди бабусю Валю',
    answer: 'valya',
  },
  10: {},
}
interface IContext {
  addAnswer: (answwer: string) => void
  restart: () => void
  level: number
  state: { [key: string]: string }
  status: StatusEnum
}

export const GameContext = createContext<IContext>({
  addAnswer: () => {},
  restart: () => {},
  level: 1,
  state: {},
  status: StatusEnum.Normal,
})

export const GameContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState({})
  const [status, setStatus] = useState<StatusEnum>(StatusEnum.Normal)
  const [level, setLevel] = useState<number>(1)

  const addAnswer = (answer: string): void => {
    // @ts-ignore
    if (game[level].answer === answer) {
      setLevel((prev) => prev + 1)
      setStatus((prev) => {
        return prev === StatusEnum.VeryHappy ? StatusEnum.VeryHappy : prev + 1
      })
      setState((prev) => ({ ...prev, [answer]: answer }))
    } else {
      setStatus((prev) => {
        return prev === StatusEnum.Cry ? StatusEnum.Cry : prev - 1
      })
    }
  }

  const restart = () => {
    setState({})
    setStatus(StatusEnum.Normal)
    setLevel(1)
  }

  return <GameContext.Provider value={{ addAnswer, level, status, state, restart }}>{children}</GameContext.Provider>
}
