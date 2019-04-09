import styled from 'styled-components'
import tw from 'tailwind.macro'

const Content = styled.div`
  min-height: ${props => props.full ? '100%;' : '100vh;'}
  ${tw`p-6 md:p-12 lg:p-24 justify-center items-center flex z-50`};
`

export default Content
