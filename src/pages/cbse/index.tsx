import Button from "@/components/common/Button";

const cbseConfig = {
  imageSrc: "/hero1.JPG",
  disclosure: "./disclosure.pdf",
};
const Cbse: React.FC = () => {
  const teacherTraining = {
    title: "Teachers’ Training Programme",
    imageSrc: "/hero1.JPG",
    message:
      "AFSASTE emphasizes continuous professional development for its educators. While specific details about the school's training programmes are not provided in the available sources, teachers are encouraged to participate in CBSE's capacity-building and empowerment initiatives.",
  };
  return (
    <>
      <section className="relative w-full h-[500px] flex items-center justify-center">
        <figure className="absolute h-full w-full">
          <img
            src={cbseConfig.imageSrc}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 h-full w-full bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70" />
        </figure>
        <span className="flex flex-col z-10 text-white text-center max-w-7xl md:px-4 2xl:px-0">
          <h2 className="text-3xl lg:text-[56px] font-bold pb-10">CBSE</h2>
          <p className="text-lg md:text-2xl 2xl:text-[32px] font-bold md:leading-10">
            The CBSE regularly issues circulars to provide updates on academic
            policies, examinations, and other essential information. These
            circulars are accessible on the official CBSE website under the
            'Examination Circulars' section.
          </p>
        </span>
      </section>
      <section className="flex flex-col items-center px-4 py-14 xl:py-20 text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl">Mandatory Public Disclosure</h2>
        <p className="text-sm xl:text-base py-8">
        Mandatory Public Disclosure refers to the legal requirement for organizations, especially publicly listed companies, to share specific and important information with the public.<br/> For more information, visit
        </p>
        <a
          href={cbseConfig.disclosure}
          download
          className="bg-[rgba(22,122,198,0.96)] text-white underline font-semibold px-4 py-4 lg:px-10 text-xs md:text-base rounded-lg shadow-md hover:bg- transition h-fit"
        >
          Mandatory Public Disclosure {new Date().getFullYear()}
        </a>
      </section>
      <section className="relative bg-[#FAFAFA] py-16 px-6 overflow-hidden">
        {/* Background Design */}
        <figure className="absolute top-0 -left-10">
          <img
            src="/trainwavetop.svg"
            className="w-full h-full object-contain"
          />
        </figure>
        <figure className="absolute bottom-0 right-0">
          <img src="/trainwave.svg" className="w-full h-full object-contain" />
        </figure>

        {/* Content Wrapper */}
        <div className="flex flex-col lg:flex-row items-center gap-14 md:py-16 xl:px-[calc(100%-90%)]">
          <section className="w-full">
            <div className="w-32 h-2 bg-[#167AC6]" />
            <h2 className="text-4xl md:text-[53.33px] md:max-w-2xl font-bold py-10 text-[#252B42] leading-tight">
              {teacherTraining.title}
            </h2>
            <p className="text-sm md:text-xl text-[#737373] pb-7 tracking-wide">
              {teacherTraining.message}
            </p>
            <a href={teacherTraining.imageSrc}>
            <Button label="Open PDF" />
            </a>
          </section>
          <figure className="w-2/3 lg:w-full">
            <img
              src={teacherTraining.imageSrc}
              className="w-full h-full object-cover rounded-2xl"
            />
          </figure>
          {/* Principal Info */}
          {/* <div className="flex flex-col md:flex-row items-center gap-14">
            <figure className="w-48 md:w-60 rounded-lg shadow-lg">
              <img
                src={principalInfo.imageSrc}
                alt="Principal"
                className="w-full h-full object-contain"
              />
            </figure>
            <span className="text-center md:text-start">
              <h3 className="md:my-4 text-4xl md:text-6xl allura-regular">
                {principalInfo.name}
              </h3>
              <p className="md:text-lg">{principalInfo.position}</p>
              <p className="md:text-lg">{principalInfo.school}</p>
            </span>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Cbse;
