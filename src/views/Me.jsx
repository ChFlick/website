import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { colors } from '../../tailwind'
import Content from '../elements/Content'

const Wrapper = styled.div`
  ${tw`w-full xl:w-2/3`};
`

const Me = ({ children }) => (
  <Content>
    <Wrapper>{children}</Wrapper>
  </Content>
)

export default Me

Me.propTypes = {
  children: PropTypes.node.isRequired,
}
