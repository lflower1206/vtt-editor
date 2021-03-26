import React, { createRef, FC, useEffect } from 'react'
import styled from 'styled-components'

const Video = styled.video`
  width: 100%;
`

interface IVideoPlayerProps {
  isPlay: boolean
  source: string
}
const VideoPlayer: FC<IVideoPlayerProps> = (props) => {
  const videoRef = createRef<HTMLVideoElement>()
  const { isPlay, source } = props

  useEffect(() => {
    isPlay ? videoRef.current?.play() : videoRef.current?.pause()
  }, [isPlay])

  return source ? <Video ref={videoRef} src={source} /> : null
}

export default VideoPlayer
