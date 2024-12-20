import { useLoaderData } from "react-router-dom";
import MyAddedVisaCardGridView from "../MyAddedVisa/MyAddedVisaCardGridView";
import { useContext, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";

const MyAddedVisa = () => {
    const { user } = useContext(authContext);
    const loadedVisas = useLoaderData();

    const userData = loadedVisas.filter(data => data.email === user?.email);

    const [visas, setVisas] = useState(userData);

    return (
        <div className="md:mt-20 md:mb-40 mt-[250px]">
            {visas && visas.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 md:h-screen">
                    {visas.map(visa => (
                        <MyAddedVisaCardGridView
                            key={visa._id}
                            visa={visa}
                            visas={visas}
                            setVisas={setVisas}
                        />
                    ))}
                </div>
            ) : (
                <div className="flex items-center justify-center h-screen">
                    <div className="text-center p-10 bg-white shadow-md rounded-lg">
                        <h2 className="text-xl font-bold text-red-600">No Visa Data Available</h2>
                        <p className="text-gray-500 mt-2">
                        You have not added any visas yet. Please check back later.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyAddedVisa;