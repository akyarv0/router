import React from 'react'
import { useNavigate } from 'react-router-dom';
import './NotFound.css'


const NotFound = () => {

    const navigate = useNavigate();
    const goHome = () => {
        navigate("/");
    };

    
  return (
    <div className="notFound">

    <img src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif" alt="page not found" className="img" onClick={goHome} />

    <h1>Page Not Found</h1>
    <h2>Click anywhere to go home</h2>

       

   



    </div>
  )
}

export default NotFound