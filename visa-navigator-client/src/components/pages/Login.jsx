import { useContext, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Navigate, NavLink, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const { handleGoogleSignIn, handleEmailSignIn, user } = useContext(authContext);
    const [error, setError] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    if (user) {
        // Redirect to home if user is already logged in
        return <Navigate to="/" />;
    }

    // Set default redirect path to home page if location.state is null or undefined
    const from = location.state?.from?.pathname || "/";

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        handleEmailSignIn(email, password)
            .then(res => {
                navigate(from); // Redirect to the 'from' path or home page
            })
            .catch(err => {
                setError(err.message);
            });
    };

    const googleSignInHandler = () => {
        handleGoogleSignIn()
            .then(res => {
                navigate(from); // Redirect to the 'from' path or home page
            })
            .catch(err => {
                setError(err.message);
            });
    };

    return (
        <div className="container mx-auto p-8 h-screen md:mt-20 mt-[250px]">
            <h2 className="text-2xl font-bold mb-6 text-red-600 text-center">User Login</h2>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg space-y-4">
                {/* Email Field */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="input input-bordered w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                        required
                    />
                </div>

                {/* Password Field */}
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="input input-bordered w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                        required
                    />
                </div>

                {/* Forget Password Link */}
                <div className="text-right">
                    <a href="#" className="text-sm text-red-600 hover:underline">Forgot Password?</a>
                </div>

                {/* Login Button */}
                <div>
                    <button
                        type="submit"
                        className="w-full p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition ease-in-out duration-200"
                    >
                        Login
                    </button>
                </div>

                {/* Google Login Button */}
                <div className="text-center mt-4">
                    <button
                        type="button"
                        onClick={googleSignInHandler}
                        className="w-full p-2 border border-gray-300 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-100 transition ease-in-out duration-200"
                    >
                        <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google Logo" className="h-5 w-5" />
                        <span>Login with Google</span>
                    </button>
                </div>

                {/* New User Register Link */}
                <div className="text-center mt-4">
                    <p className="text-sm text-gray-700">New to this application? <NavLink to="/register" className="text-red-600 hover:underline">Register here</NavLink></p>
                </div>
            </form>
            {error &&
                <div className="text-center mt-4">
                    <p className="text-sm text-red-600">{error}</p>
                </div>
            }
        </div>
    );
};

export default Login;