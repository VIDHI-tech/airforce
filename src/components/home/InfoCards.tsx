
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
    description: 'Our streamlined admission process ensures a smooth transition for new students joining our prestigious institution.',
    aspectRatio: '16:9'
  },
  {
    id: 2,
    image: '/card2.png',
    title: 'Fee Structure',
    description: 'Transparent and comprehensive fee structure covering all academic and extra-curricular activities.',
    aspectRatio: '4:3'
  },
  {
    id: 3,
    image: '/card3.png',
    title: 'Gallery',
    description: 'Explore our state-of-the-art facilities and vibrant campus life through our extensive photo gallery.',
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
      <div className="absolute -bottom-20 left-0 z-10 w-80 h-96">
        <img src='/infoplane.png' className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="relative z-20 px-4 py-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-white text-center xl:mb-16">
          Information on AirForce School
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-20 p-10 md:px-0 xl:px-[calc(100%-85%)]">
          {infoCards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl shadow-xl transform transition-transform hover:-translate-y-2 justify-between flex flex-col"
            >
              <div className='h-1/2 w-full aspect-square'>
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold pb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 pb-4">
                  {truncateText(card.description)}
                </p>
                <button className="font-bold p-2 text-base inline-flex items-center rounded-3xl border border-[#167AC6] text-[#167AC6] hover:text-blue-700">
                  Learn More
                  <ChevronRight className="pl-1 h-6 w-6" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}