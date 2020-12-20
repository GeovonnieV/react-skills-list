import React from "react";

const Display = ({skillsList}) => {
    return(
        <div className="container">
            <h4>These are your skills</h4>
            {/* map takes in 2 arguments skill is the item in the array, index is the index number aka key each item gets automatically */}
            {skillsList.map((skill,index) => (
                // for each skill make me a div with a margin of 3 and a h3 displaying the actual skill akak item
                <div className="m-3">
                    <h3>{skill}</h3>
                </div>
            ) )};
        </div>
    )
}

export default Display;