import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { useEffect, useRef, useState } from "react";

interface ApplicationLayoutProps {
  children: React.ReactNode;
}
export function ApplicationFooter({ children }: ApplicationLayoutProps) {
  const navbarRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    if (navbarRef.current) {
      // Get the navbar height when the component mounts
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
  }, []);
  return (
    <main className="relative">
      <div
        ref={navbarRef}
        className="fixed top-0 left-0 right-0 z-[999] bg-white"
      >
        <Navbar />
      </div>
      {/* space */}
      <div style={{ height: `${navbarHeight}px` }} />
      {children}
      <Footer />
    </main>
  );
}
