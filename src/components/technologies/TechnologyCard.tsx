import { FaStar } from "react-icons/fa";
import type { ITechType } from "../type/techType";
import { type Dispatch } from "react";
import { PiCheckBold } from "react-icons/pi";

export interface TechnologyCardProps {
    technology: ITechType;
    addedStack: ITechType[];
    setAddedStack: Dispatch<React.SetStateAction<ITechType[]>>
}

const TechnologyCard = ({ technology, addedStack, setAddedStack }: TechnologyCardProps) => {

    // const [isAdded, setIsAdded] = useState<Boolean>(false);

    // const handleAddToStack = () => {
    //     const stackExist = addedStack.some(t => t.id === technology.id);
    //     if (!stackExist) {
    //         setIsAdded(true)
    //         const newStack = [...addedStack, technology]
    //         setAddedStack(newStack);
    //     }
    // }

    const isAdded = addedStack.some(
        tech => tech.id === technology.id
    );
    const handleAddToStack = () => {

        if (!isAdded) {
            setAddedStack([...addedStack, technology]);
        }
    };


    return (
        <>
            <div
                className={isAdded ? "border border-[#D91B7E] rounded-xl p-6 m-2 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#D91B7E]"
                    : "border border-gray-200 rounded-xl p-6 m-2 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#D91B7E]"
                }>
                <div>
                    <div className="flex justify-between items-center">
                        <img
                            className="w-10 h-10 object-contain"
                            src={technology.icon}
                            alt="icon"
                        />

                        <span className="badge badge-lg rounded-full bg-[#FFDADA] text-gray-800 border-0 px-4 py-3 font-medium">
                            {technology.badge}
                        </span>
                    </div>

                    <div className="mt-5 mb-2">
                        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                            {technology.name}
                        </h2>
                    </div>

                    <div>
                        <p className="text-sm leading-6 text-gray-600 min-h-[72px]">
                            {technology.description}
                        </p>
                    </div>

                    <div className="my-5">
                        <hr className="border-gray-100" />
                    </div>

                    <div className="flex justify-between items-center gap-2">
                        <button className="bg-gray-50 border border-gray-200 text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-lg">
                            {technology.category}
                        </button>

                        <button className="text-gray-500 text-xs font-medium px-1">
                            {technology.difficulty}
                        </button>

                        <button className="text-gray-700 text-sm font-semibold px-1 flex items-center gap-1">
                            <FaStar className="text-yellow-400" />
                            {technology.rating}
                        </button>
                    </div>

                    <div className="mt-6">
                        <button
                            onClick={() => handleAddToStack()}
                            className={isAdded ? "btn btn-block rounded-lg border-0 bg-[#FFDADA] text-sm font-semibold text-[#D91B7E] hover:bg-[#FFDADA] hover:text-[#D91B7E]"
                                : "btn btn-block rounded-lg border-0 bg-[#111828] text-sm font-semibold text-white hover:bg-[#FFDADA] hover:text-[#D91B7E]"}
                        >
                            {isAdded ? <span className="flex items-center gap-1"><PiCheckBold />
                                Added to Stack</span> : "Add to Stack"}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TechnologyCard;