import Button from "@/components/common/Button";

const ourSchoolConfig = {
  imageSrc: "/hero1.JPG",
};
const Alumni = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] flex items-center">
    {/* Background Image */}
    <figure className="absolute h-full w-full">
      <img
        src={ourSchoolConfig.imageSrc}
        alt="Our School"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 h-full w-full bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70" />
    </figure>

    {/* Content */}
    <div className="flex flex-col lg:flex-row z-10 px-6 md:px-12 xl:px-28 text-white items-center">
      <section className="flex-1 text-center lg:text-start">
        <h2 className="text-3xl lg:text-[56px] font-bold pb-10">Alumni</h2>
        <h3 className="text-lg xl:text-[32px] font-bold leading-snug">
          Welcome to AIR FORCE SCHOOL,
          <br /> ASTE, Bengaluru!
        </h3>
      </section>
      <section className="flex-1 space-y-4 text-center lg:text-start items-center lg:items-start flex flex-col">
        <p className="mt-4 text-xs lg:text-base 2xl:text-xl 2xl:leading-relaxed">
          Join Our Team at Air Force School Reconnect with Air Force School
          Bangalore! Our school has shaped countless lives and has been
          enriched by the students who walked its halls. The bond between the
          school and its alumni is timeless, and we cherish the memories and
          experiences shared over the years. We are reaching out to all former
          students who have been a part of this incredible journey. It would
          be a pleasure to reconnect and celebrate the legacy we have built
          together. To strengthen this lifelong connection, we have prepared
          an alumni pro forma. We invite you to fill it out and send it back
          to us, allowing us to keep in touch and celebrate our shared
          history. We look forward to hearing from you!
        </p>
        {/* <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-all rounded-lg text-white font-semibold">
        Read more
      </button> */}
        <Button label="Register Here" className="text-xs 2xl:text-base" />
      </section>
    </div>
  </section>
  )
}

export default Alumni