import Image from "next/image";
import styledComponents from "styled-components";

const cards = [
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
];

const CardsList = styledComponents.div`
    display: flex;
    flex-flow: wrap;
    gap: 2rem;
`;

const Card = styledComponents.div`
    &:hover {
        cursor: pointer;
    }
`;

export default function ChooseDeck() {
  const clickOnCard = (id) => {
    console.log("I click on card ", id);
  };

  return (
    <CardsList>
      {cards.map((name) => {
        const src = "/images/" + name + ".jpg";

        return (
          <Card key={name} onClick={clickOnCard}>
            <Image src={src} alt={name} width={150} height={208} />
          </Card>
        );
      })}
    </CardsList>
  );
}
