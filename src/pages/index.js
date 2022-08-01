import React from 'react';
  
const Home = () => {
  return (
    <body style={{
      backgroundColor: 'rgba(61, 61, 61, 1)',
      color: 'white',
      paddingLeft: '40px',
      paddingTop: '150px',
    }}>
      <h1 style={{textAlign: 'center'}}>Welcome to iParlor™!</h1>
      <hr/>
      <img src="https://nationalbarbers.org/wp-content/uploads/2021/04/A-Barbers-Guide-to-Perfecting-Time-Management-Skills.png"
           style={{borderRadius: '10%'}}/>
      <div
        style={{
          height: '80vh'
        }}
      >
        <br/><br/><hr/>
        <h2><i>"Always a party in your parlor!"</i></h2>
        <br/>
        <h3>Bridging the Gap between Business Owners and Business Operators</h3>
      </div>

      <div style={{position: 'bottom', textAlign: 'right'}}><b>Created in 2022 __</b></div>

    </body>
  );
};
  
export default Home;