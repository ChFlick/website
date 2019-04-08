import React from 'react'
import PropTypes from 'prop-types'
import Content from '../elements/Content'

const Contact = ({ children }) => (
  <Content>
    {children}
  </Content>
)

export default Contact

Contact.propTypes = {
  children: PropTypes.node.isRequired,
}
