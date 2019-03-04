import React from 'react'
import PropTypes from 'prop-types'
import { Divider } from '../elements/Dividers'
import Content from '../elements/Content'
import Inner from '../elements/Inner'
import { UpDown, UpDownWide } from '../styles/animations'
import { colors } from '../../tailwind'
import { Parallax, ParallaxLayer } from 'react-spring/addons.cjs'

const Projects = ({ children, offset }) => (
  <>
    <Divider
      bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
      speed={0.1}
      offset={offset}
      factor={1}
    />
    <Content speed={0.4} offset={offset} factor={1}>
      <Inner>{children}</Inner>
    </Content>
  </>
)

export default Projects

Projects.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
