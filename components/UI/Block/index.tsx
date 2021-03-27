import styled, { StyledComponent } from 'styled-components'
import { layout, space, PaddingProps, WidthProps } from 'styled-system'

const Block: StyledComponent<'div', {}, PaddingProps & WidthProps> = styled.div`
  border: 1px solid #efefef;
  border-radius: 4px;
  ${layout}
  ${space}
`

export default Block
