import React, { FC, useCallback } from 'react'
import styled from 'styled-components'

const CurrentTime = styled.span`
  color: #898989;
  padding: 4px;
  border: 1px solid #efefef;
  border-radius: 4px;
`

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
      <CurrentTime>{currentTime}</CurrentTime>
    </div>
  )
}

export default Controls
