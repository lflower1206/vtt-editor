import React, { FC, useCallback } from 'react'

interface IControlsProps {
  isPlay: boolean
  onClickPlayPause: (isPlay: boolean) => void
}
const Controls: FC<IControlsProps> = (props) => {
  const { isPlay, onClickPlayPause } = props

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
    </div>
  )
}

export default Controls
