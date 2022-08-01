import React from 'react';
import './about.css'
  
const About = () => {
  return (
    <body style={{backgroundColor: 'rgba(20,20,20,1)',
    color: 'white', paddingBottom: '50vh'}}>

    <div style = {{
        paddingTop: '150px',
        marginLeft: '30px'
      }}>
        <div class="flex-container">

          <div class="flex-child">
            <img src="/Kennedi.jpg"
                 style={{borderRadius: '100%', width: '400px', height: '400px'}}/>
            <h2>Kennedi Stewart — Lead Developer</h2>
            <h3>Email: kvmarie12@gmail.com</h3>
          </div>

          <div class="flex-child">
            <img src="/Alan.jpg"
                 style={{borderRadius: '100%', width: '400px', height: '400px'}}/>
            <h2>Alan Ji — Developer / Engineer</h2>
            <h3>Email: GeeWhyAlan@outlook.com</h3>
          </div>
        </div>
        <br/>
        <hr/>
        <div class="flex-container">

          <div class="flex-child">
            <img src="/Zariya.jpg"
                 style={{borderRadius: '100%', width: '400px', height: '400px'}}/>
            <h2>Zariya Scullark — Graphic Designer</h2>
            <h3>Instagram: instagram.com/astridsoid</h3>
          </div>

          <div class="flex-child">
            <img src="/Douglass.jpg"
                 style={{borderRadius: '100%', width: '400px', height: '400px'}}/>
            <h2>Douglass Scarboro — Shop Manager</h2>
            <h3>Email: 281880@student.scsk12.org</h3>
          </div>
        </div>
      </div>
    </body>
  );
};
  
export default About;