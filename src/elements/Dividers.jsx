import styled from 'styled-components'
import tw from 'tailwind.macro'
import { ParallaxLayer } from 'react-spring/addons.cjs'

export const Divider = styled(ParallaxLayer)`
  ${tw`absolute w-full h-full`};
  background: ${props => props.bg};
  svg {
    fill: ${props => props.fill};
  }
`