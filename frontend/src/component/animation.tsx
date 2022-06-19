import { useEffect } from 'react'
import { AnimationEvent } from 'react'
import '../assets/style/animation.scss'
import { Header } from './header'

export const Animation = () => {
  const handleAnimationEvent = (e: AnimationEvent<HTMLDivElement>) => {
    return <Header />
  }

  return (
    <div onAnimationEnd={handleAnimationEvent}>
      <ul className="leaf">
        <li></li>
      </ul>
    </div>
  )
}
