import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const NavbarWrapper = styled.nav`
  height: 60px;
  display: flex;
  align-items: center;
`

const Items = styled.ul`
  display: flex;
  margin-block: 0;
  padding-inline: 0;
  column-gap: 2rem;
`;

const Item = styled.li`
  list-style-type: none;

  a.active {
    border-bottom: 1px dashed #09b85e;
  }
`;

const NavBar = () => {
  const router = useRouter();
  return (
    <NavbarWrapper>

      <Items>
        <Item>
          <Link href="/">
            <a className={router.pathname == "/" ? "active" : ""}>Les cartes</a>
          </Link>
        </Item>
        <Item>
          <Link href="/persos">
            <a className={router.pathname == "/persos" ? "active" : ""}>
              Les persos
            </a>
          </Link>
        </Item>
        <Item>
          <Link href="/histoires">
            <a className={router.pathname.includes("/histoires") ? "active" : ""}>
              Les histoires
            </a>
          </Link>
        </Item>
        <Item>
          <Link href="/sultanat">
            <a className={router.pathname == "/sultanat" ? "active" : ""}>
              Le Sultanat
            </a>
          </Link>
        </Item>
        <Item>
          <Link href="/map">
            <a className={router.pathname == "/map" ? "active" : ""}>
              La carte
            </a>
          </Link>
        </Item>
      </Items>
    </NavbarWrapper>

  );
};

export default NavBar;
