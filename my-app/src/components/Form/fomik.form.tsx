import { useFormik } from "formik"
import * as Yup from "yup"
import { apiAuth } from "../../../api/auth"
import ButtonForm from "./button.form"
import InputForm from "./Input.form"
import { formikProps } from "./formikUtil/types"
import { initialValues } from "./formikUtil/initValues"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/contextAuth"
import { useContext } from "react"

const FormikForm = () => {

    const navigate = useNavigate()
    const { dispatch } = useContext(AuthContext)

    const validationSchema = Yup.object().shape({
        email: Yup.string().required(),
        password: Yup.string().required()
    })

    const formik = useFormik<
        formikProps>({
            initialValues,
            validationSchema,
            onSubmit: async (values) => {
                const response = await apiAuth.login()
                navigate("/home")
                dispatch.loginUser({
                    id: response.id,
                    name: response.name
                })
                handleReset(values)
            }
        })

    const { handleChange, handleReset, handleSubmit, values, errors, touched } = formik

    return (
        <form onSubmit={handleSubmit} className="flex flex-col w-1/2 h-1/2 p-2 space-y-2 bg-white z-30 rounded-lg border-2 border-slate-300">
            <InputForm
                type="text"
                name="email"
                placeholder="ingrese email"
                onChange={handleChange}
                value={values.email}
                touched={touched.email!}
                errors={errors.email}
            />
            <InputForm
                type="text"
                name="password"
                placeholder="ingrese clave"
                onChange={handleChange}
                value={values.password}
                touched={touched.password!}
                errors={errors.password}
            />
            <ButtonForm name='Login' type='submit' />
        </form>
    )
}

export default FormikForm