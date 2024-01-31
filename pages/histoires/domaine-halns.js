import styledComponents from "styled-components";
import Layout from "../../components/layout";
import Head from "next/head";

const HistoryWrapper = styledComponents.div`
    max-width: 80ch;
  padding: 2rem 0;

`;

const Content = styledComponents.div`
`;

const SpecialWords = styledComponents.span`
    font-weight: bold;
    color: #F645A0
`;

const QuoteContainer = styledComponents.p`
  margin: 2rem;
  display: block;
  border-left: 3px solid #09b85e;
  padding-left: 1rem;
  font-style: italic;
`;

export default function GuerreRunn() {
  return (
    <Layout>
      <Head>
        <title>Le Domaine des Halns</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HistoryWrapper>
        <h1>La Domaine des Halns, par Karle</h1>
        <Content>
          <p>
            « On parle d’un temps lointain pour lequel j’ai peu d’informations précises.
            Il est dit que dans le monde Jol existait un royaume connu de tous à travers
            les mondes pour sa beauté et sa prospérité appelé <SpecialWords>Domaine des Halns</SpecialWords>. Dans ce
            Domaine vivaient une race développée et forte dont l’influence à travers les mondes
            ferait pâlir même les plus prétentieux des Atoziens (en jetant un coup d’œil à l’atozienne).
            A travers son évolution, cette race se sépara en plusieurs peuples vivant toujours en harmonie
            ensemble. Une séparation due aux lieux différents dans lesquelles elles évoluaient et d’autres
            paramètres que j’ignore.
          </p>

          <p>
            Je ne sais pas temporellement quand cela eut lieu exactement, mais un conflit émergea entre
            deux des peuples de cette race. Les <SpecialWords>Ascaruns</SpecialWords>, qui vivaient dans les profondeurs de la terre
            du Domaine, et les <SpecialWords>Yldrynyns</SpecialWords>, qui occupait une grande partie des terres à la surface du Domaine
            des Halns et celle le plus en lien avec le reste du monde. Un conflit qui perdura pendant une longue
            période. Les Yldrynyn semblaient, de ce qu’on a interprété dans les textes, avoir pris l’avantage dans
            ce conflit mais il est dit que les <SpecialWords>Ascaruns</SpecialWords> franchirent un cap dans ce qui était acceptable et commirent
            ce qui est appelé, dans un chant ancien traditionnel Odrianien, « l’impardonnable ». La réponse des Yldrynyn
            fut, parait-il, très forte. Ils furent rejoint par les autres factions du Domaine des Halns et les <SpecialWords>Ascaruns</SpecialWords>,
            traqués et au bord de l’extermination, durent s’exiler vers d’autres contrées. La guerre prit fin pour un temps
            mais les <SpecialWords>Yldrynyns</SpecialWords> connurent alors un changement profond en leur sein
          </p>
          <p>
            Progressivement, cette faction se transforma et devint ce qu’on appel l’Ascendance Tenh,
            une puissance toujours aussi influente dans les mondes mais dont les relations avec les
            autres races et même avec les peuples encore présente dans le Domaine des Halns se dégradèrent.
            L’Ascendance renonça par ailleurs, aux idées qui guidaient la Faction au sein des monde à laquelle
            ils appartenaient. Ils s’isolèrent et finirent par rentrer en conflit avec d’autres races et même
            certains de leurs peuples frères.
          </p>
          <p>
            On ne connaît pas la raison exacte, mais l’Ascendance Tenh finit par quitter le Domaine des Halns
            il y a un peu plus d’un millénaire de cela, 11 siècles disent certains. On pense que cela eut lieu
            suite à une guerre civile en son sein car elle laissa derrière elle les corps de nombreux <SpecialWords>Yldrynyns</SpecialWords>
            et un grand nombre de destruction. L’ascendance quitta le monde de Jol et ce qu’elle possédait dans
            le monde de Hir et trouva, d’après ce qui est raconté, un lieu d’exil dans le monde de Sen. Elle laissa
            derrière elle les quatre Renydj, mot que l’on a traduit depuis par « refuge ». Quatre lieux sacrés
            <SpecialWords> Yldrynyns</SpecialWords> dans Sen qu’ils se refusaient à détruire et qu’ils laissèrent pour les Yldrynyn perdus qui
            cherchaient à retrouver leur lieu d’exil. L’existence de ces quatre refuges est reprises dans un texte
            qui a été traduit, grossièrement si je puis me permettre, à Atozia: <br />
          </p>
          <QuoteContainer>
            Quatre Renydj, laissés aux sources d’Halnsyd<br />
            Quatre couches, aux voyageurs épuisés<br />
            Quatre flamme, chauffant l’esprit perdu<br />
            Quatre chemin, pour rejoindre les siens.
          </QuoteContainer>
          <p>
            (Karle marque une pause et pousse un juron en atozien)
          </p>
          <p>
            Quatre lieux dont on ne sait la véritable existence et qui, faute d’être trouvés par ceux qui ont cherché, sont passé du côté de la légende ou de l’histoire sans intérêt ….
          </p>

        </Content>
      </HistoryWrapper>
    </Layout>
  );
}
