import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Modal from "../Modal/Modal";

const VisaDetails = () => {
    // Destructure the properties from useLoaderData
    const visa = useLoaderData();

    // State to store the fee information
    const [fee, setFee] = useState(null);

    // Handle missing data gracefully
    if (!visa) {
        return <div className="container mx-auto p-8">Visa details not found.</div>;
    }

    const {
        country_image,
        country,
        visa_type,
        processing_time,
        required_documents,
        description,
        age_restriction,
        fee: visaFee,
        validity,
        application_method
    } = visa;

    return (
        <div className="container mx-auto p-8">
            <div className="md:mt-20 md:mb-40 mt-[250px]">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img
                        src={country_image}
                        alt={`${country} image`}
                        className="w-full h-[480px]"
                    />
                    <div className="p-4">
                        <h3 className="text-3xl font-bold mb-2">{country}</h3>
                        <p className="text-lg text-gray-700 mb-1"><b>Visa Type:</b> {visa_type}</p>
                        <p className="text-lg text-gray-700 mb-1"><b>Processing Time:</b> {processing_time} days</p>
                        <div className="mb-2">
                            <p className="text-lg text-gray-700 font-bold">Required Documents:</p>
                            <ul className="list-disc list-inside text-gray-700">
                                {required_documents.map((doc, idx) => (
                                    <li key={idx} className="text-md">{doc}</li>
                                ))}
                            </ul>
                        </div>
                        <p className="text-lg text-gray-700 mb-1"><b>Fee:</b> ${visaFee}</p>
                        <p className="text-lg text-gray-700 mb-1"><b>Validity:</b> {validity} months</p>
                        <p className="text-lg text-gray-700 mb-1"><b>Age Restriction:</b> {age_restriction} years</p>
                        <p className="text-lg text-gray-700 mb-2"><b>Application Method:</b> {application_method}</p>
                        <p className="text-lg text-gray-700 mb-4"><b>Description:</b> {description}</p>
                        <button
                            onClick={() => {
                                document.getElementById('my_modal_5').showModal();
                                setFee(visaFee);  // Set fee state when the modal is shown
                            }}
                            className="w-full p-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                        >
                            Apply for the Visa
                        </button>
                    </div>
                </div>
            </div>
            <Modal
                fee={fee}
                country={country}
                country_image={country_image}
                visa_type={visa_type}
                processing_time={processing_time}
                validity={validity}
                application_method={application_method}
            >
            </Modal> {/* Pass fee as a prop to Modal */}
        </div>
    );
};

export default VisaDetails;