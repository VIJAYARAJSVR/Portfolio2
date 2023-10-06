import * as React from "react"
import { HeadFC, Link } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/layout"

export const DashboardPage = () => {
  return (
    <Layout>
    <>DashboardPage</>
    </Layout>
  );
};



export default DashboardPage

// below is Gatsby built-in Head API which replaces  react-helmet
export const Head: HeadFC = () => <title>Dashboard</title>