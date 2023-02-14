
import styled from "styled-components"

const HomeContainer = styled.div`
background-image :url('https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
background-repeat:no-repeat;
background-size:cover;
background-position:center;
height:100vh;

`

const Homepara = styled.h1`
text-transform:uppercase;
margin:0 auto;
text-align:center;
padding-bottom:8rem;
font-weight:bold;
font-size:2rem;
font-weight:bold;
`
const HomeCover = styled.div`


`
const HomeMap = styled.div``


const HomeItems = () => {
  return (
    <HomeContainer>
      <HomeCover>
        <Homepara>Host your stuhome</Homepara>
      </HomeCover>
      <HomeMap>

      </HomeMap>

    </HomeContainer>
  )

}
export default HomeItems;  