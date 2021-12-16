import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import "../styles/ProjectSection.scss"
import Image1 from "../images/weatherAppExample.png"
import Image2 from "../images/weatherApp.png"

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
             <img src ={Image2}
                alt="proyectoPreview"
                className="projectsSectionImgStyle"
            />
        </div>
    )
}

export default ProjectsSection
