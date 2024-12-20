import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import { MdDocumentScanner } from "react-icons/md";
import { IoIosTime } from "react-icons/io";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { BsCalendar2DateFill } from "react-icons/bs";
import { MdEmojiPeople } from "react-icons/md";
import { MdSettingsApplications } from "react-icons/md";

const MyAddedVisaCardGridView = ({ visa, visas, setVisas }) => {
    const { _id, country_image, country, visa_type, processing_time, required_documents, description, age_restriction, fee, validity, application_method, } = visa;

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
                fetch(`https://visa-navigator-server-sooty.vercel.app/visa/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your visa has been deleted.",
                                icon: "success"
                            });
                            const remaining = visas.filter(v => v._id !== _id);
                            setVisas(remaining);
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
                    className="w-full h-40 object-cover"
                />
                <div className="p-4">
                    <h3 className="text-xl text-center text-red-600 font-bold mb-2">{country}</h3>
                    <p className="text-sm flex items-center justify-between text-gray-700 mb-1"><MdDocumentScanner /> {visa_type}</p>
                    <p className="text-sm flex items-center justify-between text-gray-700 mb-1"><IoIosTime /> {processing_time} days</p>
                    <p className="text-sm flex items-center justify-between text-gray-700 mb-1"><RiMoneyDollarBoxFill /> ${fee}</p>
                    <p className="text-sm flex items-center justify-between text-gray-700 mb-1"><BsCalendar2DateFill /> {validity} months</p>
                    <p className="text-sm flex items-center justify-between text-gray-700 mb-1"><MdEmojiPeople /> {age_restriction} years</p>
                    <p className="text-sm flex items-center justify-between text-gray-700 mb-2"><MdSettingsApplications /> {application_method}</p>
                    <div className="space-y-2">
                        <Link to={`/my-update-visa/${_id}`}>
                            <button className="w-full p-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700">
                                Update/Edit
                            </button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="w-full p-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyAddedVisaCardGridView;