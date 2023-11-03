import Image from 'next/image'

const Team = () => {
  return (
    <section className='team_area'>
      <div className="contianer">
        <div className="team_wrapper">
          <div className="team_card">
            <div className="team_card_illustration">
              <Image src="/public/images/team/team-ava-1.png" width={450} height={500} alt='team-icon' />
            </div>
            <div className="team_card_text">
              <div className="team_text_top">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                </p>
              </div>
              <div className="team_text_profile">
                <div className="team_cpName">
                  <Image src="/public/images/team/sketch.svg" width={120} height={35} alt='team-icon' />
                </div>
                <h4>Joran Lee (Head of Marketing)</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team