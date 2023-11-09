import { benefitCardsData } from "@/data/data"
import BenefitCard from "./BenefitCard"

const Benefits = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="services_wrapper">
          <div className="global_header">
            <h3 className='global_subtitle'>Enjoy the Advantages</h3>
            <h2 className='global_title'>
            Unlock Benefits for 
              <span> Your Success</span>
            </h2>
          </div>
          <div className="services_content">
            {benefitCardsData.map((benefit, index) => (
              <BenefitCard
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

export default Benefits