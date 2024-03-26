import {styled} from "styled-components"

const Home = () => {
  return (
    <StyledDiv>
      This is an example of the <b>HOME</b> page
    </StyledDiv>
  )
}

const StyledDiv = styled('div')({
  color: 'pink',
  padding: 100,
})


export default Home
