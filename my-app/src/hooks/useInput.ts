import { useFormik,FormikErrors,FormikTouched } from "formik"
import * as Yup from "yup"

export interface formikProps {
    email: string
    password: string
}

export const useInput = ():[formikProps,
    FormikErrors<formikProps>,
    FormikTouched<formikProps>,(e: React.ChangeEvent<any>) =>void,
    (e?: React.FormEvent<HTMLFormElement> | undefined) => void] => {

    const initialValues: formikProps = {
        email: "",
        password: ""
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string().required(),
        password: Yup.string().required()
    })

    const formik = useFormik<
    formikProps>({
        initialValues,
        validationSchema,
        onSubmit:(values)=>{
            console.log(values)
            handleReset(values)
        }
    })

    const {handleChange,handleReset,handleSubmit,values,errors,touched} = formik

    return [values,errors,touched,handleChange,handleSubmit]
}