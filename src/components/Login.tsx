import { useForm } from "react-hook-form"
import "../styles/login/login.css"
import { FieldValues } from "react-hook-form/dist/types"
import { useLoginUserMutation } from "../app/slice/slice"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
const Login = () => {

    const {register, handleSubmit, formState: {errors}} = useForm()
    const nav = useNavigate()
    const [login, response] = useLoginUserMutation()
    const handleLogin = async (data: FieldValues) => {
        await login(data).unwrap()
        .then(res => nav(`user/${res.user.id}`))
        .catch(err => Swal.fire(`error`,err.data, `error`))
    }

    return (
        <form onSubmit={handleSubmit(data => handleLogin(data))} className="login-form-container">
            <div className="login-header">
                <h2>Login Form</h2>
                <p>Enter your credentials</p>
            </div>
            
            <div className="form-group">
                <input type="text"
                  {...register('email',{required: true, 
                    pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address"}})} 
                    placeholder="Email"/>

                    {errors.email && <small className="error">Invalid email.</small>}

                <input type="password" {...register('password', {required: true, minLength: 8})} placeholder="Password" />

                {errors.password && <small className="error">Password must have 8 characters.</small>}
            </div>
            <button type="submit" className="btn-primary">Login</button>
        </form>


     );
}
 
export default Login;