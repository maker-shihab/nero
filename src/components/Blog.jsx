import BlogCard from "./BlogCard"

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
            <BlogCard></BlogCard>
            <BlogCard></BlogCard>
            <BlogCard></BlogCard>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog