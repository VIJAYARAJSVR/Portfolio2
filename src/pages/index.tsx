import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import Marquee from "react-fast-marquee"

import '../styles/index.css'

import All_Skill_List from '../data/all_skills.json'


// const LinkedinStyle = { color: "blue", fontSize: "1.5em" }
const Marquee_Style = { color: "white", fontSize: "1.1em" }
const Style_inline = { display: "inline" }
const Style_company_marquee = { width: "100px", height: "65px", margin: "auto" }

const IndexPage = () => (
  <Layout>
    <div className="container-fluid mt-3 text-center text-white">
      <div className="container">
        <h1 className=" mb-2">VIJAYARAJ SUYAMBU</h1>
        {/*<MyAudio/>*/}
      </div>
      <Marquee speed={120} pauseOnHover={true} className="mb-3" style={Marquee_Style}>
        Thank you for visiting my portfolio website. I have developed this website from scratch ( I didn't use
        any templates).
      </Marquee>
    </div>
    <section className="py-5 text-center container mt-1">
<TechnicalSkillsList/>
      {/*<div className="row py-lg-5">*/}
      {/*  <div className="col-lg-6 col-md-8 mx-auto">*/}
      {/*    <h1 className="fw-light">Hello world ! </h1>*/}
      {/*    <p className="lead text-muted"> Welcome to this Boostrap 5 Gatsby Starter</p>*/}
      {/*    <StaticImage*/}
      {/*      src="../images/gatsby-astronaut.png"*/}
      {/*      width={300}*/}
      {/*      quality={95}*/}
      {/*      formats={["AUTO", "WEBP"]}*/}
      {/*      alt="A Gatsby astronaut"*/}
      {/*      className="img-fluid"*/}
      {/*    />*/}

      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="row">*/}
      {/*  <Link to="/about/" className="btn btn-primary my-2">About</Link>*/}
      {/*  <Link to="/page-2/" className="btn btn-secondary my-2">Go to page 2</Link>*/}
      {/*</div>*/}
    </section>
  </Layout>
)

export default IndexPage

// export const Head = () => (
//     <Seo />
// )

// @ts-ignore
const SpecificSkills = ({skills}) => {
  let arrSkill = skills as [string]
  console.log(arrSkill);

  return (
    <div className="mb-4">
      {
        // @ts-ignore
        skills.map((techskill, index) => {

          let actualskill = techskill

          if (actualskill.trim() === "dotnet") {
            actualskill = ".NET"
          }

          let image = `../images/skills/ios.png`

          try {
            image = `../images/skills/` + techskill.toLowerCase() + `.png`
          } catch (e) {
            console.log(e);
            image = `../images/skills/default.png`
          }

          let comma = (skills.length - 1 === index) ? "" : ",";


          return (
            <div className="me-3 d-inline-block fs-4 text-white" key={index}>

              <StaticImage
                src="../images/skills/ios.png"
                quality={100}
                alt={actualskill}
                className="me-2 project_skill_Image"
              />
              {/*<StaticImage*/}
              {/*  src={image}*/}
              {/*  width={300}*/}
              {/*  quality={95}*/}
              {/*  alt={actualskill}*/}
              {/*  className="me-2"*/}
              {/*/>*/}

              {/*<img className="project_skill_Image me-2"*/}
              {/*     src={image}*/}
              {/*     alt={actualskill}/>*/}

              {actualskill} <span className="ms-1">{comma}</span>

            </div>

          )
        })

      }
    </div>
  )
}
const TechnicalSkillsList = () => {
  return (
    <div className="mt-3 mb-5">
      <div className="row row-cols-3 mt-5 mb-5">
        <div/>
        <div>
          <h3 style={{color: 'darkkhaki'}}>Technical Skills </h3>
        </div>

      </div>
      <div className="mt-3 mb-5">
        {
          All_Skill_List.map((tech) => {
            return (
              <div className="row row-cols-2 mb-3 mt-2 " key={tech.id}>

                <h3 className="fs-4 col-2 text-start" style={{color: 'darkkhaki'}}>
                  {tech.category}<span className="ms-1">:</span></h3>
                <div className="col-10 text-start project_Field">
                  <SpecificSkills skills={tech.skills}/>
                </div>

              </div>
            )
          })
        }

      </div>
    </div>
  )
}


// below is Gatsby built-in Head API which replaces  react-helmet
export const Head: HeadFC = () => <title>Portfolio</title>