import Image from "next/image"
import Link from "next/link"

const BlogCard = ({title, thumb, content, btnLink, category}) => {
  return (
    <div className='blog_card'>
      <div className="blog_card_head">
        <Image src={thumb} width={250} height={220} alt='team-icon' />
      </div>
      <div className="blog_card_body">
        <h4 className="blog_tag">{category}</h4>
        <h3 className="heading-3">{title}</h3>
        <p className="paragraph">{content}</p>
        <div className="secton_btn">
          <Link href={btnLink} className="btn btn-primary">Learn More</Link>
        </div>
      </div>
    </div>
  )
}

export default BlogCard