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
    <div
      style={{
        paddingTop: '200px',
        paddingLeft: '30px',
        height: '100vh'
      }}
    >
      <h1>Sign Up</h1>
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
      <h2>Sorry, <a href="https://accounts.google.com" target="_blank">Google Verification</a> would go here, but this App isn't big enough for that</h2>
    </div>
  );
};
  
export default SignUp;