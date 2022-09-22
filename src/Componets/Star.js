import React, { useMemo, useState } from 'react'
import { BsStarFill } from "react-icons/bs";
const Star = () => {
    const user = [1, 2, 3, 4, 5]
    const [startvalue, startvalueState] = useState(null)
    const [hover, setHover] = useState(null)
    const handlechange = (itemval) => {
        startvalueState(itemval)

    }
    const handlehove = (hovervalue) => {
        setHover(hovervalue)
    }

    const value = user.map((item, index) => {
        const indexvalue = index + 1
        return <BsStarFill
            key={indexvalue}
            onClick={() => handlechange(indexvalue)}
            onMouseEnter={() => handlehove(indexvalue)}
            onMouseLeave={() => setHover(null)}
            className={indexvalue <= (startvalue || hover) ? "normalstar red" : "normalstar"}

        />
    })

    useMemo(() => {
        console.log("Start rating current location", startvalue)
    }, [startvalue])


    return (
        <div className='starmain'>
            <ul>
                <li> {value}</li>
            </ul>
            <p>My Rating : {startvalue} </p>
        </div>
    )
}

export default Star