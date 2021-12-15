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
        <div className='wrapper'>
            <Header/>
              <div className="imgController">
                <Img fluid={data.placeholderImage.childImageSharp.fluid}
                  className="imgStyle"
                  alt="marcoscampot"
                />
              </div>
            <p> Hi there !! I'm a frontend developer from Buenos Aires. I am Currently research JS technologies</p> 
            <a href= "https://www.linkedin.com/in/marcos-campot-687152216/" target="blank" > <FontAwesomeIcon icon={faLinkedin} /> </a>
            <a href= "https://github.com/Dyehuthy-mes" target="blank" > <FontAwesomeIcon icon={faGithub} /> </a>
            <p> Check out some of my projects...</p> 
            <ProjectsSection/>
            {children}
        </div>
    )
  }
