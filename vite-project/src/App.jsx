import React from 'react'
import About from './components/About'
import Interests from "./components/Interests";
import Profile from "./components/Profile";
import Footer from "./components/Footer"

export default function App (){
  return (
    <div className='app'>
      <Profile />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}
