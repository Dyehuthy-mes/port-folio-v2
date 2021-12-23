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
      <div className='main' id='top'>
        <Header/>
        <hr/> 
        <div className='wrapper'>
              <div className="imgController">
                <Img fluid={data.placeholderImage.childImageSharp.fluid}
                  className="imgStyle"
                  alt="marcoscampot"
                />
              </div>
            <p>Gracias por visitar mi pagina personal y como dice arriba: Bienvenido...</p>
              <p className="textMain">Soy Marcos Campot, estudiante de sistemas, hace 1 año que incursione en programación estudiando de forma autodidacta, empezando por Python, luego pase a JavaScript orientándome a desarrollo web
               específicamente como frontend y actualmente estoy estudiando COBOL y es en lo que tengo mas interés en desarrollarme profesionalmente. A continuacion te dejo algo de mis proyectos con React y codigos en  <a href ="#cobolCodigos">COBOL</a>.</p>
        </div>
        <hr/> 
            <ProjectsSection/>
            {children}
          <div className='footer' >
            <a href= "https://www.linkedin.com/in/marcos-campot-687152216/" target="blank" > <FontAwesomeIcon icon={faLinkedin} /> </a>
            <a href= "https://github.com/Dyehuthy-mes" target="blank" > <FontAwesomeIcon icon={faGithub} /> </a>
          </div>
      </div>
      
    )
  }
