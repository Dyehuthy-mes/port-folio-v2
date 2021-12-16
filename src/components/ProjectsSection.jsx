import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import "../styles/ProjectSection.scss"

function ProjectsSection() {

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
  `)

    return (
        <div className='projectSection'>
           <Img fluid={data.placeholderImage.childImageSharp.fluid}
                  className="projectsSectionImgStyle"
                  alt="weatherapp"
                />
        </div>
    )
}

export default ProjectsSection
