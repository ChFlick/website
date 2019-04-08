import React from 'react'
import PropTypes from 'prop-types'
import Content from '../elements/Content'
import Inner from '../elements/Inner'

const Projects = ({ children }) => (
  <Content>
    <Inner>{children}</Inner>
  </Content>
)

export default Projects

Projects.propTypes = {
  children: PropTypes.node.isRequired,
}
