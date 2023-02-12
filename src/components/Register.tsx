import { useForm } from "react-hook-form"
import { useAddUserMutation } from "../app/slice/slice"
import "../styles/login/login.css"
import { FieldValues } from "react-hook-form/dist/types"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"

const Register = () => {
    const nav = useNavigate()

    const [addUser, response] = useAddUserMutation()
    const registerUser = async (data: FieldValues) => {
        await addUser({email:data.email, password: data.password}).unwrap()
        .then(data => nav(`user/${data.user.id}`))
        .catch(err => Swal.fire(`error`, err.data, `error`))
    }

    const {register, handleSubmit, formState: {errors}} = useForm()
    
   
    return ( 
       
        <form onSubmit={handleSubmit((data) => registerUser(data))} className="login-form-container">
            <div className="login-header">
                <h2>Registration Form</h2>
            </div>
           
            <div className="form-group">
                <input type="text" 
                {...register('email',{required: true, 
                pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address"}})} 
                placeholder="Email"/>
                {errors.email && <small className="error">Invalid email.</small>}

                <input type="password" 
                {...register('password', 
                {required: true, minLength: 8})} 
                placeholder="Password" />
                {errors.password && <small className="error">Password must have 8 characters.</small>}

                <input type="password" 
                {...register('confirmPassword',
                {required: true, 
                minLength: 8, 
                validate: (value, formValues) => value === formValues.password})}
                placeholder="Confirm Password" />
                {errors.confirmPassword && <small className="error">Password not match.</small>}
            </div>
            <button type="submit" className="btn-primary" >Register</button>
        </form>


     );
}
 
export default Register;