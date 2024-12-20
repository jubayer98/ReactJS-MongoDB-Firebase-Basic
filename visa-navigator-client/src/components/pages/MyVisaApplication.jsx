import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyVisaApplicationGridView from "../MyVisaApplications/MyVisaApplicationGridView";
import { authContext } from "../AuthProvider/AuthProvider";

const MyVisaApplication = () => {
    const { user } = useContext(authContext); 
    const loadedApplications = useLoaderData();

    const userData = loadedApplications.filter(data => data.email === user?.email);

    const [applications, setApplications] = useState(userData);

    return (
        <div className="md:mt-20 md:mb-40 mt-[250px]">
            {applications && applications.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 md:h-screen">
                    {applications.map(application => (
                        <MyVisaApplicationGridView
                            key={application._id}
                            application={application}
                            applications={applications}
                            setApplications={setApplications}
                        />
                    ))}
                </div>
            ) : (
                <div className="flex items-center justify-center h-screen">
                    <div className="text-center p-10 bg-white shadow-md rounded-lg">
                        <h2 className="text-xl font-bold text-red-600">No Applications Found</h2>
                        <p className="text-gray-500 mt-2">
                            You have not submitted any applications yet. Please check back later.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyVisaApplication;