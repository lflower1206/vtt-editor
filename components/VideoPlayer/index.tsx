import React, {
  createRef,
  FC,
  SyntheticEvent,
  useCallback,
  useEffect,
} from 'react'
import styled from 'styled-components'

const Video = styled.video`
  width: 100%;
`

interface IVideoPlayerProps {
  isPlay: boolean
  source: string

  onCurrentTimeUpdate: (currentTime: number) => void
}
const VideoPlayer: FC<IVideoPlayerProps> = (props) => {
  const videoRef = createRef<HTMLVideoElement>()
  const { isPlay, onCurrentTimeUpdate, source } = props

  const onTimeUpdate = useCallback(
    (event: SyntheticEvent<HTMLVideoElement, Event>) => {
      onCurrentTimeUpdate((event.target as HTMLVideoElement).currentTime)
    },
    [onCurrentTimeUpdate]
  )

  useEffect(() => {
    isPlay ? videoRef.current?.play() : videoRef.current?.pause()
  }, [isPlay])

  return source ? (
    <Video onTimeUpdate={onTimeUpdate} ref={videoRef} src={source} />
  ) : null
}

export default VideoPlayer
