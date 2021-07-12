import Box from "../components/Box";
import { Heading1 } from "../components/Heading";
import List from "../components/List";
import Link from "../components/Link";

const Links = () => {
  return (
    <div>
      <Heading1>Some links...</Heading1>
      <Box>
        <List>
          <li>
            <Link href="http://github.com/bastianhussi/" target="_blank">
              Github
            </Link>
          </li>
          <li>
            <Link href="http://gitlab.com/bastian_h/" target="_blank">
              Gitlab
            </Link>
          </li>
        </List>
      </Box>
    </div>
  );
};

export default Links;
