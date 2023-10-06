import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import * as styles from "./layout.module.css"
import Footer from "./Footer"

import Navbar from "./navbar"
import "./layout.scss"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  //below is the static  graphql query
  // Destructure query return down to site:
  const {site} = useStaticQuery(
    graphql`
        query SiteTitleQuery {
            site {
                siteMetadata
                {
                    title
                    menuLinks
                    {
                        name
                        link
                    }
                }
            }
        }
    `
  )

  const Style = { backgroundColor: "#282c34" }
  return (
    <div className="container-fluid p-0" style={Style} >

      {/*<Navbar siteTitle={data.site.siteMetadata?.title || `Title`} />*/}
      <Header
        siteTitle={site.siteMetadata.title}
        menuLinks={site.siteMetadata.menuLinks}
      />
      <main id="primary" className={styles.App_background}>
        {children}
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
