import React, {useRef, useState} from 'react';
  
const SignUp = () => {
  const [error, setError] = useState("")
  const nameRef = useRef()
  const passRef = useRef()

  function registerUser(e) {
    const name = nameRef.current.value
    const pass = passRef.current.value
    if (name === "messages"||name==="current"||!name) {setError("Choose a different Username"); return}
    if (!pass) {setError("Type in a Password"); return}
    if (!JSON.parse(localStorage.getItem(name))) {
      localStorage.setItem(name, JSON.stringify(pass))
      nameRef.current.value = null
      passRef.current.value = null
    } else {
      setError("Username Taken!")
    }
  }

  return (
    <body>
    
    <div
      style={{
        paddingTop: '150px',
        paddingLeft: '30px',

      }}
    >
      <img src="https://nationalbarbers.org/wp-content/uploads/2021/04/A-Barbers-Guide-to-Perfecting-Time-Management-Skills.png"
           style={{width: "90%", margin: 'auto', display: 'block', borderRadius: '10%'}}
           alt="inspirational"/>
      <hr/>
      <h1 style={{textAlign: 'center'}}><u>Join Us</u></h1>
      <h4 style={{paddingLeft: '20px'}}>Professional membership with iParlor management offers area owners an effortless way to locate open-end and available booth rental locations and lines. Transparent prices gives owners and renters the ability to budget and scale each business model for maximum probability. With weekly, monthly, and annual membership, iParlor seamlessly handles multiple tasks for annual membership. iParlor seamlessly handles multiple tasks for each member. Marketing, advertising, scheduling, and payment services are just a few of many perks! 
      </h4>
      <hr/>
      <h2>Username</h2>
      <input ref={nameRef} type="text"/>
      <br/>
      <h2>Password</h2>
      <input ref={passRef} type="text"/>
      <button onClick={registerUser}>Register</button>
      <br/>
      <h3 style={{color: 'red'}}>{error}</h3>
      <br/>
    </div>
    </body>
  );
};
  
export default SignUp;