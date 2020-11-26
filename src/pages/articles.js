import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import PageInfo from "../components/PageInfo/PageInfo"
import Preview from "../components/ArticlePreview/ArticlePreview"
import GlobalStyles from "../assets/styles/globalStyles"

const pageData = {
  title: "articles",
  paragraph:
    "While articles work from real to the abstract, architects must work from the abstact tp the real",
}

const ArticlesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 50px;
  margin-bottom: 30px;

  @media (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const ArticlesPage = ({ data }) => {
  return (
    <>
      <GlobalStyles />

      <PageInfo title={pageData.title} paragraph={pageData.paragraph} />
      <ArticlesWrapper>
        {data.allMdx.nodes.map(item => {
          return (
            <Preview
              key={item.frontmatter.slug}
              title={item.frontmatter.title}
              image={item.frontmatter.featuredImage.childImageSharp.fluid}
              slug={item.frontmatter.slug}
              excerpt={item.excerpt}
            />
          )
        })}
      </ArticlesWrapper>
    </>
  )
}

export const query = graphql`
  {
    allMdx {
      nodes {
        frontmatter {
          title
          slug
          author
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 700, maxHeight: 500) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        excerpt(pruneLength: 50)
      }
    }
  }
`

export default ArticlesPage
