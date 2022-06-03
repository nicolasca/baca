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
  "Cités Libres": ["Eelm", "Sibline", "Fized", "bedesta"],
  Menaces: [
    "droh-faroujl",
    "Bellocine-Ceneir",
    "Soldat-Danheran",
    "helrun-eserone",
    "meldiam",
    "xevran",
  ],
  Neash: ["Dleansh", "Jeash", "Nesh-Krenash", "Temosh-Neash"],
  "Morts alias les Faibles": [
    "Borul",
    "Hetski",
    "leovrin",
    "saskilen",
    "vladko",
    "zilna-eserone",
  ],
  Aventures: ["guerrier-orc-orange", "mogregh"],
};

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

const Fire = styled.div`
  font-size: 24px;
  filter: blur(0.02em);
  -webkit-filter: blur(0.02em);
  margin: 3em auto 0 auto;
  position: absolute;
  width: 10em;
  height: 12em;
  left: -80px;

  .particle {
    animation: rise 1s ease-in infinite;
    background-image: radial-gradient(#ff5000 20%, rgba(255, 80, 0, 0) 70%);
    border-radius: 50%;
    mix-blend-mode: screen;
    opacity: 0;
    position: absolute;
    bottom: 0;
    width: 5em;
    height: 5em;
  }
  .particle:nth-of-type(1) {
    animation-delay: 0.4330378706s;
    left: calc((100% - 5em) * 0);
  }
  .particle:nth-of-type(2) {
    animation-delay: 0.936715287s;
    left: calc((100% - 5em) * 0.02);
  }
  .particle:nth-of-type(3) {
    animation-delay: 0.0499379421s;
    left: calc((100% - 5em) * 0.04);
  }
  .particle:nth-of-type(4) {
    animation-delay: 0.9661442502s;
    left: calc((100% - 5em) * 0.06);
  }
  .particle:nth-of-type(5) {
    animation-delay: 0.6124459319s;
    left: calc((100% - 5em) * 0.08);
  }
  .particle:nth-of-type(6) {
    animation-delay: 0.2577282781s;
    left: calc((100% - 5em) * 0.1);
  }
  .particle:nth-of-type(7) {
    animation-delay: 0.4892823241s;
    left: calc((100% - 5em) * 0.12);
  }
  .particle:nth-of-type(8) {
    animation-delay: 0.4927762497s;
    left: calc((100% - 5em) * 0.14);
  }
  .particle:nth-of-type(9) {
    animation-delay: 0.8392434768s;
    left: calc((100% - 5em) * 0.16);
  }
  .particle:nth-of-type(10) {
    animation-delay: 0.0702048524s;
    left: calc((100% - 5em) * 0.18);
  }
  .particle:nth-of-type(11) {
    animation-delay: 0.651591271s;
    left: calc((100% - 5em) * 0.2);
  }
  .particle:nth-of-type(12) {
    animation-delay: 0.2565710971s;
    left: calc((100% - 5em) * 0.22);
  }
  .particle:nth-of-type(13) {
    animation-delay: 0.5153872323s;
    left: calc((100% - 5em) * 0.24);
  }
  .particle:nth-of-type(14) {
    animation-delay: 0.5814912102s;
    left: calc((100% - 5em) * 0.26);
  }
  .particle:nth-of-type(15) {
    animation-delay: 0.750849989s;
    left: calc((100% - 5em) * 0.28);
  }
  .particle:nth-of-type(16) {
    animation-delay: 0.3326950785s;
    left: calc((100% - 5em) * 0.3);
  }
  .particle:nth-of-type(17) {
    animation-delay: 0.3161275352s;
    left: calc((100% - 5em) * 0.32);
  }
  .particle:nth-of-type(18) {
    animation-delay: 0.0819561507s;
    left: calc((100% - 5em) * 0.34);
  }
  .particle:nth-of-type(19) {
    animation-delay: 0.6723623252s;
    left: calc((100% - 5em) * 0.36);
  }
  .particle:nth-of-type(20) {
    animation-delay: 0.8484513021s;
    left: calc((100% - 5em) * 0.38);
  }
  .particle:nth-of-type(21) {
    animation-delay: 0.2433206638s;
    left: calc((100% - 5em) * 0.4);
  }
  .particle:nth-of-type(22) {
    animation-delay: 0.4777546462s;
    left: calc((100% - 5em) * 0.42);
  }
  .particle:nth-of-type(23) {
    animation-delay: 0.51931886s;
    left: calc((100% - 5em) * 0.44);
  }
  .particle:nth-of-type(24) {
    animation-delay: 0.8463426733s;
    left: calc((100% - 5em) * 0.46);
  }
  .particle:nth-of-type(25) {
    animation-delay: 0.0772810102s;
    left: calc((100% - 5em) * 0.48);
  }
  .particle:nth-of-type(26) {
    animation-delay: 0.6961973445s;
    left: calc((100% - 5em) * 0.5);
  }
  .particle:nth-of-type(27) {
    animation-delay: 0.2314198382s;
    left: calc((100% - 5em) * 0.52);
  }
  .particle:nth-of-type(28) {
    animation-delay: 0.88896322s;
    left: calc((100% - 5em) * 0.54);
  }
  .particle:nth-of-type(29) {
    animation-delay: 0.4037554627s;
    left: calc((100% - 5em) * 0.56);
  }
  .particle:nth-of-type(30) {
    animation-delay: 0.143408742s;
    left: calc((100% - 5em) * 0.58);
  }
  .particle:nth-of-type(31) {
    animation-delay: 0.0354588036s;
    left: calc((100% - 5em) * 0.6);
  }
  .particle:nth-of-type(32) {
    animation-delay: 0.8087594908s;
    left: calc((100% - 5em) * 0.62);
  }
  .particle:nth-of-type(33) {
    animation-delay: 0.9305992509s;
    left: calc((100% - 5em) * 0.64);
  }
  .particle:nth-of-type(34) {
    animation-delay: 0.282999324s;
    left: calc((100% - 5em) * 0.66);
  }
  .particle:nth-of-type(35) {
    animation-delay: 0.8347646644s;
    left: calc((100% - 5em) * 0.68);
  }
  .particle:nth-of-type(36) {
    animation-delay: 0.7236087772s;
    left: calc((100% - 5em) * 0.7);
  }
  .particle:nth-of-type(37) {
    animation-delay: 0.1814446203s;
    left: calc((100% - 5em) * 0.72);
  }
  .particle:nth-of-type(38) {
    animation-delay: 0.1627197161s;
    left: calc((100% - 5em) * 0.74);
  }
  .particle:nth-of-type(39) {
    animation-delay: 0.0421648961s;
    left: calc((100% - 5em) * 0.76);
  }
  .particle:nth-of-type(40) {
    animation-delay: 0.4165725599s;
    left: calc((100% - 5em) * 0.78);
  }
  .particle:nth-of-type(41) {
    animation-delay: 0.704707688s;
    left: calc((100% - 5em) * 0.8);
  }
  .particle:nth-of-type(42) {
    animation-delay: 0.7421561438s;
    left: calc((100% - 5em) * 0.82);
  }
  .particle:nth-of-type(43) {
    animation-delay: 0.8029532269s;
    left: calc((100% - 5em) * 0.84);
  }
  .particle:nth-of-type(44) {
    animation-delay: 0.3285548928s;
    left: calc((100% - 5em) * 0.86);
  }
  .particle:nth-of-type(45) {
    animation-delay: 0.0754117753s;
    left: calc((100% - 5em) * 0.88);
  }
  .particle:nth-of-type(46) {
    animation-delay: 0.2962036026s;
    left: calc((100% - 5em) * 0.9);
  }
  .particle:nth-of-type(47) {
    animation-delay: 0.3793457921s;
    left: calc((100% - 5em) * 0.92);
  }
  .particle:nth-of-type(48) {
    animation-delay: 0.6954646205s;
    left: calc((100% - 5em) * 0.94);
  }
  .particle:nth-of-type(49) {
    animation-delay: 0.5179643073s;
    left: calc((100% - 5em) * 0.96);
  }
  .particle:nth-of-type(50) {
    animation-delay: 0.1362623178s;
    left: calc((100% - 5em) * 0.98);
  }

  @keyframes rise {
    from {
      opacity: 0;
      transform: translateY(0) scale(1);
    }
    25% {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translateY(-10em) scale(0);
    }
  }
`;

export default function CardsComponent() {
  const images = Object.keys(imagesByGroup).map((key, i) => {
    return (
      <Group key={key + i}>
        <h2>{key}</h2>
        <Cards key={i + key}>
          {imagesByGroup[key].map((name) => {
            const src = "/images/" + name + ".jpg";
            return (
              <>
                {name == "harmony" ? (
                  <Fire className="fire" key={"fire"}>
                    {[...Array(50)].map((e, i) => (
                      <div key={i} className="particle"></div>
                    ))}
                  </Fire>
                ) : null}
                <Image
                  key={name}
                  src={src}
                  alt={name}
                  width={300}
                  height={417}
                />
              </>
            );
          })}
        </Cards>
      </Group>
    );
  });

  return <>{images}</>;
}
