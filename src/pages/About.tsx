import Box from "../components/Box";
import { Heading1, Heading2 } from "../components/Heading";
import List from "../components/List";

const About = () => {
  return (
    <div>
      <Heading1>About me</Heading1>
      <Heading2>What I do</Heading2>
      <Box>
        <List>
          <li>JavaScript & TypeScript</li>
          <li>React.js & React Native</li>
          <li>Golang</li>
          <li>Docker & k8s</li>
          <li>MySQL & PostgreSQL</li>
          <li>Linux</li>
        </List>
      </Box>
      <Heading2>Tech I like</Heading2>
      <Box>
        <List>
          <li>GNU/Linux</li>
          <li>Emacs</li>
          <li>Vim Keybindings</li>
        </List>
      </Box>
    </div>
  );
};

export default About;
