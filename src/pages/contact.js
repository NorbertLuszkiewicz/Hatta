import React from "react"
import styled from "styled-components"
import { Formik } from "formik"
import GlobalStyles from "../assets/styles/globalStyles"
import PageInfo from "../components/PageInfo/PageInfo"
import Button from "../components/Button/Button"

const StyledInput = styled.input`
  display: block;
  border: 2px solid black;
  background: none;
  font-size: 20px;
  height: ${({ as }) => (as ? "200px" : "auto")};
  width: 100%;
  margin-bottom: ${({ as }) => as && "40px"};

  @media (min-width: 800px) {
    width: ${({ as }) => (as ? "500px" : "300px")};
  }
`

const StyledLabel = styled.label`
  margin: 30px 0 10px;
  display: block;
  font-size: 14px;
  font-weight: bold;
`

const Informational = styled.span`
  margin-left: 20px;
  font-weight: normal;
  color: #777;
`

const pageData = {
  title: "contact",
  paragraph: `While artists work from real to the abstract, architects must work from the abstract to the real.`,
}

const ContactPage = () => (
  <>
    <GlobalStyles />
    <PageInfo title={pageData.title} paragraph={pageData.paragraph} />
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      validate={values => {
        const errors = {}
        if (!values.email) {
          errors.email = "Required"
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address"
        }
        return errors
      }}
      onSubmit={(values, { resetForm }) => {
        resetForm()
      }}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        errors,
      }) => (
        <form onSubmit={handleSubmit}>
          <StyledLabel htmlFor="name">Name</StyledLabel>
          <StyledInput
            id="name"
            type="text"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          <StyledLabel htmlFor="e-mail">
            E-mail <Informational>{errors.email}</Informational>
          </StyledLabel>
          <StyledInput
            id="email"
            type="e-mail"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <StyledLabel>Message</StyledLabel>
          <StyledInput
            as="textarea"
            type="text"
            name="message"
            id="message"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
          />
          <Button type="submit" disabled={isSubmitting}>
            send message
          </Button>
        </form>
      )}
    </Formik>
  </>
)

export default ContactPage
