import styled from 'styled-components'
import tw from 'tailwind.macro'
import { rotateAnimation } from '../styles/animations'
import heptagon from '../images/heptagon.svg'

export const Title = styled.h1`
  ${tw`text-4xl lg:text-4xl font-serif text-white mb-8 tracking-wide relative inline-block`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  &:before {
    content: '';
    width: 40px;
    height: 40px;
    background: url(${heptagon});
    position: absolute;
    background-size: 40px;
    ${rotateAnimation('8s')};
    left: -60px;
    top: 5px;
  }
`

export const BigTitle = styled.h1`
  ${tw`text-5xl lg:text-6xl font-titleSans mb-6 mt-0`};
  color: #EDF5E1;
`

export const Subtitle = styled.p`
  ${tw`text-3xl lg:text-4xl font-sans mt-8 xxl:w-3/4`};
  color: #EDF5E1;
`

export const SmallTitle = styled.p`
  ${tw`text-s lg:text-m font-sans mb-0`}
  color: #379683;
`