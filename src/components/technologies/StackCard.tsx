import type { Dispatch, SetStateAction } from "react";
import type { ITechType } from "../type/techType"
import { Bounce, toast } from "react-toastify";

export interface StackCardProps {
    technology: ITechType;
    addedStack: ITechType[];
    setAddedStack: Dispatch<SetStateAction<ITechType[]>>

}

export default function StackCard({ technology, addedStack, setAddedStack }: StackCardProps) {

    const handleStackRemove = (technology: ITechType) => {

        const newStack = addedStack.filter((tech) => tech.id != technology.id);
        setAddedStack(newStack);

        toast.warn(`${technology.name} is Removed from Stack`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });


    }


    return (
        <>

            <div className="border-gray-200 border border-dashed rounded-md p-2 m-2">
                <div className="flex justify-between gap-5 items-center bg-white">
                    <div className="flex items-center gap-2">
                        <div>
                            <img className="w-8 h-8" src={technology.icon} alt="" />
                        </div>
                        <div>
                            <h2 className="text-[16px] font-semibold">{technology.name}</h2>
                            <span className="text-gray-500 text-[14px]">{technology.category}</span>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleStackRemove(technology)} className="btn btn-square btn-sm hover:bg-[#FFDADA] hover:border-[#FFDADA] hover:text-[#D91B7E]">
                            <svg
                                aria-label="Close"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}