import Link from 'next/link';
const CTA = ({data}) => {
  const { title, pragraph, btnLink, btnText } = data;
  return (
    <section className='ctaArea'>
      <div className="container">
        <div className="ctaWrapper">
          <h2 className='ctaTitle'>
            {title}
          </h2>
          <p className='ctaPragraph'>
            {pragraph}
          </p>
          <div className="ctaBtns">
            <Link href={btnLink} className='btn btn-primary'>{btnText}</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA;