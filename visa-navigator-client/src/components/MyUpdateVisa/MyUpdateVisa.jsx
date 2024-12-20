import { useNavigate, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyUpdateVisa = () => {
    const visa = useLoaderData();
    const { _id, country_image, country, visa_type, processing_time, required_documents, description, age_restriction, fee, validity, application_method, } = visa;

    const navigate = useNavigate();

    const handleUpdateVisa = (e) => {
        e.preventDefault();
        const form = e.target;
        const country_image = form.country_image.value;
        const country = form.country.value;
        const visa_type = form.visa_type.value;
        const processing_time = form.processing_time.value;
        const required_documents = Array.from(form.required_documents)
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.value);
        const description = form.description.value;
        const age_restriction = form.age_restriction.value;
        const fee = form.fee.value;
        const validity = form.validity.value;
        const application_method = form.application_method.value;

        const updatedVisa = {
            country_image,
            country,
            visa_type,
            processing_time,
            required_documents,
            description,
            age_restriction,
            fee,
            validity,
            application_method,
        };
        //console.log(updatedVisa);

        // send the data to the server
        fetch(`https://visa-navigator-server-sooty.vercel.app/visa/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedVisa)
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your visa has been updated successfully.',
                        icon: 'success',
                        confirmButtonText: 'DONE'
                    }).then(() => {
                        navigate('/my-added-visa');
                    })
                }
            })
    };

    return (
        <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-6">Update Visa Application</h2>
            <form onSubmit={handleUpdateVisa} className="space-y-6">
                <div className="w-full">
                    <label htmlFor="country_image" className="block text-sm font-medium text-gray-700 mb-1">Country Image:</label>
                    <input
                        type="text"
                        id="country_image"
                        name="country_image"
                        defaultValue={country_image}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Upload country image to imgbb and paste the link here"
                        required
                    />
                </div>

                <div className="w-full">
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country Name:</label>
                    <input
                        type="text"
                        id="country"
                        name="country"
                        defaultValue={country}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                    />
                </div>

                <div className="w-full">
                    <label htmlFor="visa_type" className="block text-sm font-medium text-gray-700 mb-1">Visa Type:</label>
                    <select
                        id="visa_type"
                        name="visa_type"
                        defaultValue={visa_type}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                        <option value="tourist">Tourist Visa</option>
                        <option value="student">Student Visa</option>
                        <option value="official">Official Visa</option>
                    </select>
                </div>

                <div className="w-full">
                    <label htmlFor="processing_time" className="block text-sm font-medium text-gray-700 mb-1">Processing Time (in days):</label>
                    <input
                        type="number"
                        id="processing_time"
                        name="processing_time"
                        defaultValue={processing_time}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                    />
                </div>

                <div className="w-full">
                    <label htmlFor="required_documents" className="block text-sm font-medium text-gray-700 mb-1">Required Documents:</label>
                    <div className="flex flex-wrap items-center space-x-4">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="passport"
                                name="required_documents"
                                defaultChecked={required_documents.includes('passport')}
                                value="passport"
                                className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                            />
                            <label htmlFor="passport" className="ml-2 text-sm text-gray-700">Valid Passport</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="application_form"
                                name="required_documents"
                                defaultChecked={required_documents.includes('application_form')}
                                value="application_form"
                                className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                            />
                            <label htmlFor="application_form" className="ml-2 text-sm text-gray-700">Visa Application Form</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="photo"
                                name="required_documents"
                                defaultChecked={required_documents.includes('photo')}
                                value="photo"
                                className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                            />
                            <label htmlFor="photo" className="ml-2 text-sm text-gray-700">Recent Passport-sized Photo</label>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        defaultValue={description}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        rows="4"
                        required
                    ></textarea>
                </div>

                <div className="w-full">
                    <label htmlFor="age_restriction" className="block text-sm font-medium text-gray-700 mb-1">Age Restriction (in years):</label>
                    <input
                        type="number"
                        id="age_restriction"
                        name="age_restriction"
                        defaultValue={age_restriction}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                    />
                </div>

                <div className="w-full">
                    <label htmlFor="fee" className="block text-sm font-medium text-gray-700 mb-1">Fee (in USD):</label>
                    <input
                        type="number"
                        id="fee"
                        name="fee"
                        defaultValue={fee}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                    />
                </div>

                <div className="w-full">
                    <label htmlFor="validity" className="block text-sm font-medium text-gray-700 mb-1">Validity (in months):</label>
                    <input
                        type="number"
                        id="validity"
                        name="validity"
                        defaultValue={validity}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                    />
                </div>

                <div className="w-full">
                    <label htmlFor="application_method" className="block text-sm font-medium text-gray-700 mb-1">Application Method:</label>
                    <input
                        type="text"
                        id="application_method"
                        name="application_method"
                        defaultValue={application_method}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full p-3 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                    Update Visa
                </button>
            </form>
        </div>
    );
};

export default MyUpdateVisa;