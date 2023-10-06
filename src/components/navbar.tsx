import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import  "../styles/navbar.css"

const isActive = ({ isCurrent }) => {
  // return isCurrent ? { className: "nav-link active" } : {className: "nav-link"}
  return isCurrent ? { className: "nav-link ActiveLink" } : {className: "nav-link inActiveLink "}
}

const ExactNavLink = props => (
  <Link getProps={isActive} {...props} />
)

interface ImenuLinksProps {
  name: string,
  link: string,
}

// const Navbar = ({ siteTitle }) => {
// @ts-ignore
const Navbar = ({ menuLinks }) => {
  return (

    <nav className="navbar navbar-expand-md navbar-dark bg-primary fs-4">
      <div className="container text-center">
        {/*<Link to="/" className="navbar-brand" href="#">{siteTitle}</Link>*/}
        <Link to="/" className="navbar-brand" href="#">Vijayaraj's portfolio</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-navbar"
                aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>

        <div className="collapse navbar-collapse" id="main-navbar">

          <ul className="ms-5 navbar-nav me-auto mb-2 mb-md-0 ">
            {

              menuLinks.map((props:ImenuLinksProps) => (
                <li key={props.name} className="nav-item ms-3">
                    <ExactNavLink to={props.link}> {props.name} </ExactNavLink>
                </li>
              ))

            }


          </ul>

        </div>

      </div>
    </nav>
  )
}

Navbar.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
}

Navbar.defaultProps = {
  name: ``,
  link: ``,
}


// Navbar.propTypes = {
//   siteTitle: PropTypes.string,
// }
//
// Navbar.defaultProps = {
//   siteTitle: ``,
// }

export default Navbar
