import Determined from "@/components/home/Determined";
import EnquiryForm from "@/components/home/EnquiryForm";
import Gallery from "@/components/home/Gallery";
import Hero from "@/components/home/Hero";
import InfoCards from "@/components/home/InfoCards";
import Newssection from "@/components/home/News";
import Principal from "@/components/home/Principal";
import StudentJourney from "@/components/home/StudentJourney";
import ToppersSection from "@/components/home/ToppersSection";
import UpcomingEvents from "@/components/home/UpcomingEvents";

export default function HomePage() {
  return (
    <main className="w-full">
      <Hero />
      <UpcomingEvents />
      <Determined />
      <EnquiryForm />
      <InfoCards />
      <StudentJourney/>
      {/* <Gallery/> */}
      <Principal/>
      <ToppersSection/>
      <Newssection/>
    </main>
  );
}
