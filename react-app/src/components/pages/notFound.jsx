import React from 'react'
import { Link } from "react-router-dom"
import "./notFound.sass";

const NotFound = () => {
  return (
    <div id="not_found_page">
      <h1>404</h1>
      <h2>Ooops!!</h2>
      <p>That page doesn't exist or is unavailable.</p>
      <Link to="/" className="light-box">Go Back to home/works</Link>
    </div>
  )
}

export default NotFound
