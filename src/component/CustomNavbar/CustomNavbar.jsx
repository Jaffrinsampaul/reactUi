import React from "react";

const CustomNavbar =({details, styles})=>{
    return(
        <div className={styles}>
            {
                details.map((nav, index)=>{
                    return(
                        <div key={index}>
                            <p>{nav}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CustomNavbar;