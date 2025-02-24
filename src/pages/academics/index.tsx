const ourSchoolConfig = {
   imageSrc: "/hero1.JPG",
};
const index: React.FC = () => {
  return (
    <>
      <section className="relative w-full h-[500px] flex items-center">
        <figure className="absolute h-full w-full">
          <img
            src={ourSchoolConfig.imageSrc}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 h-full w-full bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70" />
        </figure>
        <span className="flex flex-col z-10 text-white text-center w-full">
          <h2 className="text-3xl lg:text-[56px] font-bold pb-10">Academics</h2>
          <h3 className="text-lg xl:text-[32px] font-bold">
            Welcome to AIR FORCE SCHOOL,
            <br /> ASTE, Bengaluru!
          </h3>
        </span>
      </section>
      <section>
        <div>

        </div>
        <div>
          <h1></h1>
        </div>
      </section>
    </>
  );
};

export default index;
