import React  from 'react'
import Header from './Header'
import ProjectsSection from './ProjectsSection'
import Img from 'gatsby-image'
import {useStaticQuery, graphql} from 'gatsby'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

export default Page

function Page({children}) {

    const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "ICO.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400, maxHeight: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)

    return (
      <div className='main'>
        <Header/>
        <div className='wrapper'>
              <div className="imgController">
                <Img fluid={data.placeholderImage.childImageSharp.fluid}
                  className="imgStyle"
                  alt="marcoscampot"
                />
              </div>
            <p>Gracias por visitar mi CV y como dice arriba: Bienvenido...</p>
              <p className="textMain">Soy Marcos Campot, estudiante de sistemas, actualmente estoy interesado en desarrollarme profesionalmente en COBOL.
              Mas abajo te dejo algunas capturas de proyectos hechos en React y mis codigos en COBOL.</p>
        </div>
        <hr/> 
            <ProjectsSection/>
            {children}
            <div className='footer'>
            <a href= "https://www.linkedin.com/in/marcos-campot-687152216/" target="blank" > <FontAwesomeIcon icon={faLinkedin} /> </a>
            <a href= "https://github.com/Dyehuthy-mes" target="blank" > <FontAwesomeIcon icon={faGithub} /> </a>
            <div className='footer__text'> AppWeb desarrollada con Gatsby </div>
          </div>
      </div>
      
    )
  }
