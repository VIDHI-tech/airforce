
// import React, { useState } from "react";

// const ourSchoolConfig = {
//   imageSrc: "/hero1.JPG",
// };

// const blogData = [
//   {
//     image: "/news1.png",
//     title: "ASTE takes pride in sharing the happy news",
//     date: "August 18, 2022",
//     readTime: "4 Min",
//   },
//   {
//     image: "/news2.png",
//     title: "Cold Brew Coffee, How to Drink Cold Coffee is More Enjoyable",
//     date: "August 18, 2022",
//     readTime: "4 Min",
//   },
//   {
//     image: "/news3.png",
//     title:
//       "Celebrating our centum scorers of Class X and XII and the outstanding 100% results for both classes!",
//     date: "August 18, 2022",
//     readTime: "4 Min",
//   },
//   {
//     image: "/news1.png",
//     title: "ASTE takes pride in sharing the happy news",
//     date: "August 18, 2022",
//     readTime: "4 Min",
//   },
//   {
//     image: "/news2.png",
//     title: "Cold Brew Coffee, How to Drink Cold Coffee is More Enjoyable",
//     date: "August 18, 2022",
//     readTime: "4 Min",
//   },
//   {
//     image: "/news3.png",
//     title:
//       "Celebrating our centum scorers of Class X and XII and the outstanding 100% results for both classes!",
//     date: "August 18, 2022",
//     readTime: "4 Min",
//   },
//   {
//     image: "/news1.png",
//     title: "ASTE takes pride in sharing the happy news",
//     date: "August 18, 2022",
//     readTime: "4 Min",
//   },
//   {
//     image: "/news2.png",
//     title: "Cold Brew Coffee, How to Drink Cold Coffee is More Enjoyable",
//     date: "August 18, 2022",
//     readTime: "4 Min",
//   },
//   {
//     image: "/news3.png",
//     title:
//       "Celebrating our centum scorers of Class X and XII and the outstanding 100% results for both classes!",
//     date: "August 18, 2022",
//     readTime: "4 Min",
//   },
//   {
//     image: "/news1.png",
//     title: "ASTE takes pride in sharing the happy news",
//     date: "August 18, 2022",
//     readTime: "4 Min",
//   },
//   {
//     image: "/news2.png",
//     title: "Cold Brew Coffee, How to Drink Cold Coffee is More Enjoyable",
//     date: "August 18, 2022",
//     readTime: "4 Min",
//   },
//   {
//     image: "/news3.png",
//     title:
//       "Celebrating our centum scorers of Class X and XII and the outstanding 100% results for both classes!",
//     date: "August 18, 2022",
//     readTime: "4 Min",
//   },
// ];

// const Blogs: React.FC = () => {
//   const [visibleBlogs, setVisibleBlogs] = useState(6);

//   const handleLoadMore = () => {
//     setVisibleBlogs((prev) => prev + 6);
//   };

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="relative w-full h-[500px] flex items-center">
//         <figure className="absolute h-full w-full">
//           <img
//             src={ourSchoolConfig.imageSrc} 
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 h-full w-full bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70" />
//         </figure>
//         <span className="flex flex-col z-10 text-white text-center w-full">
//           <h2 className="text-3xl lg:text-[56px] font-bold pb-10">Blogs</h2>
//           <h3 className="text-lg xl:text-[32px] font-bold">
//             Welcome to AIR FORCE SCHOOL,<br/> ASTE, Bengaluru!
//           </h3>
//         </span>
//       </section>

//       {/* Blogs List */}
//       <section className="py-10 px-4 xl:px-10 2xl:px-[calc(100%-85%)]">
//           {blogData.slice(0, visibleBlogs).map((blog, index) => (
//             <div key={index} className="flex flex-col md:flex-row gap-10 items-center border-b pt-6 pb-14 w-full">
//               <figure className="lg:h-48 w-full md:w-1/4">
//                 <img
//                   src={blog.image}
//                   alt={blog.title}
//                   className="w-full h-full object-contain"
//                 />
//               </figure>
//               <div className="w-full md:w-3/4 space-y-3">
//                 <h3 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-medium">{blog.title}</h3>
//                 <p className="text-gray-500 text-sm md:text-base xl:text-lg 2xl:text-xl">
//                   {blog.readTime} • {blog.date}
//                 </p>
//               </div>
//             </div>
//           ))}
//         {visibleBlogs < blogData.length && (
//           <div className="flex justify-center mt-6">
//             <button
//               onClick={handleLoadMore}
//               className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition block mx-auto"
//             >
//               Load More
//             </button>
//           </div>
//         )}
//       </section>
//     </>
//   );
// };

