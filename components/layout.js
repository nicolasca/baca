import styled from "styled-components";
import NavBar from "./navbar";

const Container = styled.div`
  max-width: 1200px;
  padding: 0 1rem;
  margin: auto;
`;

export default function Layout({ children }) {
  return (
    <Container>
      <NavBar />
      <main>{children}</main>
    </Container>
  );
}
