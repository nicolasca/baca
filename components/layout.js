import styled from "styled-components";
import NavBar from "./navbar";

const Container = styled.div`
  max-width: 1200px;
  padding: 0 1rem;
  margin: 1rem auto 6rem;
`;

export default function Layout({ children }) {
  return (
    <Container>
      <NavBar />
      <main>{children}</main>
    </Container>
  );
}
