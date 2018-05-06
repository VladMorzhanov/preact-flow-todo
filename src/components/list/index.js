import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: aqua;
  margin-top: 100px;
`

export const List = ({rootStore}) => (
  <Wrapper>
    {rootStore.search}
  </Wrapper>
)
