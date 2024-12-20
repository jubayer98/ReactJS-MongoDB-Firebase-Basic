import { NavLink } from "react-router-dom";

import { MdDocumentScanner } from "react-icons/md";
import { IoIosTime } from "react-icons/io";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { BsCalendar2DateFill } from "react-icons/bs";
import { MdEmojiPeople } from "react-icons/md";
import { MdSettingsApplications } from "react-icons/md";

function VisaCardGridView({ visa }) {
    const { _id, country_image, country, visa_type, processing_time, required_documents, description, age_restriction, fee, validity, application_method } = visa;

    return (
        <div className="container mx-auto p-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                    src={country_image}
                    alt={`${country} image`}
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h3 className="text-xl text-center text-red-600 font-bold mb-2">{country}</h3>
                    <p className="text-sm flex items-center justify-between text-gray-700 mb-1"><MdDocumentScanner /> {visa_type}</p>
                    <p className="text-sm flex items-center justify-between text-gray-700 mb-1"><IoIosTime /> {processing_time} days</p>
                    <p className="text-sm flex items-center justify-between text-gray-700 mb-1"><RiMoneyDollarBoxFill /> ${fee}</p>
                    <p className="text-sm flex items-center justify-between text-gray-700 mb-1"><BsCalendar2DateFill /> {validity} months</p>
                    <p className="text-sm flex items-center justify-between text-gray-700 mb-1"><MdEmojiPeople /> {age_restriction} years</p>
                    <p className="text-sm flex items-center justify-between text-gray-700 mb-2"><MdSettingsApplications /> {application_method}</p>
                    <NavLink to={`/all-visa/visa-details/${_id}`}>
                        <button className="w-full p-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                            View Details
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default VisaCardGridView;