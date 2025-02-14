import Determined from "@/components/home/Determined";
import EnquiryForm from "@/components/home/EnquiryForm";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/home/Navbar";
import UpcomingEvents from "@/components/home/UpcomingEvents";

export default function HomePage() {
  
  return (
    <main>
      <Navbar />
      <Hero/>
      <UpcomingEvents/>
      <Determined/>
      <EnquiryForm/>
    </main>
  );
}
