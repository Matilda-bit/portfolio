import React, {useRef} from 'react';

type NewTypicalProps = {
    loop: number;
    steps: any[];
    wrapper: string;
    // steps: [text: string, time: number]
}

const Typical: React.FC<NewTypicalProps> = ({loop, steps, wrapper='p'}) => {
    const typicalRef = useRef(null);
    const Component = wrapper; // <p>

    
    return (<div></div>);
}

export default Typical;