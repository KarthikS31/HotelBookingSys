import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Login.css";

import { apiCall } from "../Actions/api";
import { loginSuccess } from "../Reducers/AuthReducer";

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isLogin, setIsLogin] = useState(true);
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        if (!isLogin && !name.trim()) {
            setError("Please enter your name.");
            return;
        }

        setLoading(true);

        const endpoint = isLogin ? "/user/login" : "/user/add";

        const body = isLogin
            ? { mail, password }
            : { name: name.trim(), mail, password };

        apiCall(
            endpoint,
            "POST",
            body,
            {},
            (data) => {
                setLoading(false);

                if (isLogin) {
                    if (!data.token) {
                        setError("Login response did not contain a token.");
                        return;
                    }

                    dispatch(
                        loginSuccess({
                            token: data.token,
                            user: data.user ?? null
                        })
                    );

                    navigate("/");
                } else {
                    setIsLogin(true);
                    setName("");
                    setPassword("");
                    setError("");
                }
            },
            (err) => {
                setLoading(false);
                setError(
                    isLogin
                        ? "Invalid email or password."
                        : "Signup failed. Check your details and try again."
                );
                console.error("Authentication error:", err);
            }
        );
    };

    return (
        <div className="login-page">
            <div className="login-card">
                <div className="login-brand">RADISSON GOLD</div>

                <h1>{isLogin ? "Welcome Back" : "Create Account"}</h1>

                <p className="login-subtitle">
                    {isLogin
                        ? "Sign in to continue your stay."
                        : "Create an account to book your stay."}
                </p>

                <form onSubmit={handleSubmit}>
                    {!isLogin && (
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required={!isLogin}
                            />
                        </div>
                    )}

                    <div className="form-group">
                        <label htmlFor="mail">Email Address</label>
                        <input
                            id="mail"
                            type="email"
                            placeholder="Enter your email"
                            value={mail}
                            onChange={(e) => setMail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            minLength={6}
                        />
                    </div>

                    {error && (
                        <p className="auth-error" role="alert">
                            {error}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="submit-btn"
                        disabled={loading}
                    >
                        {loading
                            ? "Please wait..."
                            : isLogin
                                ? "Login"
                                : "Create Account"}
                    </button>
                </form>

                <p className="auth-switch">
                    {isLogin
                        ? "Don't have an account?"
                        : "Already have an account?"}

                    <button
                        type="button"
                        onClick={() => {
                            setIsLogin(!isLogin);
                            setError("");
                        }}
                    >
                        {isLogin ? " Sign up" : " Login"}
                    </button>
                </p>
            </div>
        </div>
    );
}

export default Login;