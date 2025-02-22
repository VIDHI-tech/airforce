
// import Button from "@/components/common/Button";

// const leadershipConfig = {
//   principal: {
//     image: "/principal.png",
//     name: "Mrs Chumki Nath",
//     position: "Principal",
//     school: "Air Force School, ASTE",
//     thoughts:
//       "Keeping this spirit of education alive we are continuously striving to nurture children into full-fledged personalities. Our aim is to nurture the child into a self-motivated individual. Curriculum and the practices of the school uphold the futuristic motto of the school Creating Global Citizens. Both Scholastic and Co-scholastic aspects of our education offer umpteen opportunities for the students to explore their interests and innovate new ideas. We want all our students to achieve their full potential. Our task is to make it possible and our mission is to provide a platform for the same",
//   },
//   gvHead: {
//     image: "/gvhead.png",
//     name: "Mrs. Swarnalatha Prasad",
//     position: "Headmistress GV Camp",
//     school: "Air Force School, ASTE",
//     thoughts:
//       "Educators have the honour of knowing that they touch lives every day.Teaching lets you ignite others with your passion for learning. The teachers of AFS, ASTE endeavour to enhance the self-confidence, self-esteem and personal responsibility of students by boosting their real competency.The school's best ally in the task of nurturing a student's urge to learn first and foremost are the parents",
//   },
//   avHead: {
//     image: "/avhead.png",
//     name: "Mrs. Korobi Dey",
//     position: "Headmistress AV Camp",
//     school: "Air Force School, ASTE",
//     thoughts:
//       "Teach with all your heart” is my advice to teachers at Air Force School, ASTE. We have an outstanding, committed and enthusiastic teaching team at Air Force School ASTE where the focus is always on the holistic development of every student to reach to their potential. Our teachers are facilitating the absorption of new ideas and concepts, creating experiences and opportunities for learners to explore and encouraging them to be active participants in the teaching-learning process.",
//   },
// };

// export default function LeaderSection() {
//   return (
//     <article className="">
//       {/* Principal */}
//       <section className="relative flex flex-col md:flex-row bg-[#167AC6] text-white border-t-8 overflow-x-hidden">
//         <figure className="absolute bottom-0 -right-20 w-1/2">
//             <img src="/wavebottom.png" alt="" />
//         </figure>
//         <figure className="w-full md:w-1/3">
//           <img src={leadershipConfig.principal.image} className="w-full h-full object-cover" />
//         </figure>
//         <div className="md:px-40 pt-7 flex flex-col justify-center md:w-2/3 md:max-w-6xl text-2xl font-bold">
//           <h2>{leadershipConfig.principal.name}</h2>
//           <h3>{leadershipConfig.principal.position}</h3>
//           <h4>{leadershipConfig.principal.school}</h4>
//           <p className="text-xs 2xl:text-lg font-normal leading-relaxed py-4 2xl:py-7">{leadershipConfig.principal.thoughts}</p>
//           <Button label="Read more" className="border text-base w-fit hover:bg-transparent hover:text-slate-400" />
//         </div>
//       </section>

//       {/* GV Headmistress */}
//       <section className="relative flex flex-col lg:flex-row-reverse bg-[#167AC6] text-white border-t-8 overflow-x-hidden">
//         <figure className="absolute bottom-0 -right-20  w-1/2">
//             <img src="/wavebottom.png" alt="" />
//         </figure>
//         <figure className="w-full md:w-1/3">
//           <img src={leadershipConfig.gvHead.image} className="w-full h-full object-cover" />
//         </figure>
//         <div className="pr-52 pt-7 flex flex-col justify-center w-2/3 max-w-3xl 2xl:max-w-6xl text-2xl  font-bold">
//           <h2>{leadershipConfig.gvHead.name}</h2>
//           <h3>{leadershipConfig.gvHead.position}</h3>
//           <h4>{leadershipConfig.gvHead.school}</h4>
//           <p className="text-xs 2xl:text-lg font-normal leading-relaxed py-7">{leadershipConfig.gvHead.thoughts}</p>
//           <Button label="Read more" className="border text-base w-fit hover:bg-transparent hover:text-slate-400" />
//         </div>
//       </section>

