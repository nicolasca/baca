import Image from "next/image";
import styled from "styled-components";

const imagesByGroup = {
  "Notre groupe": [
    "harmony",
    "nedrac",
    "theodran",
    "kriel",
    "Magdask",
    "Blusk",
    "Djekal",
    "karle",
    "Lerianne",
    "Dyzruna-Eserone",
  ],
  Belloreks: ["Hek-Alzir", "Azad"],
  "La Grande Expédition": ["Jeron", "Sven", "Hedda", "Ival"],
  "Cités Libres": ["Eelm", "Sibline", "Fized"],
  Menaces: ["Bellocine-Ceneir", "Soldat-Danheran"],
  Neash: ["Dleansh", "Jeash", "Nesh-Krenash", "Temosh-Neash"],
  "Morts alias les Faibles": ["Borul"],
};

const Cards = styled.div`
  display: flex;
  flex-flow: wrap;
  gap: 4rem;
`;

const Group = styled.div`
  display: block;
  margin-bottom: 3rem;
`;

export default function CardsComponent() {
  const images = Object.keys(imagesByGroup).map((key) => {
    return (
      <Group key={key}>
        <h2>{key}</h2>
        <Cards>
          {imagesByGroup[key].map((name) => {
            const src = "/images/" + name + ".jpg";
            return (
              <Image key={name} src={src} alt={name} width={300} height={417} />
            );
          })}
        </Cards>
      </Group>
    );
  });

  return <>{images}</>;
}
