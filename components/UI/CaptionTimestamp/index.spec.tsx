import React from 'react'
import { render } from '@testing-library/react'

import CaptionTimestamp from './'

describe('CaptionTimestamp', () => {
  it('should render caption timestamp by given seconds', () => {
    const com = render(<CaptionTimestamp time={1.1} />)

    expect(com.getByText('00:00:01.100')).toBeInTheDocument()
  })
})
