import React from 'react'
/* import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image' */
import "../styles/ProjectSection.scss"
import Image1 from "../images/weatherAppExample.png"
import Image2 from "../images/weatherApp.png"
import Image3 from "../images/bebop1.png"
import Image4 from "../images/bebop2.png"
import Image5 from "../images/bebop3.png"
import Image6 from "../images/CV1.png"
import Image7 from "../images/cobol1.png"
import Image8 from "../images/cobol2.png"
import Image9 from "../images/cobol3.png"

function ProjectsSection() {
/* 
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "weatherAppExample.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `) */

    return (
        <div className='projectSection'>
          <h1> WeatherApp </h1>
          <p> Sencilla aplicacion de clima que utiliza una API gratuita </p>
           <img src ={Image1}
                alt="proyectoPreview"
                className="projectsSectionImgStyle"
            />
            <hr/>
             <img src ={Image2}
                alt="proyectoPreview"
                className="projectsSectionImgStyle"
            />
            <hr/>
             <h1> MoviesApp </h1>
          <p> Sencilla aplicacion para busqueda de peliculas </p>
           <img src ={Image3}
                alt="proyectoPreview"
                className="projectsSectionImgStyle"
            />
            <p> /*   el slide-car es draggeable   */ </p>
            <hr/> 
             <img src ={Image4}
                alt="proyectoPreview"
                className="projectsSectionImgStyle"
            />
            <hr/>
             <img src ={Image5}
                alt="proyectoPreview"
                className="projectsSectionImgStyle"
            />
            <hr/>
            <h1> Primer CV </h1>
          <p> Una especie de carta de presentacion al estilo retro que originalmente habia escrito en JS vanilla,
            lo pase a React, aunque no tenga mucha funcionalidad, para practicar... </p>
            <img src ={Image6}
                alt="proyectoPreview"
                className="projectsSectionImgStyle"
            />
            <hr/>
            <h1 id="cobolCodigos"> COBOL </h1>
            <h1> PORCENTAJES </h1>
          <p> Programita sencillo para calcular porcentajes... </p>
            <img src ={Image7}
                alt="proyectoPreview"
                className="projectsSectionImgStyle"
            />
            <hr/>
            <img src ={Image8}
                alt="proyectoPreview"
                className="projectsSectionImgStyle"
            />
            <hr/>
            <h1> Ejecuccion del programa </h1>
            <img src ={Image9}
                alt="proyectoPreview"
                className="projectsSectionImgStyle"
            />
        </div>
    )
}

export default ProjectsSection
