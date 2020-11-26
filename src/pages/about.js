import React from "react"
import GlobalStyles from "../assets/styles/globalStyles"
import styled from "styled-components"

const MainWrapper = styled.div`
  width: 100%;

  @media (min-width: 800px) {
    width: calc(50vw - 100px);
  }
`

const ContnetWrapper = styled.div`
  position: relative;
  height: 44vh;
  padding-top: 25px;

  @media (min-width: 800px) {
    padding-top: 60px;
  }

  :first-of-type {
    margin-top: -65px;
  }

  ::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: -5vw;
    width: 100vw;
    height: 3px;
    background-color: #000;
    z-index: -1;

    @media (min-width: 800px) {
      left: -65px;
      width: 50vw;
    }
  }
`

const StyledImage = styled.img`
  width: 90vw;
  margin-top: 25px;

  @media (min-width: 800px) {
    position: absolute;
    top: 0;
    right: 0;
    width: 50vw;
    height: 100vh;
    object-fit: cover;
    margin-top: 0;
  }
`

const Title = styled.h1`
  font-size: 3.2rem;
  margin: 65px 0;
`

const Author = styled.p`
  margin-top: 10px;
  font-size: 1.2rem;
  font-weight: 600;
`

const Paragraph = styled.p`
  line-height: 150%;
  font-size: 1rem;
`

const StyledParagraph = styled.p`
  line-height: 150%;
  font-size: 1.1rem;
  width: 100%;

  @media (min-width: 800px) {
    width: 60%;
  }
`

const AboutPage = ({ data }) => (
  <>
    <GlobalStyles />
    <MainWrapper>
      <ContnetWrapper>
        <Title>About</Title>
        <StyledParagraph>
          While artists work from real to the abstract, architects must work
          from the abstract to the real.{" "}
        </StyledParagraph>
      </ContnetWrapper>
      <StyledImage
        src={data.file.childImageSharp.fluid.src}
        srcSet={data.file.childImageSharp.fluid.srcSet}
        sizes={data.file.childImageSharp.fluid.sizes}
        alt="woman with purple hair "
      />
      <ContnetWrapper>
        <Paragraph>
          Architectural design is primarily driven by the holistically creative
          manipulation of mass, space, volume, texture, light, shadow,
          materials, program, and Realistic elements such as cost, construction
          and technology, in order to achieve an end which is aesthetic,
          functional and often artistic. This distinguishes Architecture from
          engineering design, which is usually driven primarily by the creative
          application of mathematical and scientific principles.
        </Paragraph>
        <Author>Abigail Donutdough</Author>
      </ContnetWrapper>
    </MainWrapper>
  </>
)

export const query = graphql`
  {
    file(name: { eq: "hatta-abigail-photo" }) {
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

export default AboutPage
