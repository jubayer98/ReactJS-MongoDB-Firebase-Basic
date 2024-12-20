import Swal from "sweetalert2";

import { MdDocumentScanner } from "react-icons/md";
import { IoIosTime } from "react-icons/io";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { BsCalendar2DateFill } from "react-icons/bs";
import { MdSettingsApplications } from "react-icons/md";
import { GrValidate } from "react-icons/gr";
import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { MdEmail } from "react-icons/md";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";

const MyVisaApplicationGridView = ({ application, applications, setApplications }) => {
    const { _id, country_image, country, visa_type, processing_time, required_documents, description, age_restriction, fee, validity, application_method, firstName, lastName, appliedDate } = application;
    const { user } = useContext(authContext);

    const handleDelete = id => {
        //console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://visa-navigator-server-sooty.vercel.app/application/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your visa application has been deleted.",
                                icon: "success"
                            });
                            const remaining = applications.filter(a => a._id !== _id);
                            setApplications(remaining);
                        }
                    })
            }
        });
    }

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
                    <p className="text-sm flex items-center justify-between text-gray-700 mb-2"><MdSettingsApplications /> {application_method}</p>
                    <p className="text-sm flex items-center justify-between text-gray-700 mb-2"><GrValidate /> {appliedDate}</p>
                    <p className="text-sm flex items-center justify-between text-gray-700 mb-2"><MdOutlineDriveFileRenameOutline /> {`${firstName} ${lastName}`}</p>
                    <p className="text-sm flex items-center justify-between text-gray-700 mb-2"><MdEmail /> {user?.email}</p>
                    <button onClick={() => handleDelete(_id)} className="w-full p-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyVisaApplicationGridView;