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
            <div className="container mx-auto py-10 grid grid-cols-1 gap-5">
                {/* Header: Explore Technology */}
                <div>
                    <h2>Explore the Technologies</h2>
                    <p>Pick one technology per category to build your ideal stack.</p>
                </div>

                {/* Dynamic Grid */}
                <div className="grid grid-cols-4 justify-between gap-5">
                    {/* Grid: Categories */}
                    <div className="col-span-3 ...">
                        <TechnologyGrid
                            technologies={technologies}
                            addedStack={addedStack}
                            setAddedStack={setAddedStack}

                        />
                    </div>

                    {/* Your Stack: Sidebar */}
                    <div className="col-span-1 ...">
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