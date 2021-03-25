import React, { FC } from 'react'
import styled from 'styled-components'

const Video = styled.video`
  width: 100%;
`

interface IVideoPlayerProps {
  source: string
}
const VideoPlayer: FC<IVideoPlayerProps> = (props) => {
  const { source } = props

  return source ? <Video src={source} /> : null
}

export default VideoPlayer
