import HomeItems from "../components/HomeItems";
import styled from "styled-components";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";


const HomeContainer = styled.div`
`

const Home = () => {

    return (
      < HomeContainer>
  
        <Nav />
        <HomeItems />
      <Newsletter/>
        <Footer />
        </ HomeContainer>
    )

}
export default Home;

