import * as React from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { Field, Box, Button, font, margin } from '~/components'

import styled from 'styled-components'

const Link = styled('a')`
  text-decoration: none;
  ${font}
  ${margin}
`

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Informe seu email')
    .email('Campo email obrigatorio'),
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
      username: '',
      password: '',
    },
  })

  return (
    <form onSubmit={handleSubmit}>
      <Field
        type="text"
        name="username"
        label="E-mail"
        mb={3}
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
        disable={isSubmitting}
        error={touched.username && errors.username}
      />
      <Field
        type="password"
        name="password"
        label="Senha"
        mb={3}
        value={values.password}
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
          Entrar
        </Button>

        <Box color="gray" fontSize={1} m={1}>
          Não possui cadastro?{' '}
          <Link href="#" fontWeight="bold" color="gray">
            Cadastre-se!
          </Link>
        </Box>
      </Box>
    </form>
  )
}
