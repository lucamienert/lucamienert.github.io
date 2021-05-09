import React, { useState, useEffect } from 'react'
import './App.css'

import Header from './sites/Header'
import Home from './sites/Home'
import Projects from './sites/Projects'
import Contact from './sites/Contact'
import Footer from './sites/Footer'

import ScaleLoader from 'react-spinners/ScaleLoader'

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="App">
    {
      loading ?
        (
          <div className='loader'>
            <ScaleLoader
              color={'#3f51b5'}
              loading={loading}
            />
          </div>
        )
      :
      (
        <div className="container">
          <Header children={<Home />}/>
          <Home />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )
    }
    </div>
  );
}

export default App
