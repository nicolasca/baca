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

export default function GuerreRunn() {
  return (
    <Layout>
      <Head>
        <title>La Guerre de Runn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HistoryWrapper>
        <h1>La Guerre de Runn, par Karle</h1>
        <Content>
          <p>
            « Ce sera un récit dans les grandes lignes car il faut savoir que
            l&lsquo;on parle là d&lsquo;une histoire se déroulant sur des
            siècles et des siècles. Nous verrons par la suite s&lsquo;il y a des
            questions auxquelles je peux répondre.
          </p>
          <p>(Il boit un peu de sa fiasque et la range dans sa poche.)</p>
          <p>
            Il est dit qu&lsquo;initialement, dans des dimensions dont la
            compréhension nous échappent, deux groupes de puissances dont je
            serai bien incapable de définir la nature se détectèrent et se
            rapprochèrent jusqu&lsquo;à ce que s&lsquo;établissement
            naturellement un rapport d&lsquo;opposition. Si ces groupes de
            puissances pouvaient se détecter, ils ne pouvaient pas agir
            l&lsquo;un sur l&lsquo;autre. Alors les Puissances décidèrent de
            mener leur rencontre sur une planète, (Il tapote sur le sol du
            navire avec son poing) le monde de Sen.
          </p>
          <p>
            Nul ne sait ce qu&lsquo;il se passa ni pendant combien de temps,
            mais une guerre finit par débuter, un combat difficilement
            imaginable pour nous autres. Durant cette guerre, s&lsquo;imprégnant
            à la fois des flux d&lsquo;énergies en provenance des puissances et
            de la structure du monde de Sen, deux mondes se créèrent, chacun
            entre les domaines d&lsquo;un groupe de puissance et le monde de
            Sen. Ces mondes sont connus sous les noms de Hir et de Jol et sont
            donc des sortes de copies du monde de Sen dans lesquelles les règles
            diffèrent. Avec le temps les différences se sont accrues à tous
            niveaux mais d&lsquo;un point de vue géographique large, ils sont
            relativement similaires.
          </p>
          <p>
            La guerre fut totale et, si l&lsquo;on ne sait pas ce qui est advenu
            des puissances lorsqu&lsquo;elle se termina, on sait qu&lsquo;elle
            engendra des destructions et des modifications difficilement
            convenables pour nos esprits. A l&lsquo;issue de cette longue
            guerre, les rapports d&lsquo;énergies avaient changés. Désormais, le
            monde de Sen concentrait une grande partie de la puissance dont
            dépendent, et dépendent toujours, les mondes de Hir et de Jol. Les
            flux d&lsquo;énergie ne venaient plus majoritairement de
            l&lsquo;extérieur vers Sen, mais l&lsquo;inverse.
          </p>
          <p>
            La guerre fut aussi une forte source de création. Des entités,
            multiples et variées, avaient pris vie dans les mondes de Hir et de
            Jol, parfois sans volonté de création derrière mais souvent avec
            intention pour lutter au sein de la guerre. Les conflits
            continuèrent entre les entités mais ils se diversifièrent, des camps
            se créèrent, souvent transversaux aux trois mondes. Pour survivre et
            prospérer, ces entités avaient besoin d&lsquo;énergie et comme ces
            dernières étaient concentrées sur Sen, ils durent se battre pour
            obtenir leurs parts. Pour cela, certaines s&lsquo;appuyèrent sur des
            races déjà présentes, d&lsquo;autres décidèrent d&lsquo;en créer de
            nouvelles, d&lsquo;autres encore, se lièrent aux éléments naturels.
            Tous utilisaient leur propre moyen pour continuer de bénéficier des
            flux d&lsquo;énergies qui parcouraient les mondes.
          </p>
          <p>
            Les guerres et conflits mineurs continuèrent au fil du temps. Trois
            factions principales se distinguèrent des autres, regroupant chacune
            des entités et des races de toutes sortes. Parfois une race se
            retrouvaient même déchiré entre leurs appartenance à différentes
            factions, parfois certaines changeaient de camps. Les choses et les
            gens, mêmes les entités, évoluaient au fil de l&lsquo;époque si vous
            voyez ce que je veux dire. Bref… (Il boit de nouveau) ces trois
            factions sont les suivantes :
          </p>
          <p>
            Les <SpecialWords>LIBERTAIRES</SpecialWords> qui souhaitent couper
            les liens entre les trois mondes afin que les races puissent évoluer
            indépendamment de ce besoin d&lsquo;énergie de certaines entités,
            leur rendant ainsi une indépendance parfois bénéfique, parfois non.
            Cette faction, comme les autres, sont composés de plusieurs races
            mais on retrouvait notamment dans celle-ci la majorité des orcs et
            notamment les Orcs Blancs.
          </p>
          <p>
            <SpecialWords>SEN RIN</SpecialWords>, la faction qui veut
            compartimenter de manière définitive les zones au sein des mondes de
            Hir et de Jol afin que les guerres cessent au sein de ces mondes et
            que tout passe par le monde de Sen. L&lsquo;idée étant de pouvoir
            garantir la survie des mondes de Hir et Jol ainsi que celles des
            différentes entités, l&lsquo;autre effet serait que Sen deviendrait
            un champ de bataille constant. (Il vous regarde, Harmony Klémaj et
            Theodran Gardefoutre.) Vos amis de la montagne sont connus pour
            avoir été très actifs dans cette faction.
          </p>
          <p>
            Les <SpecialWords>PACIFICATEURS</SpecialWords> qui veulent dominer
            le conflit afin d&lsquo;apporter au final une paix réglementée dans
            ce conflit qui durait depuis un long moment. L&lsquo;idée directrice
            qui était annoncée était une grande guerre destructrice qui
            amènerait ensuite à une paix globale entre les entités mais aussi au
            sein des peuples. L&lsquo;harmonie totale étant considérée comme
            impossible, l&lsquo;idée était de concentrer un pouvoir qui sert la
            paix et évite les drames et les guerres trop destructrices. Parmi
            ces derniers, avant l&lsquo;événement que je vais décrire par la
            suite, on comptait à l&lsquo;époque une majorité de peuples humains
            et nains.
          </p>
          <p>
            Enfin, il y a les autres qui n&lsquo;appartiennent pas formellement
            à l&lsquo;une de ces trois factions : une race, un peuple ou une
            entité particulière, certains rejoignant parfois une des trois
            factions temporairement, d&lsquo;autres restent indépendants, mais
            plusieurs d&lsquo;entre eux demeuraient particulièrement influents
            et pouvaient... peuvent toujours, peser dans les conflits.
            L&lsquo;Ascendance Tenh faisait partie de ceux-ci avant la guerre
            dont nous allons parler.
          </p>
          <p>
            Ainsi, chers auditeurs, les choses évoluèrent au rythme des
            conflits, des accords et autres événements oubliés de beaucoup. Puis
            vint ce qu&lsquo;on appelle la Guerre de Runn, du nom, paraît-il, du
            palais où elle débuta. Cette fameuse grande guerre voulu par les
            <SpecialWords>PACIFICATEURS</SpecialWords>. Les guerres, voyez-vous,
            avaient toujours été des guerres de domination, parfois de
            conquêtes, mais dans le respect de certaines choses. La Guerre de
            Runn passa un cap. Certaines entités et race avaient évolués,
            d&lsquo;autres avaient émergés petit à petit, changeant la donne.
            Les accords de non destruction qui couraient depuis des siècles
            furent brisés par des <SpecialWords>PACIFICATEURS</SpecialWords> et
            cette guerre devient une guerre d&lsquo;annihilation. Les dégâts
            dans Hir et Jol furent terribles, d&lsquo;après les textes, mais
            tout Sen en ressenti également les effets. Le premier acte eut donc
            lieu dans la Palais de Runn, je ne sais pas précisément de quoi il
            s&lsquo;agissait mais c&lsquo;était là le départ du conflit,
            organisé par les <SpecialWords>PACIFICATEURS</SpecialWords>. Je sais
            cependant qu&lsquo;on parle d&lsquo;un évènement fait de trahison et
            de destruction. Un acte que j&lsquo;ai déjà lu comme étant qualifié
            d&lsquo; <i>irréversible</i>.
          </p>
          <p>
            Les choses étaient bien préparées et les{" "}
            <SpecialWords>PACIFICATEURS</SpecialWords> prirent rapidement
            l&lsquo;ascendant par rapport aux deux autres factions. Le plan
            final était simple : enfermer à l&lsquo;aide de SCEAUX ceux de SEN
            RIN dans les royaumes compartimentés qu&lsquo;ils avaient commencé à
            créer mais … sans les conditions que{" "}
            <SpecialWords>SEN RIN</SpecialWords> avaient envisagées au final. Et
            détruire jusqu&lsquo;à une capitulation avec règles strictes les{" "}
            <SpecialWords>LIBERTAIRES</SpecialWords>, voir l&lsquo;annihilation
            pour certains d&lsquo;entre eux. La guerre penchait en leur faveur
            mais trois événements spécifiques se déroulèrent, des événements
            importants mais dont la corrélation ne sauta pas aux yeux à
            l&lsquo;époque car elle fut noyée dans cette guerre triplement
            mondiale.
          </p>
          <p>
            Le premier fut celui que personne n&lsquo;ignore. Les Orcs blancs,
            parmi les plus puissants des races orcs mais malgré tout bien trop
            sous-estimé à l&lsquo;époque, partirent en croisade à travers tout
            le monde de Sen. Et croyez-moi, de tout ce que j&lsquo;ai lu,
            entendu ou vu, ils ne sont pas les plus drôles à affronter à la
            guerre. Le fait est que je ne sais pas exactement leur but, je ne
            sais pas qui le sait vraiment, en tout cas ils ravagèrent le monde,
            pas simplement pour le plaisir de la guerre comme certains imbéciles
            aiment affirmer, non, ils le firent à dessein.
          </p>
          <p>
            Le deuxième événement fut la disparition d&lsquo;un flux
            d&lsquo;énergie connu sous le nom de Sreel. Les flux
            d&lsquo;énergies traversent les trois mondes, bien que la plupart
            tirent leur source de Sen depuis la dernière guerre des Puissants,
            pour ceux qui ont bien suivi depuis le début, mais les flux de
            celui-ci se tarirent presque d&lsquo;un coup, les différentes
            sources ne produisaient plus rien. On en trouva rapidement plus
            nulle part.
          </p>
          <p>
            Le troisième concerna les Ezteroths et leur entité, Al Ezter qui
            appartenaient au <SpecialWords>SEN RIN</SpecialWords>.
            L&lsquo;Entité disparut ainsi que plusieurs membres des Ezteroths,
            tous les autres, et ils étaient nombreux, furent retrouvés morts
            dans un sale état. Le tout faisant penser à un sacrifice.
          </p>
          <p>
            A propos du Sreel, je ne sais pas ce que les{" "}
            <SpecialWords>PACIFICATEURS</SpecialWords> ont compris réellement,
            mais ils mirent de sérieuses ressources pour enquêter sur le sujet.
            Le filon fit remonter jusqu&lsquo;à la race des Merondenogls qui
            appartenait pourtant aux <SpecialWords>PACIFICATEURS</SpecialWords>.
            Des comptes furent demandés aux Huit Cités qu&lsquo;occupait cette
            race. Au départ, ils feignirent de ne rien savoir puis refusèrent de
            répondre, malgré la menace de « passer du côté de l&lsquo;ennemi »
            s&lsquo;ils le ne faisaient pas… Ils ne le firent pas et la guerre
            qui s&lsquo;en suivit mena à la destruction totale des huit cités…
            sachant que les Mereondenogls ne pouvaient survivre en dehors de ces
            cités, ils en sont tous morts. Cependant il a été déjà été retrouvé
            dans des anciens textes, y compris par votre extraordinaire conteur
            du matin, la mention d&lsquo;une « Neuvième Cité » sans que cela
            soit rapproché aux Merondenogls mais sans qu&lsquo;on en sache plus
            dessus. Lors de mon travail sur le sujet, j&lsquo;ai fait partie de
            ceux qui estimaient qu&lsquo;il y avait un lien.
          </p>
          <p>
            Concernant les Orcs Blancs, vous devez connaître vos classiques. Les
            <SpecialWords>PACIFICATEURS</SpecialWords> réagirent à travers la
            divinité Atozienne et l&lsquo;avènement d&lsquo;Atozia. La guerre
            continua longuement et fut rude, mais cette arrivée des Dieux, de
            leurs pouvoirs et des Atoziens ainsi que l&lsquo;organisation que
            tous mirent en place, une fois le choc et la surprise passée, leur
            permirent de remporter une victoire, certes bien courte au vu des
            dégâts subis, mais malgré tout suffisante pour détruire la Horde
            Blanche.
          </p>
          <p>
            La guerre fut enfin terminée et les{" "}
            <SpecialWords>PACIFICATEURS</SpecialWords> avaient gagné, pas de
            cette victoire totale qu&lsquo;ils avaient planifiée mais une
            victoire néanmoins. Les <SpecialWords>SEN RIN</SpecialWords> étaient
            enfermés et livrés à des sorts peu enviables, les{" "}
            <SpecialWords>LIBERTAIRES</SpecialWords> avaient subi des dégâts
            considérables, beaucoup d&lsquo;entre eux avaient été anéantis, et
            bien que notre époque soit toujours en proie à la violence, comparée
            aux temps d&lsquo;avant, la paix et la prospérité ont été présente
            durant ces derniers siècles dans des zones qui n&lsquo;avaient connu
            que la guerre. Les Ezteroths… puisque les plus affutés d&lsquo;entre
            vous auront relevé que je ne les avait plus mentionné... et bien
            concernant ces joyeux lurons, là encore je ne puis rien affirmer
            mais j&lsquo;ai cru comprendre ici et là, au gré de mes recherches,
            que ceux en charge de la création puis de la maintenance des fameux{" "}
            <SpecialWords>SCEAUX</SpecialWords> d&lsquo;enfermement, avait
            retrouvé parfois des traces de Jehhg, l&lsquo;énergie principalement
            utilisé par les adeptes d&lsquo;Al Ester à l&lsquo;époque, au sein
            des mécanismes des <SpecialWords>SCEAUX</SpecialWords>, chose qui
            n&lsquo;était pas prévu dans la conception de ces SCEAUX par leurs
            concepteurs… Ce qui est arrivé sur la montagne en allant secourir
            Sibline laisse à penser que certains{" "}
            <SpecialWords>SCEAUX</SpecialWords> sont bel et bien affectés…
          </p>
          <p>
            Les <SpecialWords>PACIFICATEURS</SpecialWords> ont dont gagné cette
            guerre mais ils en avaient payé le prix, y compris au sein même de
            la faction ou des membres la quittèrent… pas toujours
            volontairement. Les <SpecialWords>PACIFICATEURS</SpecialWords> sont
            dominants depuis quatre siècles dans SEN, via Atozia notamment, mais
            tous leurs ennemis ne sont pas détruits et certains parmi eux sont
            d&lsquo;une puissance à faire pâlir les Atoziens les plus
            fanatiques. Les <SpecialWords>PACIFICATEURS</SpecialWords>{" "}
            n&lsquo;ont pas réussi leur pari, ils le savent et ils savent
            également qu&lsquo;il y a un risque qu&lsquo;ils payent leurs
            actes.»
          </p>
        </Content>
      </HistoryWrapper>
    </Layout>
  );
}
