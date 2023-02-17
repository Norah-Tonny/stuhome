
import styled from "styled-components"

const Container = styled.div``

const Para = styled.p`
text-align:center;
padding-bottom:8rem;
font-weight:bold;
font-size:2rem;
font-weight:bold;;
`


const HomeContainer = styled.div`

`

const Homepara = styled.h1`
text-transform:uppercase;
margin:0 auto;
text-align:center;
padding-bottom:8rem;
margin-bottom:5em;
font-weight:bold;
font-size:2rem;
font-weight:bold;
`
const HomeCover = styled.div`
background-image :url('https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
background-repeat:no-repeat;
background-size:cover;
background-position:center;
height:50vh;


`
const HomeMap = styled.div``


const HomeItems = () => {
  return (
    <Container>
    <HomeContainer>
      <HomeCover>
        <Homepara>Host your hostel with stuhome</Homepara>
        </HomeCover>
        
      <HomeMap>
          <Para>Featured hostels</Para>
          
      </HomeMap>

    </HomeContainer>
    </Container>
  )

}
export default HomeItems;  