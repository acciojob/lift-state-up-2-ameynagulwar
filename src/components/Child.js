import React from "react";

const Child = ({changeParent}) => {

    return(
        <div>
            <input type="text" onChange={(e) => changeParent(e.target.value)}/>
        </div>
    )
}

export default Child;