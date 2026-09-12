import type { Dispatch, SetStateAction } from "react";
import type { ITechType } from "../type/techType";
import TechnologyCard from "./TechnologyCard";

export interface TechnologyGridProps {
    technologies: ITechType[],
    addedStack: ITechType[],
    setAddedStack: Dispatch<SetStateAction<ITechType[]>>
 
}

const TechnologyGrid = ({ technologies, addedStack, setAddedStack }: TechnologyGridProps) => {

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {
                    technologies.map((technology: ITechType) => {
                        return (
                            <TechnologyCard
                                key={technology.id}
                                technology={technology}
                                addedStack={addedStack}
                                setAddedStack={setAddedStack}
                
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

export default TechnologyGrid;