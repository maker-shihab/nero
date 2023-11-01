import ServicesCard from './ServicesCard'

const Services = () => {
  return (
    <section className='services'>
      <div className="container">
        <div className="services_wrapper">
          <div className="global_header">
            <h3 className='global_subtitle'>OUR SERVICES</h3>
            <h2 className='global_title'>
              Services to help your
              business
              <span>drive success</span>
            </h2>
          </div>
          <div className="services_content">
            <ServicesCard icon="/images/services/services-1.svg" title="Webflow Development" pragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s" btnLink="/" />

            <ServicesCard icon="/images/services/services-2.svg" title="Design Services" pragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s" btnLink="/" />

            <ServicesCard icon="/images/services/services-3.svg" title="Branding Services" pragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s" btnLink="/" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services