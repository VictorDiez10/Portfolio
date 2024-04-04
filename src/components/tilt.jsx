import {useEffect, useRef} from "react";
import VanillaTilt from "vanilla-tilt";

export default function tilt({options, ...rest}) {

    const tilt = useRef(null);

    useEffect(()=> {
        VanillaTilt.init(tilt.current, options);
    }, [options]);
    return <div ref={tilt} {...rest}/>
}
