import type { Dispatch, SetStateAction } from "react";
import type { ITechType } from "../type/techType";
import StackCard from "./StackCard";
import { Bounce, toast } from "react-toastify";

export interface StackGridProps {
    addedStack: ITechType[]
    setAddedStack: Dispatch<SetStateAction<ITechType[]>>

}

const StackGrid = ({ addedStack, setAddedStack }: StackGridProps) => {

    const handleDeleteStack = () => {
        setAddedStack([]);
        toast.warn('All Technologies are Removed!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });
    }


    return (
        <>
            <div className="border-gray-200  border rounded-md p-2 m-2">
                <div className="p-2 m-2">
                    <h2 className="text-lg font-semibold">Your Stack</h2>
                    <p className="text-gray-500">{addedStack.length == 0 ? "No technology selected yet." : `${addedStack.length} Technology Selected`}</p>
                </div>
                <div>
                    {
                        addedStack.length == 0 ? (
                            <div className="border-gray-200 border border-dashed rounded-md p-2 m-2">
                                <h2 className="text-gray-500 text-center p-5">Your stack is empty.</h2>
                            </div>
                        ) :
                            addedStack.map((technology) => {
                                return (
                                    <StackCard
                                        key={technology.id}
                                        technology={technology}
                                        addedStack={addedStack}
                                        setAddedStack={setAddedStack}

                                    />
                                )
                            })
                    }
                </div>
                <button onClick={handleDeleteStack} className={addedStack.length === 0 ? "hidden" : "mt-10 mb-5 btn btn-block text-[16px] text-[#D91B7E] font-semibold border border-[#D91B7E] hover:bg-[#FFDADA]"}>Remove All</button>
            </div>

        </>
    )
}

export default StackGrid;