import { useContext } from "react";
import Swal from "sweetalert2";
import { authContext } from "../AuthProvider/AuthProvider";

const Modal = ({ fee, country, country_image, visa_type, processing_time, validity, application_method }) => {
    const { user } = useContext(authContext);

    const handleAddApplication = (e) => {
        e.preventDefault()
        //console.log(e)
        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const email = e.target.email.value;
        const appliedDate = e.target.appliedDate.value;
        const fee = e.target.fee.value;

        const newAppointment = {
            firstName, lastName, email, appliedDate, fee, country, country_image, visa_type, processing_time, validity, application_method
        }

        // send the data to the server
        // send the data to the server
        fetch('https://visa-navigator-server-sooty.vercel.app/application', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAppointment)
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                if (data.insertedId) {
                    document.getElementById('my_modal_5').close();
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your visa application has added successfully.',
                        icon: 'success',
                        confirmButtonText: 'DONE'
                    })
                }
            })
    };

    return (
        <div>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Visa Application Form</h3>
                    <p className="py-4">Please fill out the following information and click 'Apply' to submit your application. Press ESC key or click the button below to close.</p>

                    <form method="dialog" onSubmit={handleAddApplication} className="space-y-4">
                        {/* Email Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" value={user?.email} readOnly className="input input-bordered w-full bg-gray-100" />
                        </div>

                        {/* First Name Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700" htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" name="firstName" required className="input input-bordered w-full" />
                        </div>

                        {/* Last Name Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700" htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName" name="lastName" required className="input input-bordered w-full" />
                        </div>

                        {/* Applied Date (Current Date) */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700" htmlFor="appliedDate">Applied Date</label>
                            <input type="text" id="appliedDate" name="appliedDate" value={new Date().toLocaleDateString()} readOnly className="input input-bordered w-full bg-gray-100" />
                        </div>

                        {/* Visa Fee Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700" htmlFor="fee">Fee (Visa Fee)</label>
                            <input type="text" id="fee" name="fee" value={fee || ''} readOnly className="input input-bordered w-full bg-gray-100" />
                            {/* Change value="$100" to match your visa fee variable dynamically if needed */}
                        </div>

                        {/* Modal Action Buttons */}
                        <div className="modal-action">
                            {/* Apply Button */}
                            <button className="btn btn-primary" type="submit">Apply</button>

                            {/* Close Button */}
                            <button className="btn" type="button" onClick={() => document.getElementById('my_modal_5').close()}>Close</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default Modal;