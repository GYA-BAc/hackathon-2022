import React, {useRef, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
  
const SignIn = () => {
  const [error, setError] = useState("")
  const nameRef = useRef()
  const passRef = useRef()
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem("current") !== null) {
        navigate('/messaging')
    }
  }, [])

  function checkLogin(e) {
    const name = nameRef.current.value
    const pass = passRef.current.value
    if (!(JSON.parse(localStorage.getItem(name)) === pass)) {
        setError("Incorrect Username or Password")
        return
    }
    localStorage.setItem("current", JSON.stringify(name))
    navigate("/messaging");
  }

  return (
    <div
      style={{
        paddingTop: '200px',
        paddingLeft: '30px',
        height: '100vh'
      }}
    >
      <h1>Sign In</h1>
      <hr/>
      <h2>Username</h2>
      <input ref={nameRef} type="text"/>
      <br/>
      <h2>Password</h2>
      <input ref={passRef} type="text"/>
      <button onClick={checkLogin}>Sign In</button>
      <br/>
      <h3 style={{color: 'red'}}>{error}</h3>
      <br/>
      <h2>Sorry, <a href="https://accounts.google.com" target="_blank">Google Verification</a> would go here, but this App isn't big enough for that</h2>
      <br/>
    </div>
  );
};
  
export default SignIn;