
// import { useParams } from "react-router-dom";

// const blogData = [
//   { id: "1", image: "/news1.png", title: "ASTE takes pride in sharing the happy news", content: "Full blog content here..." },
//   { id: "2", image: "/news2.png", title: "Cold Brew Coffee, How to Drink Cold Coffee is More Enjoyable", content: "Full blog content here..." },
//   { id: "3", image: "/news3.png", title: "Celebrating our centum scorers of Class X and XII", content: "Full blog content here..." },
// ];

// const BlogDetail = () => {
//   const { id } = useParams();
//   const blog = blogData.find((b) => b.id === id);

//   if (!blog) {
//     return <p className="text-center text-red-500">Blog not found!</p>;
//   }

//   return (
//     <div className="container mx-auto px-4 py-10">
//       <h1 className="text-3xl font-bold">{blog.title}</h1>
//       <img src={blog.image} alt={blog.title} className="w-full max-h-[400px] object-cover mt-4" />
//       <p className="mt-6 text-gray-700">{blog.content}</p>
//     </div>
//   );
// };

// export default BlogDetail;


import { useParams } from "react-router-dom";
import blogData from "../blogs";

const BlogDetail: React.FC = () => {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === id);

  if (!blog) {
    return <p className="text-center text-xl mt-10">Blog not found.</p>;
  }

  return (
    <section className="py-10 px-4 xl:px-10 2xl:px-[calc(100%-85%)]">
      <figure className="lg:h-64 w-full mb-6">
        <img src={blog.image} className="w-full h-full object-cover" />
      </figure>
      <h1 className="text-3xl md:text-5xl font-bold">{blog.title}</h1>
      <p className="text-gray-500 text-sm md:text-base xl:text-lg">{blog.date} • {blog.readTime}</p>
      <p className="mt-6 text-lg">Blog content goes here...</p>
    </section>
  );
};

export default BlogDetail;
