import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../Authentication/AuthCenter/AuthContext";
import Swal from "sweetalert2";


const Login = () => {
    const { userLogin } = useContext(authContext)
    const navigate = useNavigate()



    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        userLogin(email, password)
            .then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'You are successfully logged in',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/')
            })

        // console.log(email, password)
    }
    return (
        <div className="hero min-h-screen bg-base-100 ">
            <div className="flex w-5/6 lg:flex-row">
                <div className="lg:w-full  text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">SBS File Generator</p>
                </div>
                <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-300">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">

                            <input type="submit" className="btn btn-primary" value='Login' />
                            <p className="text-left mt-5">
                                No Account?<Link to='/registration' href="#" className="mt-10 text-left text-red-600"> Register</Link>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;