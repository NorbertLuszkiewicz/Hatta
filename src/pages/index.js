import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import GlobalStyles from "../assets/styles/globalStyles"
import Button from "../components/Button/Button"

const ContentWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  @media (min-width: 800px) {
    width: 65%;
  }

  h1 {
    font-size: 65px;
    line-height: 100%;
    margin: 0;

    @media (min-width: 800px) {
      font-size: 85px;
    }
  }

  p {
    margin: 25px 0 40px;
    width: 60%;
  }
`

const ImageWrapper = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;

  @media (min-width: 800px) {
    width: 35%;
  }
`

const IndexPage = ({ data }) => (
  <>
    <GlobalStyles />
    <ContentWrapper>
      <h1>Your new space</h1>
      <p>
        While artists work from real to the abstract, archetects must work from
        the abstact to the real.
      </p>
      <Button>estimate project</Button>
    </ContentWrapper>
    <ImageWrapper
      src={data.file.childImageSharp.fluid.src}
      srcSet={data.file.childImageSharp.fluid.srcSet}
      sizes={data.file.childImageSharp.fluid.sizes}
      alt="flower and sofa"
    />
  </>
)

export const query = graphql`
  {
    file(name: { eq: "hero" }) {
      childImageSharp {
        fluid {
          src
          srcSet
          sizes
        }
      }
    }
  }
`

export default IndexPage
