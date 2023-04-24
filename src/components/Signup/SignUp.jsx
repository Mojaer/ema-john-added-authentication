import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { authContext } from '../Context/AuthContext';

const SignUp = () => {

    const [error, setError] = useState('')
    const [show, setShow] = useState(false)

    const { handleRegistration } = useContext(authContext)

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const forgetPassword = form.confirmPassword.value;
        // console.log(email, password, forgetPassword)
        setError('')
        if (password !== forgetPassword) {
            setError('password did not match')
            return
        }
        if (password.length < 6) {
            setError('more than 6 characters required')
            return
        }
        handleRegistration(email, password)
            .then(user => console.log(user))
            .catch(err => setError(err.message))
    }

    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Sign up</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSignUp}>
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
                                    <input autoComplete='on' type={show ? 'text' : "password"} name='password' placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input autoComplete='on' type={show ? 'text' : "password"} name='confirmPassword' placeholder="confirmPassword" className="input input-bordered" required />
                                    <small onClick={() => { setShow(!show) }}>
                                        {
                                            show ? <span>Hide </span> : <span>Show </span>
                                        }
                                        Password
                                    </small>
                                </div>
                                <label className="label mt-4">
                                    <p>
                                        <small>Already have an account? Please
                                            <Link className='text-amber-700' to='/login'> login</Link>
                                        </small>
                                    </p>
                                </label>
                                <label className="label">
                                    <p className='text-rose-600 text-center'>
                                        <small>
                                            {error}

                                        </small>
                                    </p>
                                </label>
                                <div className="form-control mt-6">
                                    <button className="btn btn-error">Sign up</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;