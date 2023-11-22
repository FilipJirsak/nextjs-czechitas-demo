export const SingleFeature = ({ image, title, children }) => {
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-10 flex w-[300px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          <img src={image} alt="fotka šaliny" />
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {children}
        </p>
      </div>
    </div>
  );
};
