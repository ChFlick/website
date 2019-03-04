import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { colors } from '../../tailwind'
import { Divider } from '../elements/Dividers'
import Content from '../elements/Content'
import { UpDown, UpDownWide } from '../styles/animations'

const Wrapper = styled.div`
  ${tw`w-full xl:w-2/3`};
`

const Me = ({ children, offset }) => (
  <Content speed={0.4} offset={offset}>
    <Wrapper>{children}</Wrapper>
  </Content>
)

export default Me

Me.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
