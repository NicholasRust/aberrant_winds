import React from "react"
import Layout from "../components/layout"
import Server from "../components/Server"
import { graphql } from "gatsby"
import PaginationLinks from '../components/PaginationLinks'

const serverList = (props) => {
  const posts = props.data.allMarkdownRemark.edges
  const { currentPage, numberOfPages } = props.pageContext

  return (
    <Layout pageTitle={`Page: ${currentPage}`}>
      {posts.map(({ node }) => (
        <Server
          key={node.id}
          slug={node.fields.slug}
          title={node.frontmatter.title}
          author={node.frontmatter.author}
          date={node.frontmatter.date}
          body={node.excerpt}
          status={node.frontmatter.status}
          fluid={node.frontmatter.image.childImageSharp.fluid}
        />
      ))}
      <PaginationLinks currentPage={currentPage} numberOfPages={numberOfPages}/>
    </Layout>
  )
}

export const serverListQuery = graphql`
  query serverListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM Do YYYY")
            author
            status
            image {
              childImageSharp {
                fluid(maxWidth: 650, maxHeight: 371) {
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

export default serverList
