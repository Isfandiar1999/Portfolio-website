import React from 'react'
import "./about.css"
// import ME from "../../assets/me-about.jpg"
import ME from "../../assets/mee.jpg"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"


const About = () => {
  return (
    <section id='about'>
      <h5>Haqqımda bəzi</h5>
      <h2>Məlumatlar</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className='about__me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
           <div className="about__cards">
             <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Təhsil</h5>
                <small>ADNSU-Kopyuter Elmləri ixtisası məzunu</small>
             </article>

             <article className='about__card'>
                <FiUsers className='about__icon'/>
                <h5>Kurs</h5>
                <small>CodersAzerbaijan, Front-End məzunu</small>
             </article>

             <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
                <h5>Proyektlər</h5>
                <small>Öz çapımda çox sayda orta-kiçik proyektim var</small>
             </article>
           </div>

           <p>
           Doğru layihə gəldiyi təqdirdə (frilans)
           işləməyə həmişə hazıram. Mənimlə əlaqə saxlamaqdan çəkinməyin. Suallarınızı cavablandırmağa şad olaram.
           </p>

           <a href="#contact" className='btn btn-primary'>Let's Talk</a>
           {/* </div> */}
        </div>
      </div>
    </section>
  )
}

export default About