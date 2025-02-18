import Determined from "@/components/home/Determined";
import EnquiryForm from "@/components/home/EnquiryForm";
import Hero from "@/components/home/Hero";
import InfoCards from "@/components/home/InfoCards";
import Newssection from "@/components/home/News";
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
      <ToppersSection/>
      <Newssection/>
    </main>
  );
}
