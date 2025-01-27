import React, { useRef, useEffect, memo, ElementType } from 'react';
import { type, type as loopedType } from "./typical-animation";

import "./Typical.css";

type NewTypicalProps = {
    loop: number;
    steps: any[];
    wrapper?: ElementType;
}

const Typical: React.FC<NewTypicalProps> = ({ loop, steps, wrapper = 'p' }) => {
    const typicalRef = useRef<HTMLElement>(null);
    const Component = wrapper; // <p>
    const classNames = ["typicalWrapper"];

    useEffect(() => {
        if (typicalRef.current) {
            if (loop === Infinity) {
                type(typicalRef.current, ...steps, loopedType);
            } else if (typeof loop === "number") {
                type(
                    typicalRef.current,
                    ...Array(loop)
                        .fill(steps)
                        .flat()
                );
            } else {
                type(typicalRef.current, ...steps);
            }

        }

    }, [loop, steps]);


    if(typicalRef) {
        return <Component ref={typicalRef} className={classNames.join(' ')} />;
    }
    return null;
}

export default memo(Typical);