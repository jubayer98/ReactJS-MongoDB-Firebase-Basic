import { NavLink } from "react-router-dom";
import { GrVisa } from "react-icons/gr";
import "../../assets/styles.css";
import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Tooltip } from 'react-tooltip'
import { TbLogout } from "react-icons/tb";
import { TbLogin } from "react-icons/tb";

const Navbar = () => {
    const { handleSignOut, user } = useContext(authContext);

    return (
        <div>
            <div className="flex text-lg items-center flex-col md:flex-row md:justify-between bg-white shadow-md px-10 py-4 fixed top-0 w-full z-50">
                <NavLink className="flex items-center" to="/"><GrVisa className="text-3xl" /> NAVIGATOR ..</NavLink>
                <NavLink className="hover:underline" to="/">Home</NavLink>
                <NavLink className="hover:underline" to="/all-visa">All Visa</NavLink>
                <NavLink className="hover:underline" to="/add-visa">Add Visa</NavLink>
                <NavLink className="hover:underline" to="/my-added-visa">My Added Visa</NavLink>
                <NavLink className="hover:underline" to="/my-visa-application">My Visa Application</NavLink>


                {user?.email ? (
                    <div className="flex items-center space-x-4">
                        <div>
                            <img
                                src={user.photoURL || "https://via.placeholder.com/40"}
                                alt="User Avatar"
                                className="w-10 h-10 rounded-full cursor-pointer"
                                data-tooltip-id="user-tooltip"
                                data-tooltip-content={user?.displayName || "User"}
                            />
                            <Tooltip id="user-tooltip" place="bottom" />
                        </div>
                        <button
                            onClick={handleSignOut}
                            className="text-3xl font-bold"
                        >
                            <TbLogout />
                        </button>
                    </div>
                ) : (
                    <NavLink className="text-3xl font-bold" to="/login"><TbLogin /></NavLink>
                )}
            </div>
            <hr className="bg-red-600" />
        </div>
    );
};

export default Navbar;