import Determined from "@/components/home/Determined";
import EnquiryForm from "@/components/home/EnquiryForm";
import Hero from "@/components/home/Hero";
import InfoCards from "@/components/home/InfoCards";
import Navbar from "@/layouts/Navbar";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import Footer from "@/layouts/Footer";

export default function HomePage() {
  
  return (
    <main>
      <Navbar />
      <Hero/>
      <UpcomingEvents/>
      <Determined/>
      <EnquiryForm/>
      <InfoCards/>
      <Footer/>
    </main>
  );
}
