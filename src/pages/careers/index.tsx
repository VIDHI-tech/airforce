
const recruitmentConfig = {
  imageSrc: "/hero1.JPG",
};
const Recruitment = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] flex items-center">
      {/* Background Image */}
      <figure className="absolute h-full w-full">
        <img
          src={recruitmentConfig.imageSrc}
          alt="Our School"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 h-full w-full bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70" />
      </figure>

      {/* Content */}
      <div className="flex flex-col lg:flex-row z-10 px-6 md:px-12 xl:px-28 text-white items-center">
        <section className="flex-1 text-center lg:text-start">
          <h2 className="text-3xl lg:text-[56px] font-bold pb-10">Recruitment</h2>
          <h3 className="text-lg xl:text-[32px] font-bold leading-snug">
            Welcome to AIR FORCE SCHOOL,
            <br /> ASTE, Bengaluru!
          </h3>
        </section>
        <section className="flex-1 space-y-4 text-center lg:text-start items-center lg:items-start flex flex-col">
          <p className="mt-4 text-xs lg:text-base 2xl:text-xl 2xl:leading-relaxed">
            Join Our Team at Air Force School Air Force School is committed to
            providing quality education and nurturing the future leaders of our
            nation. We are currently seeking dedicated and passionate
            individuals to join our team of educators and support staff. If you
            have a strong desire to contribute to the development of young minds
            and possess the qualifications required, we encourage you to apply.
          </p>
        </section>
      </div>
    </section>
  );
};

export default Recruitment;
