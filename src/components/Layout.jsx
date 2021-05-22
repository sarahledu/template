import React from "react"
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import "../sass/tailwind.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="bg-palette5 py-12 ">
        <div className="container h-screen"> {children}</div>
      </div>
      <Footer />
    </>
  )
}

export default Layout
