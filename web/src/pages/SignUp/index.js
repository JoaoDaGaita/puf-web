import * as React from 'react'
import axios from 'axios'
import * as yup from 'yup'
import { useFormik } from 'formik'

import { Field, Box, Button } from '~/components'

const validationSchema = yup.object().shape({
  name: yup.string().required('Campo nome obrigatório'),
  email: yup
    .string()
    .required('Campo email obrigatório')
    .email('email invalido'),
  password: yup.string().required('Campo password obrigatório'),
})

export const SignUp = () => {
  const onSubmit = async () => {
    //ev.preventDefault()

    try {
      await axios.post('http://localhost:9901/users', values)
    } catch (error) {
      console.log(error)
    }
  }

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
    <Box flex={1} flexbox="column" center>
      <Box style={{ width: 380 }}>
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
          <Box flexbox center>
            <Button type="submit" disable={isSubmitting} loading={isSubmitting}>
              Registrar
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  )
}
