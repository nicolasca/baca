import styled from "styled-components";
import { Card } from "./card.component";

const imagesByGroup = {
  "Notre groupe": [
    { name: "harmony", isDead: false },
    { name: "nedrac", isDead: false },
    { name: "theodran", isDead: false },
    { name: "kriel", isDead: false },
    { name: "Magdask", isDead: false },
    { name: "Blusk", isDead: false },
    { name: "Djekal", isDead: false },
    { name: "karle", isDead: false },
    { name: "Lerianne", isDead: true },
    { name: "Dyzruna-Eserone", isDead: true },
    { name: "Borul", isDead: true },
    { name: "hetski", isDead: true },
    { name: "leovrin", isDead: true },
    { name: "vladko", isDead: true },
  ],
  Belloreks: [
    { name: "Hek-Alzir", isDead: false },
    { name: "Azad", isDead: true },
  ],
  "La Grande Expédition": [
    { name: "Jeron", isDead: false },
    { name: "Sven", isDead: false },
    { name: "Hedda", isDead: false },
    { name: "Ival", isDead: false },
  ],
  "Cités Libres": [
    { name: "Eelm", isDead: false },
    { name: "Sibline", isDead: false },
    { name: "Fized", isDead: false },
    { name: "bedesta", isDead: false },
  ],
  Atozia: [
    { name: "helrun-eserone", isDead: false },
    { name: "meldiam", isDead: false },
    { name: "xevran", isDead: false },
    { name: "saskilen", isDead: true },
    { name: "zilna-eserone", isDead: true },
  ],
  Danheran: [
    { name: "droh-faroujl", isDead: false },
    { name: "Bellocine-Ceneir", isDead: false },
    { name: "Soldat-Danheran", isDead: false },
  ],
  Neash: [
    { name: "Dleansh", isDead: false },
    { name: "Jeash", isDead: false },
    { name: "Nesh-Krenash", isDead: false },
    { name: "Temosh-Neash", isDead: false },
  ],
  Aventures: [
    { name: "guerrier-orc-orange", isDead: false },
    { name: "mogregh", isDead: false },
  ],
}


const Cards = styled.div`
  display: flex;
  flex-flow: wrap;
  gap: 4rem;
`;

const Group = styled.div`
  display: block;
  margin-bottom: 3rem;
  position: relative;
`;


export default function CardsComponent() {
  const images = Object.keys(imagesByGroup).map((key, i) => {
    return (
      <Group key={key + i}>
        <h2>{key}</h2>
        <Cards key={i + key}>
          {imagesByGroup[key].map((card) => {
            const src = "/images/" + card.name + ".jpg";
            return (
              <Card key={card.name} card={card} src={src} />
            );
          })}
        </Cards>
      </Group>
    );
  });

  return <>{images}</>;
}
