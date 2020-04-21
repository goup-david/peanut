import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PolaroidItem from "../components/PolaroidItem"
import "../style.scss"

const IndexPage = props => {
  const data = props.data.allImageSharp.edges

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
    allImageSharp(
      sort: { fields: fields___exif___meta___dateTaken, order: ASC }
    ) {
      edges {
        node {
          fields {
            exif {
              meta {
                dateTaken(difference: "", formatString: "")
              }
            }
          }
          fluid(maxWidth: 500, quality: 100) {
            # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  }
`
