
import { useState, useEffect } from 'react';
import Button from '../common/Button';

export interface CarouselSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

const carouselConfig = [
  {
    id: 1,
    image: "/hero1.JPG",
    head: "AIR FORCE SCHOOL ASTE Bangalore",
    title: "We are determined to achieve the highest standards",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    image: "/hero2.JPG",
    head: "AIR FORCE SCHOOL ASTE Bangalore",
    title: "Excellence in Education",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    image: "/hero3.JPG",
    head: "AIR FORCE SCHOOL ASTE Bangalore",
    title: "Modern Learning Environment",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    image: "/hero4.JPG",
    head: "AIR FORCE SCHOOL ASTE Bangalore",
    title: "Modern Learning Environment",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
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
    <section className="relative h-[27rem] lg:min-h-screen w-full">
      {/* Carousel Slides */}
      {carouselConfig.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
         
          <figure className="absolute inset-0 h-full w-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />
            {/* Gradient */}
            <div className="absolute bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </figure>

          {/* Content */}
          <aside className="relative flex flex-col justify-center items-center text-center md:text-left md:items-start px-6 md:px-16 lg:px-20 xl:px-28 h-full text-white max-w-4xl">
              <h1 className="text-[#167AC6] text-lg font-bold">{slide.head}</h1>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold pb-4">
                {slide.title}
              </h1>
              <p className="text-base md:text-lg text-[#A3ABB6] pb-8">
                {slide.subtitle}
              </p>
              <div className="flex  gap-4">
                <Button label="Enroll Now" iconSrc="/flight.svg" />
                <button className="font-bold text-white border-2 border-white hover:border-gray-500 px-5 md:px-12 py-3 rounded-lg transition-colors">
                  Our School
                </button>
              </div> 
          </aside>
        </div>
      ))}

      {/* Carousel Indicators */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 flex-col gap-7 items-center hidden md:flex">
        {carouselConfig.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all ${
              currentSlide === index
                ? "bg-white h-6 w-6"
                : "bg-white/30 hover:bg-white/75 w-3 border-2 h-3"
            } rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
