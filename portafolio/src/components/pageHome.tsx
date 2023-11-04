import Navbar from "./navbar";
import { H1 } from "./styles/styledNavbr";
import { ContainerPageHome } from "./styles/styledPageHome";

const Home = () => {
  return (
    <ContainerPageHome>
      <Navbar/>
      <H1 className="main">Esta es la vista principal</H1>
    </ContainerPageHome>
  );
}

export default Home;