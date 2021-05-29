import Box from "../components/Box";
import { Heading1, Link, UnorderdList } from "../components/Custom";

const Links = () => {
  return (
    <div>
      <Heading1>Some links...</Heading1>
      <Box>
        <UnorderdList>
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
        </UnorderdList>
      </Box>
    </div>
  );
};

export default Links;
