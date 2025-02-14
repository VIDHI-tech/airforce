const Determined = () => {
  const determinedConfig = {
    title: "We are determined to achieve the highest standards",
    paragraph: `
      Air Force School, ASTE is located within Bangalore city limits.
      The school is one of the forerunners amongst the elite educational institutions in the city.
      It functions under the aegis of IAF educational and cultural society and is meant primarily for the children of Air Force personnel.
      Air Force School ASTE is a recognized school up to XIIth class and affiliated with CBSE New Delhi.
      Air Force School, ASTE was started as a Nursery School in 1977 to cater to the educational needs of the children of Air Force personnel serving in HAL-based units.
      Over the years, the school has grown in size up to XII std. Air Force School, ASTE functions from its two locations at Murgeshpalya Camp and
      Akash Vihar Camp and comprises classes from Nursery to XII std.
    `,
  };

  return (
    <div className="flex flex-col lg:flex-row w-full">
      <section className="bg-[#2B8FDB] text-white py-7 px-5 2xl:pl-32 2xl:pr-14 flex flex-col justify-center lg:w-2/3">
        <h1 className="text-3xl lg:text-4xl 2xl:text-5xl font-semibold pb-4 max-w-3xl">
          {determinedConfig.title}
        </h1>
        <p className="text-sm md:text-base xl:text-lg pb-8">{determinedConfig.paragraph}</p>
      </section>
      <figure className="w-full">
        <img src="/determined.gif" alt="Determined" className="h-full w-full object-cover" />
      </figure>
    </div>
  );
};

export default Determined;
