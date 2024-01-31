// Create a component with 2 links in the page going to /histoire-monde and /domaines-des-halns

import Head from "next/head";
import Link from "next/link";

import styles from "../../styles/Home.module.css";

import styled from "styled-components";
import Layout from "../../components/layout";

// Create a styled Container having the two links next to each other
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

`;

const Item = styled.p`
  list-style-type: none;
  margin-right: 3rem;

  &:hover {
    border-bottom: 1px dashed #09b85e;
  }
`;


export default function Histories() {
  return (
    <Layout>
      <h3>Père Karle raconte des histoires</h3>

      <Container className={styles.container}>
        <Head>
          <title>Les histoires du monde</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>


        <Item>
          <Link href="/histoires/guerre-runn">
            <a> La Guerre de Runn</a>
          </Link>
        </Item>

        <Item>
          <Link href="/histoires/domaine-halns">
            <a> La Domaine des Halns</a>
          </Link>
        </Item>


        {/* <footer className={styles.footer}>Powered by Atozia Familly</footer> */}
      </Container>
    </Layout>


  )
}
