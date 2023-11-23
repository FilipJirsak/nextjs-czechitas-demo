import { SectionTitle } from "../../components/Common/SectionTitle";

const Obrazek = ({ image }) => (
  <div className="w-full px-4 lg:w-1/2">
    <div
      className="wow fadeInUp relative mx-auto max-w-[500px] lg:mr-0"
      data-wow-delay=".2s"
    >
      <img
        src={image}
        alt="fotka šaliny"
        className="drop-shadow-three mx-auto max-w-full lg:mr-0"
      />
    </div>
  </div>
);

export const Produkt = ({ title, subtitle, image, children, type }) => (
  <section id="about" className="pt-16 md:pt-20 lg:pt-28">
    <div className="container">
      <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
        <div className="-mx-4 flex justify-between items-start">
          {type === "left" && <Obrazek image={image} />}
          <div className="w-full px-4 lg:w-1/2">
            <SectionTitle title={title} paragraph={subtitle} mb="44px" />

            <div
              className="dark:text-white wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
              data-wow-delay=".15s"
            >
              {children}
            </div>
          </div>
          {type === "right" && <Obrazek image={image} />}
        </div>
      </div>
    </div>
  </section>
);