//       {/* AV Headmistress */}
//       <section className="relative flex flex-col lg:flex-row bg-[#167AC6] text-white border-t-8 overflow-x-hidden">
//         <figure className="absolute bottom-0 -right-20 w-1/2">
//             <img src="/wavebottom.png" alt="" />
//         </figure>
//         <figure className="w-full md:w-1/3">
//           <img src={leadershipConfig.avHead.image} className="w-full h-full object-cover" />
//         </figure>
//         <div className="px-40 pt-7 flex flex-col justify-center w-2/3 max-w-6xl text-2xl  font-bold">
//           <h2>{leadershipConfig.avHead.name}</h2>
//           <h3>{leadershipConfig.avHead.position}</h3>
//           <h4>{leadershipConfig.avHead.school}</h4>
//           <p className="text-xs 2xl:text-lg font-normal leading-relaxed py-7">{leadershipConfig.avHead.thoughts}</p>
//           <Button label="Read more" className="border text-base w-fit hover:bg-transparent hover:text-slate-400" />
//         </div>
//       </section>
//     </article>
//   );
// }


import Button from "@/components/common/Button";

interface Leader {
    image: string;
    name: string;
    position: string;
    school: string;
    thoughts: string;
  }
   
  const leadershipConfig: Record<string, Leader> = {
  principal: {
    image: "/principal.png",
    name: "Mrs Chumki Nath",
    position: "Principal",
    school: "Air Force School, ASTE",
    thoughts:
      "Keeping this spirit of education alive we are continuously striving to nurture children into full-fledged personalities. Our aim is to nurture the child into a self-motivated individual. Curriculum and the practices of the school uphold the futuristic motto of the school “Creating Global Citizens”. Both Scholastic and Co-scholastic aspects of our education offer umpteen opportunities for the students to explore their interests and innovate new ideas. We want all our students to achieve their full potential. Our task is to make it possible and our mission is to provide a platform for the same.",
  },
  gvHead: {
    image: "/gvhead.png",
    name: "Mrs. Swarnalatha Prasad",
    position: "Headmistress GV Camp",
    school: "Air Force School, ASTE",
    thoughts:
      "Educators have the honour of knowing that they touch lives every day. Teaching lets you ignite others with your passion for learning. The teachers of AFS, ASTE endeavour to enhance the self-confidence, self-esteem and personal responsibility of students by boosting their real competency. The school's best ally in the task of nurturing a student's urge to learn first and foremost are the parents.",
  },
  avHead: {
    image: "/avhead.png",
    name: "Mrs. Korobi Dey",
    position: "Headmistress AV Camp",
    school: "Air Force School, ASTE",
    thoughts:
      "“Teach with all your heart” is my advice to teachers at Air Force School, ASTE. We have an outstanding, committed and enthusiastic teaching team at Air Force School ASTE where the focus is always on the holistic development of every student to reach to their potential. Our teachers are facilitating the absorption of new ideas and concepts, creating experiences and opportunities for learners to explore and encouraging them to be active participants in the teaching-learning process.",
  },
};

interface LeadsProps {
    data: Leader;
    isFlipped?: boolean;
  }
  
  // Reusable
  const Leads: React.FC<LeadsProps> = ({ data, isFlipped = false }) => {
  return (
    <section
      className={`relative flex flex-col lg:flex-row ${isFlipped ? "lg:flex-row-reverse" : ""} bg-[#167AC6] text-white border-t-8 overflow-x-hidden`}
    >
      {/* Background Wave */}
      <figure className={`absolute bottom-0 -right-20 w-1/2 ${isFlipped ? "-z-10" : ""}`}>
        <img src="/wavebottom.png" />
      </figure>

      {/* Image */}
      <figure className="w-full lg:w-1/3">
        <img src={data.image} alt={data.name} className="w-full h-full object-contain" />
      </figure>

      {/* Content */}
      <div className={`space-y-1 py-5 lg:py-0 px-10 md:px-40 flex flex-col justify-center lg:w-2/3 max-w-6xl text-2xl font-bold`}>
        <h2 className="pt-4">{data.name}</h2>
        <h3>{data.position}</h3>
        <h4>{data.school}</h4>
        <p className="text-xs 2xl:text-lg font-normal tracking-wide py-4 2xl:py-7">{data.thoughts}</p>
        <Button label="Read more" className="border text-base w-fit hover:bg-transparent hover:text-slate-400" />
      </div>
    </section>
  );
};

// Main
export default function LeaderSection() {
  return (
    <article id="management">
      <Leads data={leadershipConfig.principal} />
      <Leads data={leadershipConfig.gvHead} isFlipped />
      <Leads data={leadershipConfig.avHead} />
    </article>
  );
}
