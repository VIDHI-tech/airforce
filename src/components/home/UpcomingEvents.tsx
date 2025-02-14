import Button from "../common/Button";

const UpcomingEvents = () => {
  interface Event {
    id: number;
    date: {
      day: number;
      month: string;
    };
    time: {
      start: string;
      end: string;
    };
    title: string;
    description: string;
  }

  const eventsConfig: Event[] = [
    {
      id: 1,
      date: { day: 24, month: "Nov" },
      time: { start: "08:00 AM", end: "04:30 PM" },
      title: "Fun Study Tour 2021",
      description:
        "Join us for an exciting educational journey where students will explore various historical sites and engage in interactive learning activities. This tour is designed to combine fun and education.",
    },
    {
      id: 2,
      date: { day: 2, month: "Dec" },
      time: { start: "08:00 AM", end: "04:30 PM" },
      title: "Meetup with Sekola Senior",
      description:
        "A unique opportunity for students to interact with senior students and learn from their experiences. The session will include mentoring, guidance, and valuable insights into academic success.",
    },
    {
      id: 3,
      date: { day: 4, month: "Dec" },
      time: { start: "08:00 AM", end: "04:30 PM" },
      title: "International Exams Preparation",
      description:
        "Comprehensive preparation session for upcoming international examinations. Expert faculty will provide guidance on exam strategies and important topics.",
    },
    {
      id: 4,
      date: { day: 10, month: "Dec" },
      time: { start: "09:00 AM", end: "03:30 PM" },
      title: "Science Fair 2021",
      description:
        "Annual science fair showcasing student projects and innovations. Join us for an exciting day of scientific discovery and creative presentations.",
    },
    {
      id: 5,
      date: { day: 15, month: "Dec" },
      time: { start: "10:00 AM", end: "05:00 PM" },
      title: "Year End Cultural Festival",
      description:
        "Celebrate the end of the year with performances, exhibitions, and cultural activities. Students will showcase their talents in music, dance, and arts.",
    },
  ];

  const truncateText = (text: string, maxLength: number = 70) => {
    return text.length > maxLength
      ? `${text.substring(0, maxLength)}...`
      : text;
  };
  return (
    <div className="grid grid-cols-4 relative">
      <section className="bg-[#2459A8] text-white col-span-4 md:col-span-1 items-center flex flex-col justify-center gap-4 py-6 px-2">
        <h1 className="text-2xl font-semibold">Upcoming Events</h1>
        <Button label="All events" />
      </section>
      <section className="bg-[#023AA2] overflow-x-auto col-span-4 md:col-span-3 py-6">
        <div className="flex gap-6 items-center" style={{ minWidth: "max-content" }}>
          {eventsConfig.map((event) => (
            <div key={event.id} className="p-6 w-[500px]">
              <div className="flex gap-6 items-start">
                <span className="bg-white rounded-full p-6 text-center w-[110px] font-bold">
                  <div className="text-3xl">{event.date.day}</div>
                  <div className="">{event.date.month}</div>
                </span>
                <div className="flex-1 text-white">
                  <h3 className="text-xl font-semibold pb-1">
                    {event.title}
                  </h3>
                  <h3 className="text-lg font-semibold mb-3">
                    {event.time.start} - {event.time.end}
                  </h3>
                  <p className="text-[#A3ABB6] text- ">
                    {truncateText(event.description)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
         {/* Gradient Overlay */}
         <div className="absolute hidden md:block top-0 right-0 h-full w-40 bg-gradient-to-l from-[#023AA2] to-transparent pointer-events-none"/>
      
      </section>
    </div>
  );
};

export default UpcomingEvents;
