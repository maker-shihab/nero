import Image from 'next/image';
import Link from 'next/link';

const SetupCard = ({ icon, title, paragraphs, btnLink, btnText }) => {
  return (
    <div className='services_card'>
      <div className="services_icon">
        <Image src={icon} alt='service-image' width={120} height={100} loading='lazy' />
      </div>
      <div className="services_text">
        <h3 className='heading-3'>{title}</h3>
        <p className='paragraph-2'>
          {paragraphs}
        </p>
        <Link href={btnLink} className="btn btn-primary">
          {btnText}
        </Link>
      </div>
    </div>
  )
}

export default SetupCard;