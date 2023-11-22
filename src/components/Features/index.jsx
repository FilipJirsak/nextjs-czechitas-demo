import { SectionTitle } from "../Common/SectionTitle";
import { SingleFeature } from "./SingleFeature";
//import featuresData from "./featuresData";

export const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Výběr šaliny"
            paragraph="Šalin máme velký výběr, ale nejlepší jsou ty šaliny, které jezdí po kolejích."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            <SingleFeature
              title="Krátká šalina"
              image="https://www.drbna.cz/files/drbna/images/page/2020/11/30/size3-16067330229628-60-video-vanocni-salina-bude-v-brne-jezdit-do-27-prosince-letos-po-dvou-trasach.jpg"
            >
              Nuda jak v Praze, normální tramvaj, kterou splašíte úplně všude.
              To už můžeš jít rovnou šórem.
            </SingleFeature>
            <SingleFeature
              title="Dlouhá šalina"
              image="https://brno.rozhlas.cz/sites/default/files/styles/cro_16x9_tablet/public/images/03952877.jpeg?itok=a3mffuE7"
            >
              Pořádná šalina pro pořádnou sajtnu. Ideální na projížďky po
              štatlu. Uveze pomalu tolik lidí, jako krtek.
            </SingleFeature>
            <SingleFeature
              title="Dvojitá šalina"
              image="https://i.pinimg.com/originals/f7/69/56/f7695619226e161e6c27441a8b4533cb.jpg"
            >
              Dvojitá šalina vypadá jako kratka šalina, když si dáte pár škopků
              a vidíte dvojmo. Ale neni to tak, šecko je v cajku, fakt jsou dvě
              kratké šaliny za sebou.
            </SingleFeature>
          </div>
        </div>
      </section>
    </>
  );
};
