import React from 'react'
import PropTypes from 'prop-types'
import Content from '../elements/Content'
import Inner from '../elements/Inner'

const About = ({ children }) => (
  <>
    <Content>
      <Inner>{children}</Inner>
    </Content>
  </>
)

export default About

About.propTypes = {
  children: PropTypes.node.isRequired,
}
