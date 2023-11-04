import Image from 'next/image'
import Link from 'next/link'

const ServicesCard = ({ icon, title, pragraph, btnLink }) => {
  return (
    <div className='services_card'>
      <div className="services_icon">
        <Image src={icon} alt='service-image' width={70} height={70} loading='lazy' />
      </div>
      <div className="services_text">
        <h3 className='heading-3'>{title}</h3>
        <p className='paragraph-2'>
          {pragraph}
        </p>
        <Link href={btnLink} className="btn btn-primary">
          Learn More
        </Link>
      </div>
    </div>
  )
}

export default ServicesCard