// export default Blogs;



import React, { useState } from "react";
import { Link } from "react-router-dom";

const ourSchoolConfig = {
  imageSrc: "/hero1.JPG",
};

const blogData = [
  {
    id: "1",
    image: "/news1.png",
    title: "ASTE takes pride in sharing the happy news",
    date: "August 18, 2022",
    readTime: "4 Min",
  },
  {
    id: "2",
    image: "/news2.png",
    title: "Cold Brew Coffee, How to Drink Cold Coffee is More Enjoyable",
    date: "August 18, 2022",
    readTime: "4 Min",
  },
  {
    id: "3",
    image: "/news3.png",
    title:
      "Celebrating our centum scorers of Class X and XII and the outstanding 100% results for both classes!",
    date: "August 18, 2022",
    readTime: "4 Min",
  },
  {
    id: "4",
    image: "/news1.png",
    title: "ASTE takes pride in sharing the happy news",
    date: "August 18, 2022",
    readTime: "4 Min",
  },
  {
    id: "5",
    image: "/news2.png",
    title: "Cold Brew Coffee, How to Drink Cold Coffee is More Enjoyable",
    date: "August 18, 2022",
    readTime: "4 Min",
  },
  {
    id: "6",
    image: "/news3.png",
    title:
      "Celebrating our centum scorers of Class X and XII and the outstanding 100% results for both classes!",
    date: "August 18, 2022",
    readTime: "4 Min",
  },
  {
    id: "7",
    image: "/news1.png",
    title: "ASTE takes pride in sharing the happy news",
    date: "August 18, 2022",
    readTime: "4 Min",
  },
  {
    id: "8",
    image: "/news2.png",
    title: "Cold Brew Coffee, How to Drink Cold Coffee is More Enjoyable",
    date: "August 18, 2022",
    readTime: "4 Min",
  },
  {
    id: "9",
    image: "/news3.png",
    title:
      "Celebrating our centum scorers of Class X and XII and the outstanding 100% results for both classes!",
    date: "August 18, 2022",
    readTime: "4 Min",
  },
  {
    id: "10",
    image: "/news1.png",
    title: "ASTE takes pride in sharing the happy news",
    date: "August 18, 2022",
    readTime: "4 Min",
  },
  {
    id: "11",
    image: "/news2.png",
    title: "Cold Brew Coffee, How to Drink Cold Coffee is More Enjoyable",
    date: "August 18, 2022",
    readTime: "4 Min",
  },
  {
    id: "12",
    image: "/news3.png",
    title:
      "Celebrating our centum scorers of Class X and XII and the outstanding 100% results for both classes!",
    date: "August 18, 2022",
    readTime: "4 Min",
  },
];

const Blogs: React.FC = () => {
  const [visibleBlogs, setVisibleBlogs] = useState(6);

  const handleLoadMore = () => {
    setVisibleBlogs((prev) => prev + 6);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[500px] flex items-center">
        <figure className="absolute h-full w-full">
          <img
            src={ourSchoolConfig.imageSrc} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 h-full w-full bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70" />
        </figure>
        <span className="flex flex-col z-10 text-white text-center w-full">
          <h2 className="text-3xl lg:text-[56px] font-bold pb-10">Blogs</h2>
          <h3 className="text-lg xl:text-[32px] font-bold">
            Welcome to AIR FORCE SCHOOL,<br/> ASTE, Bengaluru!
          </h3>
        </span>
      </section>

      {/* Blogs List */}
      <section className="py-10 px-4 xl:px-10 2xl:px-[calc(100%-85%)]">
          {blogData.slice(0, visibleBlogs).map((blog, index) => (
            <Link key={blog.id} to={`/blogs/${blog.id}`} className="block">
            <div key={index} className="flex flex-col md:flex-row gap-10 items-center border-b pt-6 pb-14 w-full">
              <figure className="lg:h-48 w-full md:w-1/4">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-contain"
                />
              </figure>
              <div className="w-full md:w-3/4 space-y-3">
                <h3 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-medium">{blog.title}</h3>
                <p className="text-gray-500 text-sm md:text-base xl:text-lg 2xl:text-xl">
                  {blog.readTime} • {blog.date}
                </p>
              </div>
            </div>
            </Link>
          ))}
        {visibleBlogs < blogData.length && (
          <div className="flex justify-center mt-6">
            <button
              onClick={handleLoadMore}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition block mx-auto"
            >
              Load More
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default Blogs;
