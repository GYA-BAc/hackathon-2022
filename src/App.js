import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import SideBar from './components/SideBar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages'
import Links from './pages/links'
import About from './pages/about';
import SignUp from './pages/signup';
import SignIn from './pages/signin';
import Messaging from './pages/messaging'
  
function App() {
  return (
    <>
    <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/links' element={<Links />} />
        <Route path='/about' element={<About />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/messaging' element={<Messaging />} />
      </Routes>
    </Router>
    <div style={{textAlign: 'center', backgroundColor: 'rgba(236, 50, 50, .7)', paddingBottom: '50px'}}>
      <br/>
      <h1><u>Contact Us</u></h1>
      <h2>YourFeedbackWillTotallyBeRead@noreply.com</h2>
      <h2>(000) 555-1234</h2>
    </div>
    </>
  );
}
  
export default App;
