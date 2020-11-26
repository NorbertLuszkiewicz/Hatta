import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import PageInfo from "../components/PageInfo/PageInfo"
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
  margin: 30px 0;

  @media (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const GalleryPage = ({ data }) => {
  return (
    <>
      <GlobalStyles />

      <PageInfo title={pageData.title} paragraph={pageData.paragraph} />
      <ArticlesWrapper>
        {data.allFile.nodes.map(item => {
          return <Image key={item.id} fluid={item.childImageSharp.fluid} />
        })}
      </ArticlesWrapper>
    </>
  )
}

export const query = graphql`
  {
    allFile(filter: { name: { regex: "/gallery/" } }) {
      nodes {
        id
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  }
`

export default GalleryPage
