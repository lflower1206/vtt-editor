import React, { ChangeEvent, FC, useCallback, useState } from 'react'

import Block from '@/components/UI/Block'
import VideoPlayer from '@/components/VideoPlayer'
import Controls from '@/components/VideoPlayer/Controls'

interface IVttEditorProps {}

const VttEditor: FC<IVttEditorProps> = () => {
  const [source, setSource] = useState('')
  const [isPlay, setIsPlay] = useState(false)
  const [currentTime, setCurrentTime] = useState(0.0)

  const onPickUpFile = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader()

      reader.onload = (e) => {
        setSource(e.target!.result as string)
      }

      reader.readAsDataURL(event.target.files[0])
    }
  }, [])
  const onClickPlayPause = useCallback(setIsPlay, [])

  return (
    <div>
      <Block p={16} width={1 / 2}>
        <input type="file" accept="video/*" onChange={onPickUpFile} />
        <VideoPlayer
          isPlay={isPlay}
          onCurrentTimeUpdate={setCurrentTime}
          source={source}
        />
        <Controls
          currentTime={currentTime}
          isPlay={isPlay}
          onClickPlayPause={onClickPlayPause}
        />
      </Block>
    </div>
  )
}

export default VttEditor
