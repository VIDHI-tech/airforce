import { useState, useEffect } from 'react';
import Button from '../common/Button';

export interface CarouselSlide {
    id: number;
    image: string;
    title: string;
    subtitle: string;
}
// Carousel configuration
const carouselConfig = [
  {
    id: 1,
    image: "/hero1.JPG",
    head: "AIR FORCE SCHOOL ASTE Banglore",
    title: "We are determined to achieve the highest standards",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 2,
    image: "/hero2.JPG",
    head: "AIR FORCE SCHOOL ASTE Banglore",
    title: "Excellence in Education",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 3,
    image: "/hero3.JPG",
    head: "AIR FORCE SCHOOL ASTE Banglore",
    title: "Modern Learning Environment",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 4,
    image: "/hero4.JPG",
    head: "AIR FORCE SCHOOL ASTE Banglore",
    title: "Modern Learning Environment",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselConfig.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen">
      {/* Carousel Slides */}
      {carouselConfig.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image with Overlay */}
          <figure className="absolute h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-contain"
            />
            {/* Gradient Overlay */}
            <div className="absolute bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          </figure>

          {/* Content */}
          <aside className="relative flex items-center lg:ml-20 h-full">
              <div className="px-">
                <h1 className='text-[#167AC6] text-lg font-bold'>
                  {slide.head}
                </h1>
                <h1 className="text-4xl md:text-6xl font-bold text-white pb-4 max-w-3xl">
                  {slide.title}
                </h1>
                <p className="text- md:text-lg text-[#A3ABB6] pb-8 max-w-2xl">
                  {slide.subtitle}
                </p>
                <div className="flex gap-4">
                  <Button label="Enroll Now" iconSrc="/flight.svg" />;
                  <button className="font-bold text-white border-2 border-white hover:border-gray-500 px-5 md:px-12 py-3 rounded-lg transition-colors">
                    Our School
                  </button>
                </div>
              </div>
          </aside>
        </div>
      ))}

      {/* Carousel Indicators */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-7 items-center">
        {carouselConfig.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all ${
              currentSlide === index
                ? 'bg-white h-6 w-6'
                : 'bg-white/0 hover:bg-white/75 w-3 border-2 h-3'
            } rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}