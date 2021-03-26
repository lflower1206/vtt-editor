import React, { FC } from 'react'
import styled from 'styled-components'

const CurrentTime = styled.span`
  color: #898989;
  padding: 4px;
  border: 1px solid #efefef;
  border-radius: 4px;
`
const formatTimestamp = (seconds: number): string => {
  return new Date(seconds * 1000).toISOString().slice(11, 23)
}

interface ICaptionTimestampProps {
  time: number
}
const CaptionTimestamp: FC<ICaptionTimestampProps> = (props) => {
  const { time } = props
  const timestamp = formatTimestamp(time)

  return <CurrentTime>{timestamp}</CurrentTime>
}

export default CaptionTimestamp
