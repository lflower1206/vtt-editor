import React, { FC } from 'react'
import styled from 'styled-components'

const CurrentTime = styled.span`
  color: #898989;
  padding: 4px;
  border: 1px solid #efefef;
  border-radius: 4px;
`

interface ICaptionTimestampProps {
  time: number
}
const CaptionTimestamp: FC<ICaptionTimestampProps> = (props) => {
  const { time } = props
  return <CurrentTime>{time}</CurrentTime>
}

export default CaptionTimestamp
