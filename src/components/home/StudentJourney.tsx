 
const studentJourney = {
  title: "Enter The Student Journey",
  description:
    "Air Force School, ASTE is located within Bangalore city limits. The school is one of the forerunners amongst the elite educational institutions in the city. It functions under the aegis of IAF educational and cultural society and is meant primarily for the children of Air Force personnel, Air Force School ASTE is recognised school up to XIIth class and affiliated with CBSE New Delhi. Air Force School, ASTE was started as a Nursery School in 1977 to cater to the educational needs of the children of Air Force personnel serving in HAL based units. Over the years, the school has grown in size up to XII std. Air Force School, ASTE functions from its two locations at Murgeshpalya Camp and Akash Vihar Camp and comprises of classes from Nursery to XII std.",
  images: [
    "/journey1.png",
    "/journey2.png",
    "/journey3.png"
  ]
};

const StudentJourney = () => {
  return (
    <section className="py-10 px-5 md:px-4 xl:px-[calc(100%-93%)] md:py-40 flex flex-col-reverse lg:flex-row items-center gap-24">
      {/* Images Grid */}
      <div className="grid grid-cols-2 gap-10">
        <img src={studentJourney.images[0]} className="rounded-lg w-96" />
        <img src={studentJourney.images[1]} className="rounded-lg w-full h-2/3" />
        <img src={studentJourney.images[2]} className="col-span-2 rounded-lg w-4/5 h-4/5" />
      </div>

      {/* Content */}
      <div className="text-center">
        <h2 className="text-[42px] md:text-6xl font-bold pb-6">{studentJourney.title}</h2>
        <p className="text-sm md:text-base leading-relaxed">{studentJourney.description}</p>
      </div>
    </section>
  );
};

export default StudentJourney;
