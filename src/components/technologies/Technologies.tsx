import { use, useState } from "react"
import type { ITechType } from "../type/techType"
import StackGrid from "./StackGrid";
import TechnologyGrid from "./TechnologyGrid";

export interface TechnologiesProps {
    techDataPromise: Promise<ITechType[]>
}

export default function Technologies({ techDataPromise }: TechnologiesProps) {

    const technologies = use(techDataPromise);

    const [addedStack, setAddedStack] = useState<ITechType[]>([]);

    return (
        <>
            <div className="container mx-auto py-20 px-5 grid grid-cols-1 gap-5">
                {/* Header: Explore Technology */}
                <div className="flex flex-col gap-3">
                    <h2 className="text-center lg:text-start text-2xl lg:text-5xl font-bold">Explore the <span className="bg-linear-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent">Technologies</span></h2>
                    <p className="text-center lg:text-start text-[18px] lg:text-[25px] text-gray-500">Pick one technology per category to build your ideal stack.</p>
                </div>

                {/* Dynamic Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-5">
                    {/* Grid: Categories */}
                    <div className="col-span-3">
                        <TechnologyGrid
                            technologies={technologies}
                            addedStack={addedStack}
                            setAddedStack={setAddedStack}

                        />
                    </div>

                    {/* Your Stack: Sidebar */}
                    <div className="col-span-1">
                        <StackGrid
                            addedStack={addedStack}
                            setAddedStack={setAddedStack}
                        />
                    </div>

                </div>
            </div>
        </>
    )
}