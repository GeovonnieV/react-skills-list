import React from "react";

const Footer = () => {
    // some style to the img
    const imgStyle = {
        height: "15em", 
        width: "15em"
    }

    return(
        <div className="container m-3">
            <hr />
            <h6>This is the footer</h6>
            <img src="http://placekitten.com/200/300" alt="cat" style={imgStyle} />
        </div>
    )
}

export default Footer;