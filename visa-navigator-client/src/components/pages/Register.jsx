import { useContext, useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const { handleSignUp, manageProfile, user } = useContext(authContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    if (user) {
        // Redirect to home if user is already logged in
        return <Navigate to="/" />;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photoUrl = e.target.photoUrl.value;
        const password = e.target.password.value;

        //console.log(name, email, photoUrl, password);
        if (password.length < 6) {
            setError("Password must contain at least six characters")
            return;
        }
        if (!/[a-z]/.test(password)) {
            setError("Password must contain at least one lowercase letter")
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setError("Password must contain at least one uppercase letter")
            return;
        }

        // handleSignUp(email, password)
        //     .then(res => {
        //         manageProfile(name, photoUrl)
        //     })

        handleSignUp(email, password)
            .then((res) => {
                return manageProfile(name, photoUrl);
            })
            .then(() => {
                // Show success alert using Swal.fire
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your registration has been completed.",
                    showConfirmButton: false,
                    timer: 1500,
                });

                // Redirect to home page after the alert
                setTimeout(() => {
                    navigate("/");
                }, 1500); // Wait for the alert to complete
            })
            .catch((err) => {
                // Handle any errors
                setError(err.message);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: err.message,
                });
            });
    }

    return (
        <div className="container mx-auto p-8 h-screen md:mt-20 mt-[250px]">
            <h2 className="text-2xl font-bold mb-6 text-red-600 text-center">User Registration</h2>
            <form action="" onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg space-y-4">
                {/* Name Field */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="input input-bordered w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                        required
                    />
                </div>

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

                {/* Photo URL Field */}
                <div>
                    <label htmlFor="photoUrl" className="block text-sm font-medium text-gray-700">Photo URL</label>
                    <input
                        type="text"
                        id="photoUrl"
                        name="photoUrl"
                        className="input input-bordered w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
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

                {/* Register Button */}
                <div>
                    <button
                        type="submit"
                        className="w-full p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition ease-in-out duration-200"
                    >
                        Register
                    </button>
                </div>
                {/* Existing User Login Link */}
                <div className="text-center mt-4">
                    <p className="text-sm text-gray-700">Already have an account? <NavLink to="/login" className="text-red-600 hover:underline">Login here</NavLink></p>
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

export default Register;