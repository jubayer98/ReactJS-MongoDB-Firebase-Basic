import { useLoaderData } from "react-router-dom";
import VisaCardGridView from "../AllVisas/VisaCardGridView";

const AllVisa = () => {
    const visas = useLoaderData();

    return (
        <div className="md:mt-20 md:mb-40 mt-[250px]">
            {visas && visas.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 md:h-screen">
                    {visas.map(visa => (
                        <VisaCardGridView key={visa._id} visa={visa}></VisaCardGridView>
                    ))}
                </div>
            ) : (
                <div className="flex items-center justify-center h-screen">
                    <div className="text-center p-10 bg-white shadow-md rounded-lg">
                        <h2 className="text-xl font-bold text-red-600">No Data Available</h2>
                        <p className="text-gray-500 mt-2">
                            Please refresh/check again later. Thank you.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AllVisa;