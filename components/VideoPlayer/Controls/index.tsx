import React, { FC, useCallback } from 'react'

import CaptionTimestamp from '@/components/UI/CaptionTimestamp'

interface IControlsProps {
  currentTime: number
  isPlay: boolean
  onClickPlayPause: (isPlay: boolean) => void
}
const Controls: FC<IControlsProps> = (props) => {
  const { currentTime, isPlay, onClickPlayPause } = props

  const onClickPlay = useCallback(() => {
    onClickPlayPause(true)
  }, [onClickPlayPause])

  const onClickPause = useCallback(() => {
    onClickPlayPause(false)
  }, [onClickPlayPause])

  return (
    <div>
      {isPlay ? (
        <button onClick={onClickPause}>Pause</button>
      ) : (
        <button onClick={onClickPlay}>Play</button>
      )}
      <CaptionTimestamp time={currentTime} />
    </div>
  )
}

export default Controls
