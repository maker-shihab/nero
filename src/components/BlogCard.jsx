import Image from "next/image"
import Link from "next/link"

const BlogCard = () => {
  return (
    <div className='blog_card'>
      <div className="blog_card_head">
        <Image src="/public/images/team/sketch.svg" width={250} height={220} alt='team-icon' />
      </div>
      <div className="blog_card_body">
        <h4 className="blog_tag">BUSINESS</h4>
        <h3>Learn how to get started with webflow interactions.</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <Link href='/' className="btn btn-primary">Learn More</Link>
      </div>
    </div>
  )
}

export default BlogCard