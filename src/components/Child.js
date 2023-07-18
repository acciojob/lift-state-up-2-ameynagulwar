import React from "react";

const Child = ({changeParent}) => {

    return(
        <div className="child">
            <input className="child" type="text" onChange={(e) => changeParent(e.target.value)}/>
        </div>
    )
}

export default Child;