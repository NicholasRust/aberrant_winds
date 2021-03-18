import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"
import Server from "../components/Server"
import PaginationLinks from "../components/PaginationLinks"
import { Row, Col } from "reactstrap"

const IndexPage = () => {
  const postsPerPage = 10
  let numberOfPages

  return (
    <Layout pageTitle="Welcome to Aberrant Winds!" pageId="index">
      <SEO title="Home" />
      <StaticQuery
        query={indexQuery}
        render={data => {
          numberOfPages = Math.ceil(
            data.allMarkdownRemark.totalCount / postsPerPage
          )
          return (
            <div>
              <Row>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                  <Col md="6">
                    <Server
                      key={node.id}
                      title={node.frontmatter.title}
                      author={node.frontmatter.author}
                      slug={node.fields.slug}
                      date={node.frontmatter.date}
                      body={node.excerpt}
                      fluid={node.frontmatter.image.childImageSharp.fluid}
                      tags={node.frontmatter.tags}
                    />
                  </Col>
                ))}
              </Row>
            </div>
          )
        }}
      />
    </Layout>
  )
}
//<PaginationLinks currentPage={1} numberOfPages={numberOfPages} />
const indexQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 10
      filter: { frontmatter: { type: { eq: "server" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM Do YYYY")
            author
            type
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
