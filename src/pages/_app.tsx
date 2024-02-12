import type { AppProps } from 'next/app'

import '@/styles/reset.scss'
import '@/styles/globals.scss'
import { GameContextProvider } from '@/context/gameContext'
import { AudioPlayer } from '@/components/audioPlayer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <GameContextProvider>
        <Component {...pageProps} />
      </GameContextProvider>
      <AudioPlayer />
    </div>
  )
}
