
import { ChevronRight } from 'lucide-react';

interface InfoCard {
  id: number;
  image: string;
  title: string;
  description: string;
  aspectRatio: '16:9' | '4:3' | '1:1';
}

const infoCards: InfoCard[] = [
  {
    id: 1,
    image: '/card1.png',
    title: 'Admission Process',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    aspectRatio: '16:9'
  },
  {
    id: 2,
    image: '/card2.png',
    title: 'Fee Structure',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    aspectRatio: '4:3'
  },
  {
    id: 3,
    image: '/card3.png',
    title: 'Gallery',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    aspectRatio: '1:1'
  }
];

const truncateText = (text: string, wordLimit: number = 20) => {
  const words = text.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  return text;
};

export default function InfoCards() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/infobg.gif"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Plane Image */}
      <div className="absolute -bottom-20 left-0 z-10 w-64 h-72">
        <img src='/infoplane.png' className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="relative z-20 px-4 py-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-white text-center xl:mb-16">
          Information on AirForce School
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-10 p-10 md:px-0 xl:px-[calc(100%-80%)]">
          {infoCards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl shadow-xl transform transition-transform hover:-translate-y-2 justify-between flex flex-col"
            >
              <div className=''>
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-6 py-4">
                <h3 className="text-lg font-semibold pb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 pb-4 text-xs">
                  {truncateText(card.description)}
                </p>
                <button className="font-bold px-2 text-xs inline-flex items-center rounded-3xl border border-[#167AC6] text-[#167AC6] hover:text-blue-700">
                  Learn More
                  <ChevronRight className="w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}