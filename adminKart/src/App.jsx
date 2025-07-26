import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cap from './pages/Cap';
import BlogPage from './pages/BlogPage';



function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cap" element={<Cap />} />
          {/* <Route path="/course-finder" element={<CourseFinder />} /> */}
          <Route path="/blog" element={<BlogPage/>}/>
          {/* <Route path="/login" element={<LoginPage/>}/> */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
