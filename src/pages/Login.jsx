import axios from 'axios';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [response, setResponse] = useState("");

    const nav = useNavigate();

    const inputHandle = async (e) => {
        e.preventDefault();

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        let valid = true;
        setEmailError("");
        setPasswordError("");

        if (!emailRegex.test(email)) {
            valid = false;
            setEmailError("Please enter a valid email.");
        }

        if (!passwordRegex.test(password)) {
            valid = false;
            setPasswordError("Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.");
        }

        if (valid) {
            try {
                const res = await axios.post("http://127.0.0.1:8080/user", { email, password });
                
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('expiresAt', res.data.expiresAt);
                localStorage.setItem('firstName', res.data.user.firstName);
                localStorage.setItem('lastName', res.data.user.lastName);
                localStorage.setItem('email', res.data.user.email);
                localStorage.setItem("Role",res.data.user.role);

                nav("/");
            } catch (err) {
                const errorMsg = err.response?.data?.message || "Something went wrong.";
                setResponse(errorMsg);
            }
        }
    };

    return (
        <div className="py-3 py-md-5">
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6">
                        <div className="bg-light p-4 p-md-5 rounded shadow-sm">
                            <div className="row">
                                <div className="col-12">
                                    <div className="mb-5 text-center">
                                        <h3>Log in</h3>
                                        {response && <p className="mt-3 text-primary">{response}</p>}
                                    </div>
                                </div>
                            </div>
                            <form onSubmit={inputHandle}>
                                <div className="row gy-3 gy-md-4 overflow-hidden">
                                    <div className="col-12">
                                        <label htmlFor="email" className="form-label">
                                            Email <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            className={`form-control ${emailError ? 'is-invalid' : ''}`}
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="name@example.com"
                                        />
                                        {emailError && <div className="invalid-feedback d-block">{emailError}</div>}
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="password" className="form-label">
                                            Password <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="password"
                                            className={`form-control ${passwordError ? 'is-invalid' : ''}`}
                                            id="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="********"
                                        />
                                        {passwordError && <div className="invalid-feedback d-block">{passwordError}</div>}
                                    </div>
                                    <div className="col-12">
                                        <div className="d-grid">
                                            <button className="btn btn-lg btn-primary" type="submit">Log in now</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
