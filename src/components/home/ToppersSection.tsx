
const students = [
  {
    name: "NIVIKSHA SUMANA REDDY",
    percentage: "97.6%",
    class: "Class Xth Topper",
    image: "/topper1.png",
  },
  {
    name: "KANISHK PUNDIR",
    percentage: "98.6%",
    class: "Class XIIth Science Topper",
    image: "/topper2.png",
  },
  {
    name: "SIMRAN BEDI",
    percentage: "91.6%",
    class: "Class XIIth Humanities Topper",
    image: "/topper3.png",
  },
  {
    name: "NITYAPRIYA N",
    percentage: "97%",
    class: "Class XIIth Commerce Topper",
    image: "/topper4.png",
  },
 
];

const ToppersSection = () => {
  return (
    <section className="py-10 px-2 md:px-4 lg:px-[calc(100%-90%)] flex flex-col items-center lg:py-40 gap-y-8">
      <h2 className="text-5xl lg:text-6xl font-bold">Our Toppers</h2>
      <p className="text-[#363848] text-base pt-2 font-normal text-center">Celebrating excellence and achievement in academics. Meet our brightest minds who made us proud!</p>
      <div className="overflow-x-auto flex md:space-x-20 py-6 scrollbar-hide snap-x snap-mandatory w-full">
        {students.map((student, index) => (
          <div
            key={index}
            className="py-4 px-10 flex flex-col justify-center items-center text-center font-bold text-2xl"
          >
            <figure className="w-60">
            <img
              src={student.image}
              alt={student.name}
              className="w-full h-full object-cover"
            />
            </figure>
            <h3 className="text-gray-600 my-auto">{student.class}</h3>
            <p className="text-[#202020]">{student.name} ({student.percentage})</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToppersSection;
