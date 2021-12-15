import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import "../styles/ProjectSection.scss"

function ProjectsSection() {

    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "sadas.png" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

    return (
        <div className='projectSection'>
            <p>WeatherApp</p>
            <p>MovieApp</p>
            <p>Portfolio alternate version</p>
        </div>
    )
}

export default ProjectsSection
