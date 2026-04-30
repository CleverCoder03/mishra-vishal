"use client"
import {ReactLenis} from "lenis/react"

const lenisOptions = {
  lerp: 0.08,
  smoothWheel: true,
}

const LenisScrollProvider = ({children}) => {
  return (
    <ReactLenis root options={lenisOptions}>
        {children}
    </ReactLenis>
  )
}

export default LenisScrollProvider
