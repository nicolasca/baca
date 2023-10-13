import Link from "next/link";
import CardsComponent from "../components/cards.component";
import Layout from "../components/layout";

export default function Cards() {
  return (
    <Layout>
      <h1>Les cartes</h1>
      <CardsComponent />
    </Layout>
  );
}
