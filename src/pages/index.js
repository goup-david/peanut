import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PolaroidItem from "../components/PolaroidItem"
import "../style.scss"

const IndexPage = props => {
  const data = props.data.allFile.edges

  return (
    <Layout>
      <SEO title="Peanut's Blog - Homepage" />
      <div className="container">
        <div className="container__items">
          {data.map(imageData => (
            <PolaroidItem key={imageData.id} data={imageData} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "uploads" } }) {
      edges {
        node {
          id
          childImageSharp {
            fixed(width: 400, height: 350, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`