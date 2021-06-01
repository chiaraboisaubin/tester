
import React, { Component } from 'react';
import { Link, link } from 'react-router-dom';
export default class ContaierOne extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="layout-content-grid-1">

          <div className="layout-container-l">
            <h2 className="project-titles"> Context</h2>
            <article> A web app for finding the right vitanims personal. I re-design the app from a project for my UI certification. </article>
          </div>

          <div className="layout-container-l2">
            <div className="layout-container-l22">
              <h2 className="project-titles"> Role </h2>
              <p> UI Designer </p>
            </div>

            <div className="layout-container-l22">
              <h2 className="project-titles"> Time Period </h2>
              <p> April 2021 - May 2021</p>
            </div>
          </div>

          <div className="layout-container-r2">
            <h2 className="project-titles"> Skills & Tools </h2>
            <ul className="skill-list-project">
              <li className="skills-style-proj">Wireframing</li>
              <li className="skills-style-proj">Prototyping</li>
              <li className="skills-style-proj">Mockup</li>
              <li className="skills-style-proj">Style Guide</li>
              <li className="skills-style-proj">Photoshop</li>
              <li className="skills-style-proj">Abobe XD</li>
              <li className="skills-style-proj">Figma</li>
            </ul>
          </div>

          <div className="layout-container-l3">
            <h2 className="project-titles"> User Flow </h2>

            <img className="img-1" src="https://i.ibb.co/dQxD8CG/Artboard-1.png" alt="Artboard-1" border="0" />


            <h2 className="project-titles"> Wireframe sketches </h2>
            <img className="img-1" src="https://i.ibb.co/KFcJPkD/Artboard-3.png" alt="Artboard-3" border="0" />

          </div>
          <div className="layout-container-l4">

          <h2 className="project-titles"> Mid-fieldty prototype </h2>

            <img src="https://i.ibb.co/qkqLFNb/Artboard-31.png" alt="Artboard-31" border="0" />
            <img className="img-1" src="https://i.ibb.co/cNWk3qz/Artboard-51.png" alt="Artboard-51" border="0" />
            <img className="img-1" src="https://i.ibb.co/rZTmqxy/Artboard-41.png" alt="Artboard-41" border="0" />
          </div>

          <div className="layout-container-l5">
          <h2 className="project-titles">  Responsive Layouts & Grids </h2>
        
            <img  src="https://i.ibb.co/L8MxXjV/mockup-2.png" alt="mockup-2" border="0" />
            <img  src="https://i.ibb.co/Y214VPg/mobile-grid-1.png" alt="mobile-grid-1" border="0"/>
            <img  src="https://i.ibb.co/JyHjtc7/Artboard-4.png" alt="Artboard-4" border="0"/>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/ON8OQTS_3tA?rel=0?version=3&autoplay=1&controls=0&&showinfo=0&loop=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; loop; picture-in-picture" allowfullscreen=""></iframe>
          </div>

          <div className="layout-container-l6">
            <h2 className="project-titles"> Style Guide </h2>

            <h3>Typoagraphy</h3>
            <img src="https://i.ibb.co/gMvbStZ/Screen-Shot-2021-05-30-at-11-56-00-PM-2.png" alt="Screen-Shot-2021-05-30-at-11-56-00-PM-2" border="0" />

            <h3> Icons </h3>
            <img src="https://i.ibb.co/4R54WM8/Screen-Shot-2021-05-30-at-11-56-21-PM-2.png" alt="Screen-Shot-2021-05-30-at-11-56-21-PM-2" border="0" />
           
            <h3> UI Elements </h3>
            <img src="https://i.ibb.co/wRYtFmR/Screen-Shot-2021-05-30-at-11-56-16-PM-2.png" alt="Screen-Shot-2021-05-30-at-11-56-16-PM-2" border="0" />

            <h3> Color Palette </h3>
            <img src="https://i.ibb.co/CWNMh5X/Screen-Shot-2021-05-30-at-11-56-04-PM-2.png" alt="Screen-Shot-2021-05-30-at-11-56-04-PM-2" border="0" />

            <h3> Photos </h3>
            <img src="https://i.ibb.co/5c4pGwF/Screen-Shot-2021-05-30-at-11-56-08-PM-2.png" alt="Screen-Shot-2021-05-30-at-11-56-08-PM-2" border="0" />

            <h3> Logos </h3>
            <img src="https://i.ibb.co/TgkXjx2/Screen-Shot-2021-05-30-at-11-55-54-PM-2.png" alt="Screen-Shot-2021-05-30-at-11-55-54-PM-2" border="0" />

          </div>
          <div className="layout-container-l7">
            <h2 className="project-titles"> Mockups  </h2>
            <img  className="img-1" src="https://i.ibb.co/jL7Kgtx/mock-d-3.png" alt="mock-d-3" border="0" />
            <img src="https://i.ibb.co/kgfVZKZ/mockup-Ipad-1.png" alt="mockup-Ipad-1" border="0"/>
        </div>
        </div>
      </React.Fragment>
    );
  }
}