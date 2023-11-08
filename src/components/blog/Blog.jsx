import BlogCard from "./BlogCard";
const blogCards = [
  {
    thumb: "/images/blog/1.jpeg",
    title: "Why will webflow dominate the web in 2020.",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    category: "DESIGN",
    btnLink: '/'
  },
  {
    thumb: "/images/blog/2.jpeg",
    title: "How to craft a perfect marketing campaign.",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    category: "BUSINESS",
    btnLink: '/'
  },
  {
    thumb: "/images/blog/3.jpeg",
    title: "Learn how to get started with webflow interactions.",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    category: "LEARN",
    btnLink: '/'
  },
];

const Blog = () => {
  return (
    <section className='blog_area'>
      <div className="container">
        <div className="blog_wrapper">
          <div className="blog_header global_header">
            <h3 className='global_subtitle'>BLOG & CASE STUDIES</h3>
            <h2 className='global_title'>
              Our Latest News & Updates
            </h2>
          </div>
          <div className="blog_content">
            {
              blogCards.map((blog, index) => (
                <BlogCard title={blog.title} key={index} thumb={blog.thumb} category={blog.category} content={blog.content} btnLink={blog.btnLink} />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog