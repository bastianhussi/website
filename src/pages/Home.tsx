import Box from "../components/Box";
import { Heading1, Heading2 } from "../components/Custom";

const Home = () => {
  return (
    <div>
      <Heading1>Hello, world!</Heading1>
      <Box>
      <Heading2 style={{color: "blue"}}>Bastian Hussi</Heading2>
      </Box>
    </div>
  );
};

export default Home;
