
import styled from "styled-components"

const HomeContainer = styled.div`
 background :uri('https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
backgroundRepeat: "no-repeat";
height:30vh;
padding:2em;
padding-bottom:3em;
`
const HomeHeading = styled.h1`
text-align:center;
font-size:3rem;
font-weight:bold;
`

const HomeCover = styled.div``
const Homepara = styled.p``
const HomeImg = styled.div`
background:url('');
`


const HomeItems = () => {
  return (
    <HomeContainer>
      <HomeImg>
      <Homepara>Host your stuhome</Homepara>
      </HomeImg>

    </HomeContainer>
  )

}
export default HomeItems;  