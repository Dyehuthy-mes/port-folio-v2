import React  from 'react'
import Header from './Header'
import ProjectsSection from './ProjectsSection'
import Img from 'gatsby-image'
import {useStaticQuery, graphql} from 'gatsby'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import { useEffect, useState } from 'react';

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

    const [checked, setOnclick] = useState(localStorage.getItem("theme") === "dark" ? true : false);

  useEffect(() => {
    document
    .getElementsByTagName("HTML")[0]
    .setAttribute("data-theme", localStorage.getItem("theme"));
}, [checked]);

const toggleThemeChange = () => {
  if (checked === false) {
    localStorage.setItem("theme", "dark");
    setOnclick(true);
  } else {
    localStorage.setItem("theme", "light");
    setOnclick(false);
  }
};

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
              <p className="textMain">Soy Marcos Campot, estudiante de sistemas, actualmente estoy interesado en desarrollarme profesionalmente en COBOL.
              Mas abajo te dejo algunas capturas de proyectos hechos en React y mis codigos en <a href ="#cobolCodigos">COBOL</a>.</p>
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
