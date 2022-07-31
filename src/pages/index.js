import React from 'react';
  
const Home = () => {
  return (
    <body style={{
      backgroundImage: 'url(/Loose2.png)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top center',
      backgroundColor: 'lightblue',
      backgroundSize: '100% 100%',
      color: 'purple',
    }}>
      <div
        style={{
          paddingTop: '150px',
          paddingLeft: '30px',
          height: '100vh'
        }}
      >

        <h1 style={{textAlign: 'center'}}>Welcome to Loose Ends™!</h1>
        <br/><br/><br/>
        <h2>Tired of Scheduling Difficulties...</h2>
        <br/>
        <h2>...Management Issues...</h2>
        <br/>
        <h2>...And Loose Ends?</h2>
        <br/><br/>
        <h2>Try our Cutting Edge Service!</h2>
      </div>

    </body>
  );
};
  
export default Home;