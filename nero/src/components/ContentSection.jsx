import Image from "next/image"
import Link from "next/link"

const ContentSection = () => {
  return (
    <section className='content_section'>
      <div className="container">
        <div className="content_wrapper">
          <div className="single_content content_one">
            <div className="global_header">
              <h3 className='global_subtitle'>CONTENT SECTION</h3>
              <h2 className='global_title'>
                Creative and Technology Partner for Growing Brands
              </h2>
              <p className="paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <br />
              <p className="paragraph">
                Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
              </p>
            </div>
            <div className="content_illustration">
              <Image src="/images/content-section.png" width={550} height={350} alt='team-icon' />
            </div>
          </div>

          <div className="single_content content_two">
            <div className="global_header">
              <h3 className='global_subtitle'>CONTENT SECTION</h3>
              <h2 className='global_title'>
                Creative and Technology Partner for Growing Brands
              </h2>
              <p className="paragraph">
                Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
              </p>
              <div className="secton_btn">
                <Link href="/" className="btn btn-primary">Learn More</Link>
              </div>
            </div>
            <div className="content_illustration">
              <Image src="/images/hero-illustration.png" width={550} height={350} alt='team-icon' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContentSection