import Link from 'next/link'

const Expreance = () => {
  return (
    <section className='expreance'>
      <div className="container">
        <div className="expreance__wrapper">
          <h2 className="expreance_title">Exeperience a smarter way to close deals.</h2>
          <p className="expreance_subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
          <div className="expreance_btns">
            <Link href='/' className='btn btn-primary'>Clone this template</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Expreance