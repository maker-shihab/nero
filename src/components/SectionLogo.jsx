import Image from 'next/image'

export const SectionLogo = () => {
  return (
    <section className='section_logo'>
      <div className="container">
        <div className="section_logo_wrapper">
          <div className="logo_wrapper">
            <Image src='/images/section-logo/logo-1.svg' alt='lignt-logo' width={130} height={33} />
          </div>
          <div className="logo_wrapper">
            <Image src='/images/section-logo/logo-2.svg' alt='lignt-logo' width={130} height={33} />
          </div>
          <div className="logo_wrapper">
            <Image src='/images/section-logo/logo-3.svg' alt='lignt-logo' width={130} height={33} />
          </div>
          <div className="logo_wrapper">
            <Image src='/images/section-logo/logo-4.svg' alt='lignt-logo' width={130} height={33} />
          </div>
          <div className="logo_wrapper">
            <Image src='/images/section-logo/logo-5.svg' alt='lignt-logo' width={130} height={33} />
          </div>
        </div>
      </div>
    </section>
  )
}