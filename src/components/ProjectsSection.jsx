import React from 'react'
import "../styles/ProjectSection.css"
import Image1 from "../images/weatherAppExample.png"
import Image2 from "../images/weatherApp.png"
import Image3 from "../images/bebop1.png"
import Image4 from "../images/bebop2.png"
import Image5 from "../images/bebop3.png"
import Image6 from "../images/CV1.png"
import Image7 from "../images/cobol1.png"
import Image8 from "../images/cobol2.png"
import Image9 from "../images/cobol3.png"
import Image10 from "../images/cobol4.png"
import Image11 from "../images/cobol5.png"
import Image12 from "../images/cobol6.png"
import Image13 from "../images/cobol7.png"
import Image14 from "../images/cobol8.png"

function ProjectsSection() {

    return (
        <div className='projectSection'>
          <a className="projectSectionLinks" 
                href="https://github.com/Dyehuthy-mes/weather-app"
                target="blank"> WeatherApp 
          </a>
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
             <a className="projectSectionLinks" 
                href="https://github.com/Dyehuthy-mes/bebop-movies"
                target="blank"> MoviesApp
             </a>
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
            <a className="projectSectionLinks" 
                href="https://github.com/Dyehuthy-mes/portfolio-react"
                target="blank"> Primer CV 
            </a>
          <p> Una especie de carta de presentacion al estilo retro que originalmente habia escrito en JS vanilla,
            lo pase a React, aunque no tenga mucha funcionalidad, para practicar... </p>
            <img src ={Image6}
                alt="proyectoPreview"
                className="projectsSectionImgStyle"
            />
            <hr/>
            <h1 id="cobolCodigos"> COBOL </h1>
            <hr/>
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
            <h1> Ejecución del programa </h1>
            <img src ={Image9}
                alt="proyectoPreview"
                className="projectsSectionImgStyle"
            />
            <hr/>
            <h1> Programa para crear un archivo de registro </h1>
            <img src ={Image10}
                alt="proyectoPreview"
                className="projectsSectionImgStyle"
            />
            <hr/>
            <img src ={Image11}
                alt="proyectoPreview"
                className="projectsSectionImgStyle"
            />
            <hr/>
            <h1> Ejecución del programa </h1>
            <img src ={Image12}
                alt="proyectoPreview"
                className="projectsSectionImgStyle"
            />
            <hr/>
            <h1> Programa para leer y mostrar en pantalla un archivo de registro </h1>
            <img src ={Image13}
                alt="proyectoPreview"
                className="projectsSectionImgStyle"
            />
            <hr/>
            <h1> Ejecución del programa </h1>
            <img src ={Image14}
                alt="proyectoPreview"
                className="projectsSectionImgStyle"
            />
            {/* <a className='inicioBoton'
               href='#top'>
                 TOP
            </a> */}
        </div>
    )
}

export default ProjectsSection
