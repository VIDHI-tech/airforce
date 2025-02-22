import Button from "@/components/common/Button";
import { motion } from "framer-motion";

const admissionCardConfig = [
  {
    title: "LKG-UKG Admission Form",
    description:
      "Parents seeking admission for their children in the LKG and UKG classes can fill out the admission form available on our website.",
    link: "#",
  },
  {
    title: "Class XI Admission Form",
    description:
      "Students wishing to enroll in Class XI can download the admission form from our site and submit it according to the given instructions.",
    link: "#",
  },
  {
    title: "Transfer Certificate (TC) Form",
    description:
      "A Transfer Certificate is required for students transferring from other schools. Download TC Form (PDF) (Link to be provided).",
    link: "#",
  },
];
const admissionConfig = {
    imageSrc: "/hero1.JPG",
 };
 const Cbse: React.FC = () => {
   return (
     <>
       <section className="relative w-full h-[500px] flex items-center justify-center">
         <figure className="absolute h-full w-full">
           <img
             src={admissionConfig.imageSrc}
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 h-full w-full bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70" />
         </figure>
         <span className="flex flex-col z-10 text-white text-center max-w-6xl">
           <h2 className="text-3xl lg:text-[56px] font-bold pb-10">Academics</h2>
           <p className="text-lg xl:text-[32px] font-bold leading-10">
           The CBSE regularly issues circulars to provide updates on academic policies, examinations, and other essential information. These circulars are accessible on the official CBSE website under the 'Examination Circulars' section.
           </p>
         </span>
         <Button label="Open PDF" className="text-xs 2xl:text-base" />
       </section>
       <section className="py-8 px-10 md:py-20 2xl:py-40 md:px-0 xl:px-[calc(100%-88%)]">
          <div className="flex md:grid md:grid-cols-3 justify-center gap-12">
            {admissionCardConfig.map((form, index) => (
              <motion.div
                key={index}
                className="flex flex-col justify-between text-2xl font-bold bg-white drop-shadow-2xl border border-gray-50 rounded-lg p-10 space-y-7"
                whileHover={{ scale: 1.05 }}
              >
                <h2 className="text-[#167AC6]">{form.title}</h2>
                <p className="text-[#737373] font-normal">{form.description}</p>
                <a
                  href={form.link}
                  className="w-fit bg-[#167AC6] text-white px-6 py-4 rounded-sm text-sm"
                >
                  Google Form
                </a>
              </motion.div>
            ))}
          </div>
    </section>
     </>
   );
 };
 
 export default Cbse;
