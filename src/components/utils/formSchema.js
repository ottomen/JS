import * as yup from 'yup';

export const validationSchema = yup.object({
    name: yup.string('Enter your full name').required('Full name is required'),
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    company: yup
        .string('Enter your company name')
        .min(2, 'Company name should be of minimum 2 characters length')
        .required('Company is required'),
});
