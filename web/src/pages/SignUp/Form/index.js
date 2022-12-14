import * as React from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { Field, Box, Button, font, margin } from '~/components'
import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

const Link = styled(RouterLink)`
  text-decoration: none;
  ${font}
  ${margin}
`
const validationSchema = yup.object().shape({
  name: yup.string().required('Campo nome obrigatório'),
  email: yup
    .string()
    .required('Campo email obrigatório')
    .email('email invalido'),
  password: yup.string().required('Campo password obrigatório'),
})

export const Form = ({ onSubmit }) => {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    isSubmitting,
    handleSubmit,
  } = useFormik({
    onSubmit,
    validationSchema,
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  return (
    <form onSubmit={handleSubmit}>
      <Field
        type="text"
        name="name"
        label="Nome"
        value={values.name}
        mb={3}
        onChange={handleChange}
        onBlur={handleBlur}
        disable={isSubmitting}
        error={touched.name && errors.name}
      />
      <Field
        type="text"
        name="email"
        label="E-mail"
        mb={3}
        onChange={handleChange}
        onBlur={handleBlur}
        disable={isSubmitting}
        error={touched.email && errors.email}
      />
      <Field
        type="password"
        name="password"
        label="Senha"
        mb={3}
        onChange={handleChange}
        onBlur={handleBlur}
        disable={isSubmitting}
        error={touched.password && errors.password}
      />
      <Box flexbox="column" center>
        <Button
          type="submit"
          disable={isSubmitting}
          loading={isSubmitting}
          m={1}
        >
          Registrar
        </Button>

        <Link to="/" color="gray" fontWeight="bold" fontSize={1} m={1}>
          Já sou cadastrado
        </Link>
      </Box>
    </form>
  )
}
