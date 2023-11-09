import Image from 'next/image'

const AboutUs = () => {
  return (
    <section className='aboutUs'>
      <div className="container">
        <div className="aboutUs_wrapper">
          <div className="about__illustration">
            <Image src="/public/images/team/sketch.svg" width={450} height={450} alt='team-icon' />
          </div>
          <div className="about_text">
            <div className="global_header">
              <h3 className='global_subtitle'>ABOUT US</h3>
              <h2 className='global_title'>
                Creative and Technology Partner for Growing Brands
              </h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <br />
              <p>Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            </div>
            <div className="about_feature">
              <div className="ab_feature_illustration">
                <Image src="/public/images/team/sketch.svg" width={40} height={40} alt='team-icon' />
              </div>
              <div className="ab_feature_text">
                <h4>Search Engine Optimization</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs