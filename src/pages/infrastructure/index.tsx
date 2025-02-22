
const Infrastructure = () => {
  const classroomConfig = [
    "/hero1.JPG",
    "/hero1.JPG",
    "/hero1.JPG",
    "/hero1.JPG",
    "/hero1.JPG",
    "/hero1.JPG",
    "/hero1.JPG",
    "/hero1.JPG",
  ];

  return (
    <section className="py-10 px-4 xl:px-10">
      <h1 className="text-3xl font-bold">Smart Classrooms</h1>
      <p className="text-lg text-gray-700 mt-4">
        Air Force School, ASTE is located within Bangalore city limits. The
        school is one of the forerunners amongst the elite educational
        institutions in the city. It functions under the aegis of IAF
        educational and cultural society and is meant primarily for the children
        of Air Force personnel. Air Force School ASTE is recognized school up to
        XIIth class and affiliated with CBSE New Delhi.
      </p>
 
      <section className="mt-8 grid grid-cols-4 gap-4">
        {classroomConfig.map((image, index) => (
          <figure
            key={index}
            className={`${index % 2 === 0 ? "col-span-1 row-span-1" : "col-span-2 row-span-1"} `}
          >
            <img
              src={image} 
              className=" rounded-md object-cover"
            />
          </figure>
        ))}
      </section>
    </section>
  );
};

export default Infrastructure;
