import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const Items = styled.ul`
  display: flex;
  margin-block: 0;
  padding-inline: 0;
  column-gap: 2rem;
`;

const Item = styled.li`
  list-style-type: none;

  a.active {
    border-bottom: 1px dashed black;
  }
`;

const NavBar = () => {
  const router = useRouter();
  return (
    <Items>
      <Item>
        <Link href="/">
          <a className={router.pathname == "/" ? "active" : ""}>Les cartes</a>
        </Link>
      </Item>
      <Item>
        <Link href="/history">
          <a className={router.pathname == "/history" ? "active" : ""}>
            L&lsquo;histoire
          </a>
        </Link>
      </Item>
    </Items>
  );
};

export default NavBar;
