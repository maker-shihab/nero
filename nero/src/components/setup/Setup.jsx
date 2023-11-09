import { setupCardData } from '@/data/data'
import SetupCard from './SetupCard'

const Setup = () => {
  return (
    <section className="services">
    <div className="container">
      <div className="services_wrapper">
        <div className="global_header">
          <h3 className='global_subtitle'>Get Started in Minutes</h3>
          <h2 className='global_title'>
          Social Media Management and 
            <span> Engagement Toolkit</span>
          </h2>
        </div>
        <div className="services_content">
          {setupCardData.map((benefit, index) => (
            <SetupCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              paragraphs={benefit.paragraphs}
              btnLink={benefit.btnLink}
              btnText={benefit.btnText}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
  )
}

export default Setup