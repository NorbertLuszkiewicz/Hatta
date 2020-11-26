import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import GlobalStyles from "../assets/styles/globalStyles"

const StyledImage = styled(Image)`
  max-width: 700px;
`

const Title = styled.h1`
  font-size: 2.4rem;
`

const Author = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 30px;
`

const MDXBox = styled.div`
  h2 {
    margin: 40px 0 20px;
  }
`

export const query = graphql`
  query querySingleArticles($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        author
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      body
    }
  }
`

const PostLayout = ({ data }) => {
  return (
    <div>
      <GlobalStyles />
      <Title>{data.mdx.frontmatter.title}</Title>
      <Author>{data.mdx.frontmatter.author}</Author>
      <StyledImage
        fluid={data.mdx.frontmatter.featuredImage.childImageSharp.fluid}
      />
      <MDXBox>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </MDXBox>
    </div>
  )
}

export default PostLayout
