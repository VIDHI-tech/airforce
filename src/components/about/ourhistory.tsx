import Button from "@/components/common/Button";

const ourHistoryconfig = {
  imageSrc: "/history.png",
};

const OurHistory = () => {
  return (
    <section id="ourhistory" className="relative bg-[#167AC6] text-white flex flex-col xl:flex-row items-center px-6 pb-10 md:p-12 lg:p-20 xl:py-32 xl:gap-20">
      <figure className="rounded-lg h-96 2xl:h-[500px]">
        <img
          src={ourHistoryconfig.imageSrc}
          alt="Our History"
          className="w-full h-full object-contain"
        />
      </figure>

      <div className="space-y-10 flex-1 2xl:px-10 flex flex-col items-center text-center xl:items-start xl:text-start">
        <h1 className="text-3xl lg:text-[56px] font-bold">Our History</h1>
        <p className="text-base 2xl:text-lg leading-relaxed">
          Air Force School, ASTE is located within Bangalore city limits. The
          school is one of the forerunners amongst the elite educational
          institutions in the city. It functions under the aegis of IAF
          educational and cultural society and is meant primarily for the
          children of Air Force personnel, Air Force School ASTE is recognised
          school up to XIIth class and affiliated with CBSE New Delhi. Air Force
          School, ASTE was started as a Nursery School in 1977 to cater to the
          educational needs of the children of Air Force personnel serving in
          HAL based units. Over the years, the school has grown in size up to
          XII std. Air Force School, ASTE functions from its two locations at
          Murgeshpalya Camp and Akash Vihar Camp and comprises of classes from
          Nursery to XII std.
        </p>
        <Button label="Read more" className="border border-white"/>
      </div>
    </section>
  );
};

export default OurHistory;
