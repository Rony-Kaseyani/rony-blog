import React from "react"
import { Link } from "gatsby"

const index = () => {
  return (
    <>
      Hello world!
      <p>
        <Link to="/blog">View Blog</Link>
        <p>
          <Link to="/account">My Account</Link>
        </p>
        <p>
          <Link to="/about">About</Link>
        </p>
        <p>
          <Link to="/contact">Contact</Link>
        </p>
      </p>
    </>
  )
}

export default index
