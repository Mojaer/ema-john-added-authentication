import React, { useContext, useState } from 'react';
import { authContext } from '../Context/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { space } from 'postcss/lib/list';

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'
    // console.log(from)


    const { handleSignIn } = useContext(authContext)
    const [show, setShow] = useState(false)

    const handleUserSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        handleSignIn(email, password)
            // .then((user) => { console.log(user) })
            .catch((error) => { console.log(error) })

        form.reset()
        navigate(from, { replace: true })
    }


    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Login</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleUserSignIn}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input autoComplete='on' type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input autoComplete='on' type={show ? 'text' : 'password'} name='password' placeholder="password" className="input input-bordered" required />
                                    <small onClick={() => { setShow(!show) }}>
                                        {
                                            show ? <span>Hide </span> : <span>Show </span>
                                        }
                                        Password
                                    </small>
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-error">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;