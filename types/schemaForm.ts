import * as yup from 'yup';

const authSchema = {
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  password: yup.string().min(8, "Senha deve ter pelo menos 8 caracteres")
    .matches(/[A-Za-z]/, "Senha deve conter pelo menos uma letra")
    .matches(/[0-9]/, "Senha deve conter pelo menos um número")
    .matches(/[^A-Za-z0-9]/, "Senha deve conter pelo menos um símbolo")
    .required("Senha é obrigatória")
}

export const loginSchema = yup.object({
  email: authSchema.email,
  password: authSchema.password
})

export const userCreateSchema = yup.object({  
  email: authSchema.email,
  password: authSchema.password,
  password_confirmation: authSchema.password,
  name: yup.string().min(8, "O nome do usuário deve conter no mínimo 8 caracteres").max(16, 'O nome do usuário deve conter no máximo 16 caracteres').required("Nome é obrigatório"),
  birthdate: yup.date().typeError("Data Inválida").required('Data de nascimento é obrigatória'),
  phone_number: yup.string().matches(/^(\(?\d{2}\)?\s?)?(9\d{4})-?\d{4}$/, 'Número de telefone inválido').required('Número de telefone é obrigatório'),
});

export const intermediarySchema = yup.object({
  email: authSchema.email,
  phone_number: yup.string().matches(/^(\(?\d{2}\)?\s?)?(9\d{4})-?\d{4}$/, 'Número de telefone inválido').required('Número de telefone é obrigatório')
})