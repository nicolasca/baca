import Image from "next/image";
import Link from "next/link";
import styledComponents from "styled-components";
import Layout from "../../components/layout";

const AtoziaWrapper = styledComponents.div`
`;

const Card = styledComponents.div`
    display: flex;
    flex-direction: column;
    width: 400px;
`;

export default function Atozia() {
  return (
    <Layout>
      <AtoziaWrapper>
        <Card>
          <Link href="atozia/history">Histoire</Link>
        </Card>
      </AtoziaWrapper>
    </Layout>
  );
}
