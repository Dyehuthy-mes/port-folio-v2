import React from 'react'
import Header from './Header'
import Marcos from '../images/sadas.png'
import Img from 'gatsby-image'
import {useStaticQuery, graphql} from 'gatsby'

function Page({children}) {

/*     const data = useStaticQuery(graphql `
        query{
          placeholderImage: file(relativePath: { eq: "sadas.png"}) {
            childImageSharp {
              fluid(max-width:300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        `)
     */


    return (
        <div className='wrapper'>
            <Header/>
                <div className='imageController'>
                    {/* <Img fluid={data.placeholderImage.childImageSharp.fluid}/> */}
                    <img src= {Marcos} alt='sadasdas' width="200" height="300" />
                </div>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                
            {children}
        </div>
    )
}

export default Page
