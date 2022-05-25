import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
`;

export default function Layout({ children }) {
  return <Container>{children}</Container>;
}
